<template>
  <main class="projects">
    <section-title
      class="projects__title"
      first="Our"
      second="Projects"
    />
    <divider
      class="projects__divider"
      type="horizontal"
    />
  </main>
</template>

<script>
import SectionTitle from "@/components/shared/SectionTitle";
import Divider from "@/components/shared/Divider";
import ScrollReveal from "scrollreveal";

export default {
  name: "Projects",

  components: {
    SectionTitle,
    Divider,
  },

  mounted() {
    this.scrollReveal();
  },

  methods: {
    scrollReveal() {
      let sr = ScrollReveal({
        origin: "top",
        distance: "50px",
        duration: 2000,
        reset: true,
      });

      sr.reveal(".projects__title", { delay: 200 });
    },
  },
};
</script>

<style lang="scss">
.projects {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 10px;
  .projects__title {
    margin: 60px 0;
  }
}

.projects__divider {
  margin-bottom: 60px;
}
</style>
