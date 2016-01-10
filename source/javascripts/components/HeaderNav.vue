<style lang="scss" scoped>
// Component styles
.nav {
  .navbar {

    border-bottom: 1px solid #333;

    ul {
      margin: 0;
      padding: 0;
      list-style-type: none;
      list-style-position: inside;
    }

    li {
      display: inline;
    }

  }
}
</style>

<template>
<div class="nav">
  <ul class="navbar">
    <li><a v-link="'home'">target</a></li>
    <li><a v-link="'home'">target</a></li>
    <li><a v-link="'home'">target</a></li>
  </ul>
</div>
</template>

<script>
export default {
  props: ['msg']
}
</script>
