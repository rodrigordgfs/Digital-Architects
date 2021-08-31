<template>
  <input
    class="input-text"
    :type="type"
    :maxlength="maxLength"
    :placeholder="placeholder"
  >
</template>

<script>
export default {
  name: "InputText",

  props: {
    type: {
      type: String,
      default: "text",
    },
    maxLength: {
      type: Number,
      default: 30,
    },
    placeholder: {
      type: String,
      required: true,
    },
    value: {
        type: String,
        default: null
    }
  },

  data() {
      return {
          valor: ''
      }
  },

  watch: {
      valor: function(val) {
          this.$emit('input', val)
      },

      value: function(val) {
          this.valor = val
      }
  }
};
</script>

<style lang="scss">
.input-text {
    border: none;
    font-family: "Roboto", sans-serif;
    background: #f3f3f3;
    max-width: 100%;
    padding: 15px 20px;
}
</style>
