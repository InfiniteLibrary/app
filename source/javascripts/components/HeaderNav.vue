<style lang="scss" scoped>
// Component styles
.nav {
  border-left: 17px solid #EC2028; 
  .navbar {
    ul {
      margin: 0;
      padding: 0;
      list-style-type: none;
      list-style-position: inside;
    }
    li {
      display: inline;
      &:active { 
        border-bottom: 5px solid #EC2028; 
      } 
    }

  }
}
</style>

<template>
<div class="nav">
  <ul class="navbar">
    <li><a v-link="home"><img src="/images/icon-home.png"/></a></li>
    <li><a v-link="my"><img src="/images/icon-my.png"/></a></li>
    <li><a v-link="settings"><img src="/images/icon-settings.png"/></a></li>
  </ul>
</div>
</template>

<script>
export default {
  props: ['msg']
}
</script>
