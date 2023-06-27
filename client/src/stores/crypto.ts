import { ref, computed, type Ref, reactive } from 'vue'
import { acceptHMRUpdate, defineStore } from 'pinia'
import { ethers } from 'ethers'
import { contractABI, contractAddress } from '@/utils/constants'

export const useCryptoStore = defineStore('crypto', () => {
  const { ethereum } = window
  const accounts: Ref<string[]> = ref([])
  const formData = reactive({
    addressFrom: accounts.value[0],
    addressTo: '',
    amount: null,
    message: '',
    keyword: ''
  })

  const getEthereumContract = async () => {
    // if (!ethereum) {
    //   alert('Must connect to MetaMask')
    //   return
    // }
    // const provider = new ethers.BrowserProvider(ethereum)
    // const signer = await provider.getSigner()
    // const transactionContract = new ethers.Contract(contractAddress, contractABI, signer)
    // console.log(provider, signer, transactionContract)
  }

  const checkWalletIsConnected = async () => {
    if (ethereum) {
      const result = await ethereum.request({ method: 'eth_accounts' })
      accounts.value = result

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
    accounts.value = result
  }

  const sendTransactions = async () => {
    console.log(formData)
  }

  return {
    getEthereumContract,
    checkWalletIsConnected,
    connectWallet,
    accounts,
    formData,
    sendTransactions
  }
})

if (import.meta.hot) import.meta.hot.accept(acceptHMRUpdate(useCryptoStore, import.meta.hot))
