<template>
  <div
    class="
      bg-gray-900
      w-full
      flex flex-col
      md:flex-row
      space-y-4
      md:space-y-0 md:space-x-12
    "
  >
    <div
      class="
        flex flex-col
        text-white text-center
        md:text-left md:w-4/5
        mx-8
        mt-8
        md:mt-44 md:mx-0 md:ml-40
      "
    >
      <div class="text-4xl">Um pouco mais sobre mim...</div>

      <div class="text-description text-lg mt-8 px-2 md:px-0">
        Oi, meu nome é Igor.<br />
        Sou um desenvolvedor web Full Stack. <br />
        Cursando tecnólogo em Analise e Desenvolvimento de sistemas.<br />
        Caso queria interagir me procure no Twiiter.<br />
        <div class="md:mt-2">
          <a
            href="https://twitter.com/_irgor"
            target="_blank"
            class="text-purple-600 cursor-pointer text-2xl font-normal"
          >
            @_irgor
          </a>
        </div>
      </div>
    </div>

    <div class="flex justify-center items-center pb-4 md:pb-0 overflow-hidden">
      <img
        src="@/assets/images/planet2.png"
        alt="Imagem Planeta"
        class="w-8/12 md:w-5/12 m-4 md:m-0 md:my-12 animate-spin planet"
      />
    </div>
  </div>
</template>

<style scoped>
.text-description {
  font-family: 'Poppins Regular', 'Courier New', Courier, monospace;
}

.font-normal {
  font-family: Poppins, Courier, monospace;
}

.planet {
  animation-duration: 32s;
}
</style>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'AboutMe',
})
</script>
