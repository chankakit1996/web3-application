/// <reference types="vite/client" />
import { OhVueIcon } from 'oh-vue-icons'

declare module '@vue/runtime-core' {
  // Vue 3
  // declare module 'vue' {   // Vue 2.7
  // declare module '@vue/runtime-dom' {  // Vue <= 2.6.14
  export interface GlobalComponents {
    'v-icon': typeof OhVueIcon
  }
}

declare global {
  interface Window {
    ethereum?: import('ethers').Eip1193Provider
  }
}

export {}

export {}
