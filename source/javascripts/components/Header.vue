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
  <h1>This is the header</h1>
  <h2>App description</h2>
</div>
</template>

<script>
import Banner from "./Banner.vue";
import Search from "./Search.vue";
import Nav from "./Nav.vue";

export default {
  components: {
    Banner,
    Search,
    Nav
  }
}
</script>
