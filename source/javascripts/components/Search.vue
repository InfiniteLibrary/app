<template lang="jade">
#search
  input(v-model="query")
  p {{ query }}
</template>

<script>
export default {
  data: {
    query: ''
  },
  methods: {

  }
}
</script>
