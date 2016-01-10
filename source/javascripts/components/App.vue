<template lang="jade">
#app
  app-bar(msg = "This is passed from the parent")
  search
  app-content
</template>

<script>
import AppBar from "./AppBar.vue";
import AppContent from "./AppContent.vue";
import Search from "./Search.vue";

export default {
  components: {
    AppBar,
    Search,
    AppContent
  }
}
</script>
