<template lang="jade">
#app
  app-bar(msg = "This is passed from the parent")
  search
  router-view
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
