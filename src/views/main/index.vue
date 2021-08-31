<template>
  <main class="main">
    <projects />
    <divider type="section" />
    <main-focus />
    <divider type="section" />
    <contact />
    <divider type="section" />
  </main>
</template>

<script>

import Divider from '@/components/shared/Divider'
import Projects from "@/components/main/projects";
import MainFocus from "@/components/main/mainFocus";
import Contact from "@/components/main/contact"

export default {
  name: "Main",

  components: {
    Projects,
    MainFocus,
    Divider,
    Contact,
  },
};
</script>

<style lang="scss">
</style>
