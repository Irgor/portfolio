
<template>
  <div class="flex flex-row w-full mt-16 justify-center space-x-80">
    <div class="text-white justify-center mt-32">
      <div class="text leading-8 mr-12 space-y-4 text-left">
        <div class="text-4xl">Oi, eu sou o</div>
        <div class="text-5xl">Igor Nascimento</div>
        <div class="text-1xl">
          Sou programador com experiência Full Stack, busco um ambiente
          desafiador onde possa evoluir profissionalmente enquanto contribuo com
          a empresa
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
}
</style>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'Presentation',
})
</script>