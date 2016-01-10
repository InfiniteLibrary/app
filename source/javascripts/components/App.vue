<template>
<div id="app">
  <router-view></router-view>
  <app-footer></app-footer>
</div>
</template>

<script>
import AppHeader from "./AppHeader.vue";
import AppFooter from "./AppFooter.vue";
import Home from "./Home.vue";

export default {
  components: {
    AppHeader,
    Home,
    AppFooter
  }
}
</script>
