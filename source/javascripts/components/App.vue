<template lang="jade">
#app
  app-bar(msg = "This is passed from the parent")
  reader(src = "http://localhost:4567/htmlbooks/dubliners.xhtml")
</template>

<script>
import AppBar from "./AppBar.vue";
import AppContent from "./AppContent.vue";
import Reader from "./Reader.vue";

export default {
  components: {
    AppBar,
    Reader
  }
}
</script>
