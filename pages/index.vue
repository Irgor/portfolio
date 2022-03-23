
<template>
  <div>
    <MobileMenu v-show="showMobileMenu" @changeMenu="changeMenu()"/>
    <NavMenu id="home" @changeMenu="changeMenu()"/>
    <PresentationBanner />
    <InfosSection />
    <AboutMe id="sobre"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  data() {
    return {
      showMobileMenu: false
    }
  },
  methods: {
    changeMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    }
  }
})
</script>
