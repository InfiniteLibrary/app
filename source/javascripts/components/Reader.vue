<style lang="scss" scoped>

$secondary-color: #333;

.il-reader {
  .nav {
    text-align: center;
    color: $secondary-color;
  }

  .container {
    margin: 0 auto;

    @media screen and (max-width: $break-small) {
      width: auto;
    }
    @media screen and (min-width: $break-large) {
      width: 600px;
    }
  }
}
</style>

<template>
  <div class="il-reader">
    <div class="nav">
      <a v-on:click="prev">prev</a> | <a v-on:click="next">next</a>
    </div>

    <div class="container">
      <view :content="content"/>
    </div>

    <div class="nav">
      <a v-on:click="prev">prev</a> | <a v-on:click="next">next</a>
    </div>
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
      var bookid = this.$route.params.bookID;

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
