<template>
  <div class="flex flex-row w-full bg-dark py-6">
    <div class="flex-1">
      <p class="text-purple text-3xl ml-40">Igor Nascimento</p>
    </div>

    <div
      class="text-white flex flex-1 space-x-20 items-center justify-end mr-40 "
    >
      <p class="transition-all hover:text-purple cursor-pointer">Home</p>
      <p class="transition-all hover:text-purple cursor-pointer">About me</p>
      <p class="transition-all hover:text-purple cursor-pointer">Project</p>
      <p class="transition-all hover:text-purple cursor-pointer">Contact</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Nav',
})
</script>