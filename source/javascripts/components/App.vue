<template lang="jade">
#app
  app-bar(msg = "This is passed from the parent")
  app-content
</template>

<script>
import AppBar from "./AppBar.vue";
import AppContent from "./AppContent.vue";

export default {
  components: {
    AppBar,
    AppContent
  }
}
</script>
