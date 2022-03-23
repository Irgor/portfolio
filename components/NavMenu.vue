<template>
  <div class="flex flex-row w-screen h-24">
    <div class="flex flex-3 md:flex-1 flex-row items-center">
      <p class="ml-8 text-2xl text-purple-600 md:ml-40 cursor-pointer">
        {{ name }}
      </p>
    </div>
    <div
      class="
        hidden
        flex-1
        justify-end
        mr-40
        items-center
        space-x-20
        text-1xl
        md:flex
      "
    >
      <p class="cursor-pointer transition-all hover:text-purple-600">Home</p>
      <p class="cursor-pointer transition-all hover:text-purple-600">
        Projects
      </p>
      <p class="cursor-pointer transition-all hover:text-purple-600">About</p>
      <p class="cursor-pointer transition-all hover:text-purple-600">Contact</p>
    </div>

    <div class="flex flex-1 items-center justify-end md:hidden mr-8">
      <img src="@/assets/images/menu.png" alt="" @click="changeMenu()"/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'NavMenu',
  data() {
    return {
      name: '<IgorNascimento/>',
    }
  },
  methods: {
    changeMenu() {
      this.$emit('changeMenu')
    },
  },
})
</script>