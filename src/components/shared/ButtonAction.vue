<template>
  <button
    class="button-action"
    @click="click"
  >
    <p>{{ label }}</p>
    <img src="img/icons/right.svg">
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
  },
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
</style>
