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
<banner/>
<search/>
<app-nav/>
</template>

<script>
import Banner from "./Banner.vue";
import Search from "./Search.vue";
import AppNav from "./AppNav.vue";

export default {
  components: {
    Banner,
    Search,
    AppNav
  }
}
</script>
