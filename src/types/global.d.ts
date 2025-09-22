// src/types/global.d.ts

declare global {
  interface Window {
    dataLayer: any[];
  }
}

// Adicionar `export {}` garante que o arquivo seja tratado como um módulo.
export {};