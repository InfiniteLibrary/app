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
<header-search></header-search>
</template>

<script>
import HeaderBanner from "./HeaderBanner.vue";
import HeaderNav from "./HeaderNav.vue";
import HeaderSearch from "./HeaderSearch.vue";

export default {
  components: {
    HeaderBanner,
    HeaderNav,
    HeaderSearch
  }
}
</script>
