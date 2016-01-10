<style lang="scss" scoped>
</style>

<template>
  <div class="il-reader">
    <a v-on:click="prev">prev</a> | <a v-on:click="next">next</a>

    <view :content="content"></div>

  </div>
</template>

<script>
import View from "./View.vue";
import BookWorker from "../bookworker/bookworker.js";

export default {
  props: ['src'],
  components: {
    View
  },

  data: function() {
    return {
      content: '',
      curr: 0
    }
  },

  created: function () {
    this.fetchData()
  },

  // watch: {
  //  curr: 'section'
  // },

  methods: {
    fetchData: function () {
      var bookid = this.$route.params.bookid;

      // var xhr = new XMLHttpRequest()
      //
      // xhr.open('GET', "https://api.github.com/search/repositories?q="+ this.repos + "+user:GITenberg")
      // xhr.onload = function () {
      //   this.process(xhr.responseText, cb);
      // }.bind(this);
      // xhr.send()

      this.book = new BookWorker(this.src, (text) => {
        console.log(this.curr);
        var section = this.book.section(this.curr);

        if (section) {
          this.content = section.contents();
        }
      })


    },
    section: function () {
      if(!this.book) return;
      var section = this.book.section(this.curr);
      if (section) {
        this.content = section.contents();
      }
    },
    next: function() {
      this.curr += 1;
      this.section();
    },
    prev: function() {
      if(this.curr > 0){
        this.curr -= 1;
        this.section();
      }
    }
  }
}
</script>
