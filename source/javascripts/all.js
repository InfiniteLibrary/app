import 'babel-polyfill';

const Vue = require('vue');
let App = require('./components/App.vue');


new Vue({
  el: 'main',
  components: {
    App
  }
});
