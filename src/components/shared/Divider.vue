<template>
  <div class="divider-wrapper">
    <div :style="divider" />
  </div>
</template>

<script>
export default {
  name: "Divider",

  props: {
    type: {
      type: String,
      validator: (value) => ["section", "horizontal"].includes(value),
      required: true,
    },
  },

  data() {
    return {
      isHorizontal: this.type === "horizontal",
      isSection: this.type === "section",
      horizontal: {
        width: "100%",
        height: "1px",
        background: "#f2f2f2",
        margin: "30px 0",
      },
      section: {
        width: "3px",
        height: "30px",
        background: "#333333",
        margin: "50px auto",
      },
    };
  },
  computed: {
    divider() {
      return this.isHorizontal ? this.horizontal : this.section;
    },
  },
};
</script>

<style lang="scss">
.divider-wrapper {
  max-width: 1100px;
  margin: 0 auto;
}
</style>
