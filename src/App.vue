<template>
  <div id="app">
    <header-app />
    <router-view />
  </div>
</template>

<script>
import HeaderApp from "@/components/shared/Header";

export default {
  name: "App",

  components: {
    HeaderApp,
  },
};
</script>

<style lang="scss"></style>
