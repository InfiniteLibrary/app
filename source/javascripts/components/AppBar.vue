<style lang="scss" scoped>
// Variables
$top-bar-bg-color: #40A5C7;
$top-bar-text-color: #FFF;
$top-bar-height: 2.5rem;
// Component styles
.topnav {

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
</style>

<template>
<div class="header">
  <img class="logo"/>
  <h1>App Title</h1>
  <h2>App description</h2>
  <ul class="topnav">
    <li>target</li>
    <li>target</li>
    <li>target</li>
  </ul>
</div>
</template>

<script>
export default {
  props: ['msg']
}
</script>
