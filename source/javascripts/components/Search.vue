<template lang="jade">
#search
  input(v-model="query")
  button(@click="fetchData") Search GITenberg!
  ul
    li(v-for="result in results")
      h3 {{ result.id }} | {{ result.name }}
      p {{ result.description }}
</template>

<script>
export default {
  data() {
    return {
      query: '',
      results: []
    }
  },
  // filters: {
  //   authorName: function(text) {
  //     var regex = /(?=by)(.+)(is a Project Gutenberg book, now on Github.)/;
  //     return text.split(regex)[1];
  //   }
  // },
  methods: {
    fetchData: function() {
      var url = "https://api.github.com/search/repositories?q="
                + this.query + "+user:GITenberg";
      var xhr = new XMLHttpRequest();
      var self = this;
      xhr.open('GET', url);
      xhr.onload = function() {
        self.$set('results', JSON.parse(xhr.responseText).items);
        console.log(JSON.parse(xhr.responseText));
      }
      xhr.send();
    },

    // getResults:function() {
    //   var url = "https://api.github.com/search/repositories?q="
    //             + this.query + "+user:GITenberg";
    //
    //    this.$http.get(url).then(function (response) {
    //      // get status
    //      response.status;
    //     //  // get all headers
    //      response.headers();
    //     //  // get 'expires' header
    //      response.headers('expires');
    //      // set data on vm
    //      console.log(response);
    //      this.$set('results', response.data);
    //    }, function (response) {
    //        // handle error
    //    });
    // }
  }
}
</script>
