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
    <div class="flex flex-col text-white">
      <div class="text-4xl">Um pouco mais sobre mim...</div>

      <div class="text-description">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis ea
        consequuntur natus quam, error veniam rem suscipit
      </div>
    </div>

    <div class="">
      <img src="@/assets/images/planet2.png" alt="" />
    </div>
  </div>
</template>

<style scoped>
.text-description {
  font-family: 'Poppins Regular', 'Courier New', Courier, monospace;
}
</style>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'AboutMe',
})
</script>
