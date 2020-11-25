<template>
  <button class="button" @click="handleClick">{{ config.text }}</button>
</template>

<script>
export default {
  props: {
    config: {
      type: Object,
      required: true
    }
  },
  methods: {
    handleClick() {
      this.$emit('handle-click', this.config.action)
    }
  }
}
</script>

<style lang="scss">
  .button {
    padding: 0.5rem;
  }
</style>