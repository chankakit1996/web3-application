declare global {
  namespace NodeJS {
    interface ProcessEnv {
        PRIVATE_KEY?: string
        BLOCKCHAIN_NETWORK?: string
        BLOCKCHAIN_NETWORK_URL?: string
    }
  }
}

export {}
