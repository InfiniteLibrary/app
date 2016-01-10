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
<header-banner></header-banner>
<header-nav></header-nav>
</template>

<script>
import HeaderBanner from "./HeaderBanner.vue";
import HeaderNav from "./HeaderNav.vue";

export default {
  components: {
    HeaderBanner,
    HeaderNav
  }
}
</script>
