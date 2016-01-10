<template lang="jade">
#app
  app-bar(msg = "This is passed from the parent")
  search
  book-info
  app-content
</template>

<script>
import AppBar from "./AppBar.vue";
import AppContent from "./AppContent.vue";
import Search from "./Search.vue";
import BookInfo from "./BookInfo.vue";

export default {
  components: {
    AppBar,
    Search,
    AppContent,
    BookInfo
  }
}
</script>
