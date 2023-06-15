<script setup lang="ts">
import logo from '@/assets/images/logo.png'

const navItemsTitle = ['Market', 'Exchange', 'Tutorials', 'Wallets']
</script>

<template>
  <nav class="w-full flex md:justify-center justify-between items-center p-4">
    <div class="md:flex-[0.5] flex-initial justify-center items-center">
      <img :src="logo" alt="logo" class="w-32 cursor-pointer" />
    </div>
    <ul
      class="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial"
    >
      <li v-for="itemTitle in navItemsTitle" :key="itemTitle" class="mx-2 px-2 cursor-pointer">
        {{ itemTitle }}
      </li>
      <li class="bg-blue-500 py-2 px-7 rounded-full cursor-pointer hover:opacity-80">Login</li>
      <div>
        <v-icon name="fc-menu" />
      </div>
    </ul>
  </nav>
</template>
