<script setup lang="ts">
import { reactive, ref } from 'vue'

// import WelcomeItem from './WelcomeItem.vue'
const address = ref('...')
const walletInputs = reactive([
  {
    placeholder: 'Address To',
    type: "text",
    value: ''
  },
  {
    placeholder: 'Amount (ETH)',
    type: "number",
    value: ''
  },
  {
    placeholder: 'Keyword (Gif)',
    type: "text",
    value: ''
  },
  {
    placeholder: 'Enter Message',
    type: "text",
    value: ''
  },
])
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
          class="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 1024 1024"
            class="text-white mr-2"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm144.1 454.9L437.7 677.8a8.02 8.02 0 0 1-12.7-6.5V353.7a8 8 0 0 1 12.7-6.5L656.1 506a7.9 7.9 0 0 1 0 12.9z"
            ></path>
          </svg>
          <p class="text-white text-base font-semibold">Connect Wallet</p>
        </button>
        <div class="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
          <div
            class="rounded-tl-2xl min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white"
          >
            Reliability
          </div>
          <div
            class="min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white"
          >
            Security
          </div>
          <div
            class="sm:rounded-tr-2xl min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white"
          >
            Ethereum
          </div>
          <div
            class="sm:rounded-bl-2xl min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white"
          >
            Web 3.0
          </div>
          <div
            class="min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white"
          >
            Low Fees
          </div>
          <div
            class="rounded-br-2xl min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white"
          >
            Blockchain
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
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 16 16"
                font-size="17"
                color="#fff"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                style="color: rgb(255, 255, 255)"
              >
                <path
                  d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                ></path>
                <path
                  d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
                ></path>
              </svg>
            </div>
            <div>
              <p class="text-white font-light text-sm">{{ address }}</p>
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
            class="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
            :value="walletInput.value"
          />
          <!-- <input
            placeholder="Address To"
            type="text"
            step="0.0001"
            class="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
            value=""
          /><input
            placeholder="Amount (ETH)"
            type="number"
            step="0.0001"
            class="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
            value=""
          /><input
            placeholder="Keyword (Gif)"
            type="text"
            step="0.0001"
            class="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
            value=""
          /><input
            placeholder="Enter Message"
            type="text"
            step="0.0001"
            class="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
            value=""
          /> -->
          <div class="h-[1px] w-full bg-gray-400 my-2"></div>
          <button
            type="button"
            class="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
          >
            Send now
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
