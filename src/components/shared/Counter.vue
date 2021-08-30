<template>
  <div class="counter">
    <p class="counter__current">{{ current }}</p>
    <div class="counter__divider"></div>
    <p class="counter__total">{{ total }}</p>
  </div>
</template>

<script>
export default {
  name: "Counter",

  props: {
    current: {
      type: String,
      required: true
    },
    total: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss">
.counter {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: "Roboto", sans-serif;
    font-size: 1.5rem;
    font-weight: 400;
    color: #bdbdbd;
    .counter__current {
        width: 15px;
        word-wrap: break-word;
        white-space: pre-wrap;
    }
    .counter__divider {
        width: 2px;
        height: 30px;
        background: #bdbdbd;
        transform: skewX(-30deg);
        margin: 0 35px;
    }
}
</style>
