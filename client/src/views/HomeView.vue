<script setup lang="ts">
import TheFooter from '@/components/TheFooter.vue';
import TheNavbar from '@/components/TheNavbar.vue';
import TheServices from '@/components/TheServices.vue';
import TheTransactions from '@/components/TheTransactions.vue';
import TheWelcome from '@/components/TheWelcome.vue';

</script>

<template>
  <div class="min-h-screen">
    <div class="gradient-bg-welcome">
      <TheNavbar />
      <TheWelcome />
    </div>
    <TheServices />
    <TheTransactions />
    <TheFooter />
  </div>
</template>
