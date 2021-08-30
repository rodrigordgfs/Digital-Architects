<template>
  <main class="main">
    <projects />
    <divider />
    <main-focus />
    <divider />
  </main>
</template>

<script>

import Divider from '@/components/shared/Divider'
import Projects from "./components/projects";
import MainFocus from "./components/mainFocus";

export default {
  name: "Main",

  components: {
    Projects,
    MainFocus,
    Divider,
  },
};
</script>

<style></style>
