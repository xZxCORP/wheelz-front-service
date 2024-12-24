/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_BASE_USER_SERVICE_URL: string
    readonly VITE_BASE_AUTH_SERVICE_URL: string
    readonly VITE_BASE_TRANSACTION_SERVICE_URL: string
    readonly VITE_BASE_CHAIN_SERVICE_URL: string
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }