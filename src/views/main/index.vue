<template>
  <main class="main">
    <projects />
    <divider />
    <main-focus />
    <divider />
    <contact />
    <divider />
  </main>
</template>

<script>

import Divider from '@/components/shared/Divider'
import Projects from "./components/projects";
import MainFocus from "./components/mainFocus";
import Contact from "./components/contact"

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

<style></style>
