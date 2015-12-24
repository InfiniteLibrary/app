<style lang="scss" scoped>
// Variables
$top-bar-bg-color: #40A5C7;
$top-bar-text-color: #FFF;
$top-bar-height: 2.5rem;
// Component styles
.app-bar {
  background-color: $top-bar-bg-color;
  color: $top-bar-text-color;
  height: $top-bar-height;
  line-height: $top-bar-height;
  text-align: center;
}
</style>

<template lang="jade">
.app-bar
  span {{ msg }}
</template>

<script>
export default {
  props: ['msg']
}
</script>
