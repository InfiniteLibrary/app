<style lang="scss" scoped>
.contents {
  width: 233px;
  color: #fff;
  font-size: smaller;
  background-color: #676766;
  background-image: url('/images/expanded-bookmark-bottom.png');
  background-position: center bottom;
  background-repeat: no-repeat;
  float: left;

.container {
  width: 100%;
  padding: 2em 0 85px 0;
  text-align: center;

    img {
      width: 85px;
      border: 1px solid white;
    }

    h1 {
      color: #fff;
      font-size: 16px;
    }

    hr {
      width: 100px;
      margin: 1em 0 1em 0;
      margin: 1em auto;
      border: 1px solid #fff;
    }

    nav {
      ol {
        list-style-type: none;
        padding: 0 1em 0 1em;
        font-size: 13px;

        li {
          margin: 0 0 6px 0;
          padding: 0;
          line-height: 16px;

          a {
            cursor: pointer;
          }
        }
      } 
    }
  }
}
</style>

<template>
<div class="contents">
  <div class="container">
    <img />
    <h1>Table of Contents</h1>
    <hr/>
    <nav>
      <ol>
        <li v-for="item in items">
          <a v-on:click="goto" data-index={{item.index}} > {{item.title}}</a>
        </li>
      </ol>
    </nav>
  </div>
</div>
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
