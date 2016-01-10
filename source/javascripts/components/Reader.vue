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
    this.fetchRepo()
  },

  // watch: {
  //  curr: 'section'
  // },

  methods: {
    fetchRepo: function (bookID, cb) {
      var user = this.$route.params.user;
      var repo = this.$route.params.repo;
      var xhr = new XMLHttpRequest();
      this.fetchBook("https://raw.githubusercontent.com/"+ user + "/" + repo + "/master/book.xhtml");
      // xhr.open('GET', "https://api.github.com/repos/"+ user + "/" + repo +  "/contents/book.xhtml")
      // xhr.onload = function () {
      //   var result = JSON.parse(xhr.responseText);
      //   if(result.download_url) {
      //     this.fetchBook(result.download_url, cb);
      //   }
      // }.bind(this);
      // xhr.send()
    },
    fetchBook: function (url) {
      var xhr = new XMLHttpRequest()

      this.book = new BookWorker(url, (text) => {

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
