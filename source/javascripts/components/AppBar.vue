<style lang="scss" scoped>
// Component styles
.header {
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
