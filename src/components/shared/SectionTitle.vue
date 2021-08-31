<template>
  <div class="section__title__wrapper">
    <p
      class="section__title__first"
      :style="{ textTransform: firstUppercase ? 'uppercase' : 'capitalize' }"
    >
      {{ first }}
    </p>
    <p class="section__title__second">
      {{ second }}
    </p>
  </div>
</template>

<script>
export default {
  name: "SectionTitle",

  props: {
    first: {
      type: String,
      required: true,
    },
    firstUppercase: {
      type: Boolean,
      default: false,
    },
    second: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.section__title__wrapper {
  .section__title__first {
    font-family: "Roboto", sans-serif;
    font-size: 4rem;
    font-weight: 300;
    color: #bdbdbd;
  }
  .section__title__second {
    font-family: "Roboto", sans-serif;
    font-size: 4rem;
    font-weight: 700;
    color: #333333;
  }
}
</style>
