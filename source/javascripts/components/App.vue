<template lang="jade">
#app
  app-bar(msg = "This is passed from the parent")
  search
  router-view
</template>

<script>
import AppBar from "./Header.vue";
import AppContent from "./AppContent.vue";
import Search from "./Search.vue";
import Reader from "./Reader.vue";

export default {
  components: {
    Header,
    Search,
    AppContent
  }
}
</script>
