<template>
<div id="app">
  <app-header/>
  <app-content/>
  <app-footer/>
</div>
</template>

<script>
import AppHeader from "./Header.vue";
import AppContent from "./AppContent.vue";
import AppFooter from "./Footer.vue";

export default {
  components: {
    AppHeader,
    AppContent,
    AppFooter
  }
}
</script>
