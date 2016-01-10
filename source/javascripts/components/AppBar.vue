<style lang="scss" scoped>
// Component styles
.header {
  .logo {
    display: inline;
  }

  h1 {
    display: inline;
  }
}
</style>

<template>
<div class="header">
  <img class="logo"/>
  <h1>App Title</h1>
  <h2>App description</h2>
</div>
</template>

<script>
export default {
  props: ['msg']
}
</script>
