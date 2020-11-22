<template>
  <div class="script">
    <pre>{{ script }}</pre>
    <h1>{{ script.title }}</h1>
    <p>{{ script.description }}</p>
    <Button @handle-click="handleClick" />
  </div>
</template>

<script>
import Button from '@/components/global/Button'

export default {
  components: {
    Button
  },
  props: {
    script: {
      type: Object,
      required: true
    }
  },
  methods: {
    handleClick() {
      console.log('clicked')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.script {
  padding: 1em;
  overflow: hidden;
  background-color: grey;
}
</style>
