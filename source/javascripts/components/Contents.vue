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
    },
    'index': {
      type: Number
    }
  },
  created: function () {

  },
  methods: {
    goto: function (e) {
      var a = e.target;
      var index = a.getAttribute("data-index");
      this.index = parseInt(index);
    }
  }
}
</script>
