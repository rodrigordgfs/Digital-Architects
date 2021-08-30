<template>
  <span
    class="button-indicator"
    :class="disabled ? 'button-indicator__disabled' : null"
    @click="click"
  >
    <img :src="icon">
  </span>
</template>

<script>
export default {
  name: "ButtonIndicator",

  props: {
    side: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    click: {
      type: Function,
      required: true,
    },
  },

  computed: {
    icon() {
      return this.side === "left"
        ? "img/icons/left.svg"
        : "img/icons/right.svg";
    },
  },
};
</script>

<style lang="scss">
.button-indicator {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 53px;
  height: 53px;
  border: 2px solid #f2f2f2;
  cursor: pointer;
}

.button-indicator__disabled {
  background: #f9f9f9;
  cursor: not-allowed;
}
</style>
