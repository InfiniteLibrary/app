<template>
<div id="app">
  <!-- <app-header><app-header/> -->
  <router-view></router-view>
  <app-footer><app-footer/>
</div>
</template>

<script>
import AppHeader from "./Header.vue";
import AppFooter from "./Footer.vue";

export default {
  components: {
    AppHeader,
    AppFooter
  }
}
</script>
