<style lang="scss" scoped>
</style>

<template>
  <ol>
    <li v-for="item in items">
      <a v-on:click="goto" data-index={{item.index}} > {{item.title}}</a>
    </li>
  </ol>
</template>

<script>
export default {
  props: {
    'items': {
      type: Array
    }
  },
  created: function () {

  },
  methods: {
    goto: function (e) {
      console.log(e)
    }
  }
}
</script>
