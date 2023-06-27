<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useCryptoStore } from '@/stores/crypto'

const messageInput = ref(null as any)
const cryptoStore = useCryptoStore()
const { connectWallet, checkWalletIsConnected, getEthereumContract, sendTransactions, formData } =
  useCryptoStore()
const { accounts } = storeToRefs(cryptoStore)

onMounted(() => {
  checkWalletIsConnected()
})

const address = computed(() => {
  return accounts.value[0] ?? ''
})
const walletInputs = [
  {
    placeholder: 'Address To',
    type: 'text',
    value: 'addressTo'
  },
  {
    placeholder: 'Amount (ETH)',
    type: 'number',
    value: 'amount'
  },
  {
    placeholder: 'Keyword (Gif)',
    type: 'text',
    value: 'keyword'
  },
  {
    placeholder: 'Enter Message',
    type: 'text',
    value: 'message'
  }
] as const
const welcomeBoxText = [
  'Reliability',
  'Security',
  'Ethereum',
  'Web 3.0',
  'Low Fees',
  'Blockchain'
] as const
</script>

<template>
  <div class="flex w-full justify-center items-center">
    <div class="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
      <div class="flex flex-1 justify-start items-start flex-col mf:mr-10">
        <h1 class="text-3xl sm:text-5xl text-white text-gradient py-1">
          Send Crypto <br />
          across the world
        </h1>
        <p class="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
          Explore the crypto world. Buy and sell cryptocurrencies easily on Krypto.
        </p>
        <button
          type="button"
          @click="connectWallet"
          v-if="accounts.length === 0"
          class="w-full flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
        >
          <v-icon name="bi-play-circle-fill" class="mr-2" fill="white" />
          <p class="text-white text-base font-semibold">Connect Wallet</p>
        </button>
        <div class="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
          <div
            class="min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white"
            :class="{
              'rounded-t-lg': index === 0,
              'rounded-tr-lg': index === 2,
              'rounded-bl-lg': index === 3,
              'rounded-b-lg': index === 5
            }"
            v-for="(text, index) in welcomeBoxText"
            :key="index"
          >
            {{ text }}
          </div>
        </div>
      </div>
      <div class="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
        <div
          class="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism"
        >
          <div class="flex justify-between flex-col w-full h-full">
            <div class="flex justify-between items-start">
              <div class="">
                <v-icon name="ci-eth" :fill="'white'" scale="2" />
              </div>
              <v-icon name="hi-information-circle" fill="white" />
            </div>
            <div>
              <p
                class="w-1/3 text-white font-light text-sm text-ellipsis overflow-hidden"
                :title="address"
              >
                {{ address }}
              </p>
              <p class="text-white font-semibold text-lg mt-1">Ethereum</p>
            </div>
          </div>
        </div>
        <div class="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
          <input
            v-for="walletInput in walletInputs"
            :key="walletInput.placeholder"
            :placeholder="walletInput.placeholder"
            :type="walletInput.type"
            step="0.0001"
            min="0"
            v-model="formData[walletInput.value]"
            class="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
          />
          <div class="h-[1px] w-full bg-gray-400 my-2"></div>
          <button
            type="button"
            @click="sendTransactions"
            class="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
          >
            Send now
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
