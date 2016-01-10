import 'babel-polyfill';

const Vue = require('vue');
const App = require('./components/App.vue');
Vue.use(require('vue-resource'));

new Vue({
  el: 'main',
  components: {
    App
  }
});
