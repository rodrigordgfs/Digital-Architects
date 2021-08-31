<template>
  <main class="certifications">
    <section-title
      class="certifications__title"
      first="Company"
      second="Certifications"
    />
    <divider
      class="certifications__divider"
      type="horizontal"
    />
  </main>
</template>

<script>
import SectionTitle from "@/components/shared/SectionTitle";
import Divider from "@/components/shared/Divider";
import ScrollReveal from "scrollreveal";

export default {
  name: "Certifications",

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

      sr.reveal(".certifications__title", { delay: 200 });
    },
  },
};
</script>

<style lang="scss">
.certifications {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 10px;
  .certifications__title {
    margin: 60px 0;
  }
}

.certifications__divider {
  margin-bottom: 60px;
}
</style>
