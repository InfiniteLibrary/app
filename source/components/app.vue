<template lang="jade">
  div
    h1 Hello from vue js!
    component-a
</template>

<script>
import ComponentA from "./ComponentA.vue"

export default {
  components: { ComponentA }
}
</script>
