import { ref, computed, type Ref, reactive, toRef } from 'vue'
import { acceptHMRUpdate, defineStore } from 'pinia'
import { Contract, ethers } from 'ethers'
import { contractABI, contractAddress } from '@/utils/constants'
import { Transactions__factory, type Transactions, factories } from '@types-typechain'
import type { TransactionsInterface } from '@types-typechain/Transactions'

export const useCryptoStore = defineStore('crypto', () => {
  const { ethereum } = window
  const accounts: Ref<string> = ref('')
  const formData = reactive({
    addressFrom: accounts,
    addressTo: '',
    amount: 0,
    message: '',
    keyword: ''
  })
  const transactionCount = ref(localStorage.getItem('transactionCount'))

  const getEthereumContract = async () => {
    if (!ethereum) {
      alert('Must connect to MetaMask')
      return
    }

    const contract = await Transactions__factory.connect(contractAddress)

    return contract
  }

  const checkWalletIsConnected = async () => {
    if (ethereum) {
      const result = await ethereum.request({ method: 'eth_accounts' })
      accounts.value = result[0]

      return true
    }

    return false
  }

  const connectWallet = async () => {
    if (!ethereum) {
      alert('Must connect to MetaMask')
      return
    }

    const result = await ethereum.request({ method: 'eth_requestAccounts' })
    accounts.value = result[0]
  }

  const sendTransactions = async () => {
    if (!ethereum) return
    try {
      const { addressFrom, addressTo, amount, keyword, message } = formData
      const contract = await getEthereumContract()

      await ethereum.request({
        method: 'eth_sendTransaction',
        // The following sends an EIP-1559 transaction. Legacy transactions are also supported.
        params: [
          {
            from: addressFrom, // The user's active address.
            to: addressTo, // Required except during contract publications.
            value: ethers.parseEther(`${0.001}`).toString(16), // Only required to send ether to the recipient from the initiating external account.
            gasLimit: '0x5028' // Customizable by the user during MetaMask confirmation.
          }
        ]
      })

      // const transactionHash = await contract?.addToBlockchain(
      //   addressTo,
      //   parsedAmount,
      //   message,
      //   keyword
      // )
      // console.log(`transaction hash: ${transactionHash?.hash}`)
      // await transactionHash?.wait()

      // const count = await contract?.getTransactionCount()
      // transactionCount.value = count?.toString() ?? ''
    } catch (err) {
      console.log(err)
    }
  }

  return {
    // getEthereumContract,
    checkWalletIsConnected,
    connectWallet,
    accounts,
    formData,
    sendTransactions
  }
})

if (import.meta.hot) import.meta.hot.accept(acceptHMRUpdate(useCryptoStore, import.meta.hot))
