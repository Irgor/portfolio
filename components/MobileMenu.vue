<template>
  <div
    class="bg-white absolute h-screen w-screen z-20 enter"
    v-bind:class="{ out: closing }"
  >
    <div class="absolute top-10 right-8" @click="changeMenu()">
      <img class="w-4" src="@/assets/images/close.png" alt="" />
    </div>

    <div
      class="
        flex flex-col
        space-y-8
        text-3xl
        w-full
        h-full
        items-center
        justify-center
      "
    >
      <div @click="changeMenu()">Home</div>
      <NuxtLink to="#sobre">
        <div @click="changeMenu()">Sobre</div>
      </NuxtLink>
      <div @click="changeMenu()">Skills</div>
      <div @click="changeMenu()">Contato</div>
    </div>
  </div>
</template>

<style scoped>
.enter {
  left: 0;
  animation: enter 0.4s;
  animation-iteration-count: 1;
}

.out {
  left: -100vw;
  animation: out 0.4s;
  animation-iteration-count: 1;
}

@keyframes enter {
  from {
    left: -100vw;
  }

  to {
    left: 0;
  }
}

@keyframes out {
  from {
    left: 0;
  }

  to {
    left: -100vw;
  }
}
</style>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'MobileMenu',
  data() {
    return {
      closing: false,
    }
  },
  methods: {
    changeMenu() {
      this.closing = true
      setTimeout(() => {
        this.closing = false
        this.$emit('changeMenu')
      }, 400)
    },
  },
})
</script>
