<template>
  <button class="button" @click="handleClick">Click Me</button>
</template>

<script>
export default {
  props: {
    config: {
      type: Object
    }
  },
  methods: {
    handleClick() {
      this.$emit('handle-click')
    }
  }
}
</script>

<style lang="scss">
  .button {
    padding: 0.5rem;
  }
</style>