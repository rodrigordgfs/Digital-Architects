<template>
  <div class="divider-wrapper">
    <div class="divider" />
  </div>
</template>

<script>
export default {
    name: 'Divider',
}
</script>

<style lang="scss">
.divider-wrapper {
    max-width: 1100px;
    margin: 0 auto;
    padding: 50px 0;
    .divider {
        width: 3px;
        height: 30px;
        background: #333333;
        margin: 0 auto;
    }
}
</style>