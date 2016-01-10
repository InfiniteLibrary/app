<style lang="scss" scoped>
// Variables
$header-height: 10em;
$body-text-size: 1.25em;
// Styles
.content-header {
  height: $header-height;
  text-align: center;
}
.content-header h1 {
  margin: 0;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
.content-body {
  font-family: "Freight";
  font-size: $body-text-size;
  line-height: 1.45;
  margin: 0 1em;

  @media(min-width: 48rem) {
    margin: 0 auto;
    max-width: 38rem;
  }
}
.content-body p:first-child {
  margin-top: 0;
}
</style>

<template>
  hello
</template>

<script>
import Reader from "./Reader.vue";

export default {
  components: {
    Reader
  }
}
</script>
