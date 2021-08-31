<template>
  <main class="main">
    <projects />
    <scroll-down-icon />
    <main-focus />
    <divider type="section" />
    <contact />
  </main>
</template>

<script>

import Divider from '@/components/shared/Divider'
import ScrollDownIcon from '@/components/shared/ScrollDownIcon'
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
    ScrollDownIcon,
  },
};
</script>

<style lang="scss">
</style>
