<style lang="scss" scoped>
#search { 
	#searchControls { 
		position: absolute; 
		top: 140px;
		right: 20px;
	       input { 
		       border-radius: 20px; 
		       padding-left: 10px;
		       border: 2px solid #999;
	       } 
	       button { 
		       font-size: 12px;
		       margin: 2px auto;
	       } 
	}
} 
</style>

<template lang="jade">
#search
  #searchControls
    input
    button(@click="fetchData") Search GITenberg!
  ul
    li(v-for="result in results")
      a(v-link="{ name: 'bookinfo', params: { bookID: result.name }}")
         img(src="https://raw.githubusercontent.com/InfiniteLibraryLibrary/{{ result.name }}/master/cover.jpg")
         h3 {{ result.name }}
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
      var url = "https://api.github.com/orgs/InfiniteLibraryLibrary/repos"
      var xhr = new XMLHttpRequest();
      var self = this;
      xhr.open('GET', url);
      xhr.onload = function() {
        self.$set('results', JSON.parse(xhr.responseText));
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
