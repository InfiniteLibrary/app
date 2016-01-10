<template>
<div id="app">
  <header/>
  <app-content/>
  <footer/>
</div>
</template>

<script>
import Header from "./Header.vue";
import AppContent from "./AppContent.vue";
import Footer from "./Footer.vue";

export default {
  components: {
    Header,
    AppContent, 
    Footer
  }
}
</script>
