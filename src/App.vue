<template>
  <div id="app">
    <header-app />
    <router-view />
    <footer-app />
  </div>
</template>

<script>
import HeaderApp from "@/components/shared/Header"; 
import FooterApp from "@/components/shared/Footer"

export default {
  name: "App",

  components: {
    HeaderApp,
    FooterApp,
  },
};
</script>

<style lang="scss"></style>
