import { ref } from 'vue'
import { acceptHMRUpdate, defineStore } from 'pinia'

export const useLoadingStore = defineStore('loading', () => {
  const isLoading = ref(false)
  return { isLoading }
})

if (import.meta.hot) import.meta.hot.accept(acceptHMRUpdate(useLoadingStore, import.meta.hot))
