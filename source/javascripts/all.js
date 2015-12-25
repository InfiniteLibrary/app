import 'babel-polyfill';

const Vue = require('vue');
const App = require('./components/App.vue');


new Vue({
  el: 'main',
  components: {
    App
  }
});
