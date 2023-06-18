<script setup lang="ts">
import logo from '@/assets/images/logo.png'
import { ref } from 'vue'
import TheMenu from './TheMenu.vue'

const navItemsTitle = ['Market', 'Exchange', 'Tutorials', 'Wallets']

const navOpen = ref(false)
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
    </ul>
    <div class="max-md:flex hidden relative menu-hamburger p-6">
      <TheMenu :class="{ 'nav-open': navOpen }" @click="navOpen = true" />
      <Transition name="slide-fade">
        <ul
          class="z-10 fixed -top-0 -right-2 p-6 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          v-if="navOpen"
        >
          <li class="relative mx-2 px-2 cursor-point py-4">
            <TheMenu :class="{ 'nav-open': navOpen }" @click="navOpen = false" />
          </li>
          <li v-for="itemTitle in navItemsTitle" :key="itemTitle" class="mx-2 px-2 text-xl cursor-pointer py-4">
            {{ itemTitle }}
          </li>
        </ul>
      </Transition>
    </div>
  </nav>
</template>

<style scoped>
.menu-hamburger {
  .menu-toggle {
    position: absolute;
    right: 1.5rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 26px;
    width: 29px;

    &,
    &:hover {
      color: #000;
    }
  }

  .menu-toggle-bar {
    display: block;
    position: absolute;
    top: 50%;
    margin-top: -1px;
    right: 0;
    width: 100%;
    height: 4px;
    border-radius: 4px;
    background-color: white;
    transition: all 0.3s ease;

    &.menu-toggle-bar--top {
      transform: translate(0, -8px);
    }
    &.menu-toggle-bar--bottom {
      transform: translate(0, 8px);
    }

    .nav-open & {
      &.menu-toggle-bar--top {
        transform: translate(0, 0) rotate(45deg);
      }
      &.menu-toggle-bar--middle {
        opacity: 0;
      }
      &.menu-toggle-bar--bottom {
        transform: translate(0, 0) rotate(-45deg);
      }
    }
  }
}
</style>
