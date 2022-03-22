
<template>
  <div class="flex flex-col md:flex-row bg-gray-200 h-max mx-8 md:mx-40 rounded-md">
    <div class="flex flex-1 flex-col justify-center p-8 md:p-24 text-3xl md:text-4xl text-center md:text-left">

      <div>Olá!</div>
      <div>Eu sou o <span class="text-purple-600">Igor Nascimento.</span></div>
      <div class="text-2xl md:text-2xl text-gray-400 mt-1">Full Stack Engineer</div>

      <div class="flex flex-col md:flex-row mt-14 text-lg space-y-6 md:space-y-0 md:space-x-12 ">
        <div class="cursor-pointer bg-white py-2 px-10 shadow-button">Contact</div>
        <div class="cursor-pointer bg-purple-600 text-white py-2 px-10 shadow-button">Projects</div>
      </div>

    </div>
    <div class="flex flex-1 mr-24 justify-center items-center align-center w-full px-8 my-2 mb-8 md:my-32 md:mb-36">
      <img class="animate-bounce image" src="@/assets/images/planet.png" />
    </div>
  </div>
</template>

<style>
.shadow-button {
 box-shadow: -4px 5px 4px #00000040; 
}

@keyframes wooble {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.06);
  }

  100% {
    transform: scale(1);
  }
}

.image {
  animation: wooble 6s ease 0s infinite normal forwards;
}
</style>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'Presentation',
})
</script>