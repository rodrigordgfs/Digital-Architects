<template>
  <h2 class="head-title">
    {{ label }}
  </h2>
</template>

<script>
export default {
    name: 'HeadTitle',

    props: {
        label: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss">
.head-title {
    font-family: "Roboto", sans-serif;
    font-size: 4rem;
    color: #bdbdbd;
    font-weight: 300;
}
</style>