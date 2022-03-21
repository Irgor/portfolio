
<template>
  <div class="flex flex-row w-full mt-32 justify-center space-x-96">
    <div class="text-white justify-center">
      <div class="text leading-8 mt-20 space-y-4 text-left">
        <div class="text-4xl">Oi, eu sou o</div>
        <div class="text-5xl">Igor Nascimento</div>
        <div class="text-1xl">
          Sou programador com experiência Full Stack lorem ipsum dolor sit amet
          lorem ipsum dolor sit amet lorem ipsum dolor sit amet
        </div>
      </div>
    </div>

    <div class="justify-center">
      <img class="profile transition-all" src="@/assets/images/igao.jpg" />
    </div>
  </div>
</template>

<style>
.text {
  width: 32rem;
}

.profile {
  clip-path: circle(50%);
  max-width: 80%;
}
</style>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'Presentation',
})
</script>