<template>
  <div class="loading-container">
    <div class="loader"></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.loading-container {
  position: absolute;
  z-index: 9999;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  background-color: rgba(0,0,0, 0.5);

  .loader {
    margin: auto;
    border: 16px solid #f3f3f3;
    border-top: 16px solid #3bb40b;
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg)}
    100% { transform: rotate(360deg)}
  }
}
</style>
