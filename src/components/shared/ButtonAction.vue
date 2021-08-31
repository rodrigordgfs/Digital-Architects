<template>
  <button
    class="button-action"
    :class="dark ? 'button-action-dark ' : ''"
    @click="click"
  >
    <p>{{ label }}</p>
    <img :src="icon">
  </button>
</template>

<script>
export default {
  name: "ButtonAction",

  props: {
    label: {
      type: String,
      required: true,
    },
    click: {
      type: Function,
      required: true,
    },
    dark: {
      type: Boolean,
      default: false,
    }
  },

  computed: {
    icon() {
      return this.dark ? 'img/icons/right-white.svg' : 'img/icons/right.svg';
    }
  }
};
</script>

<style lang="scss">
.button-action {
  display: flex;
  flex-direction: row;
  width: 220px;
  justify-content: center;
  align-items: center;
  border: none;
  gap: 5px;
  padding: 20px 0;
  background: #ffffff;
  cursor: pointer;
  transition: 0.5s cubic-bezier(0.06, 0.29, 0.19, 1.4);
  &:hover {
    background: #f5f5f5;
  }
  p {
    font-size: 0.75rem;
    color: #333333;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 3px;
  }
}

.button-action-dark  {
  background: #333333;
  &:hover {
    background: #2c2c2c;
  }
  p {
    color: #ffffff;
  }
}
</style>
