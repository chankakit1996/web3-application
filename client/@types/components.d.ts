// components.d.ts
declare module '@vue/runtime-core' {
  // Vue 3
  // declare module 'vue' {   // Vue 2.7
  // declare module '@vue/runtime-dom' {  // Vue <= 2.6.14
  export interface GlobalComponents {
    VIcon: typeof import('oh-vue-icons')['OhVueIcon']
  }
}

export {}
