<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Raleway:300,500,600');

$base-font-family: 'Raleway', sans-serif;
$base-font-size: 18px;

$break-small: 320px;
$break-large: 1200px;

$secondary-color: #333;

.il-reader {
  .nav {
    text-align: center;
    color: $secondary-color;
    font-size: smaller;
    margin-top: 3em;

    ul {
      list-style: none;
      padding: 1em 0 0 0;
      list-style-type: none;
      border-top: 4px solid #ff3333;
      width: 300px;
      margin: 0 auto;

      @media screen and (max-width: $break-small) {
        width: auto;
      }

      li {
        display: inline;
      }

      .prev {
        float: left;
      }

      .next {
        float: right;
      }
    }
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

  .clear {
    clear: both;
  }
}
</style>

<template>
  <div class="il-reader">

    <div class="container">
      <section data-type="chapter" data-pdf-bookmark="Chapter 3. ETYMOLOGY." id="idm215364907872">
<h1>ETYMOLOGY.</h1>


<p>(Supplied by a Late Consumptive Usher to a Grammar School)</p>

<p>The pale Usher—threadbare in coat, heart, body, and brain; I see him
now. He was ever dusting his old lexicons and grammars, with a queer
handkerchief, mockingly embellished with all the gay flags of all the
known nations of the world. He loved to dust his old grammars; it
somehow mildly reminded him of his mortality.</p>

<p>"While you take in hand to school others, and to teach them by what name
a whale-fish is to be called in our tongue leaving out, through
ignorance, the letter H, which almost alone maketh the signification of
the word, you deliver that which is not true." —HACKLUYT</p>

<p>"WHALE…. Sw. and Dan. HVAL. This animal is named from roundness or
rolling; for in Dan. HVALT is arched or vaulted." —WEBSTER’S DICTIONARY</p>

<p>"WHALE…. It is more immediately from the Dut. and Ger. WALLEN; A.S.
WALW-IAN, to roll, to wallow." —RICHARDSON’S DICTIONARY</p>
<blockquote>
<pre>     KETOS,               GREEK.
     CETUS,               LATIN.
     WHOEL,               ANGLO-SAXON.
     HVALT,               DANISH.
     WAL,                 DUTCH.
     HWAL,                SWEDISH.
     WHALE,               ICELANDIC.
     WHALE,               ENGLISH.
     BALEINE,             FRENCH.
     BALLENA,             SPANISH.
     PEKEE-NUEE-NUEE,     FEGEE.
     PEHEE-NUEE-NUEE,     ERROMANGOAN.</pre></blockquote>
</section>
      <view :content="content"/>
    </div>

    <div class="nav">
      <ul>
       <li class="prev"><a v-on:click="prev"><img src="/images/icon-hand-back.png"/></a></li>
       <li class="next"><a v-on:click="next"><img src="/images/icon-hand-next.png"/></a></li>
      </ul>
    </div>
    <div class="clear"></div>
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
