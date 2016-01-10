import 'babel-polyfill';

const Vue = require('vue');
const Router = require('vue-router');
const App = require('./components/App.vue');
const AppHeader = require('./components/AppHeader.vue');
const AppFooter = require('./components/AppFooter.vue');
const Reader = require('./components/Reader.vue');
const Home = require('./components/Home.vue');

Vue.use(require('vue-resource'));
Vue.use(Router);

var router = new Router();

router.map({
  '/': {
    component: Home
  },
  '/reader/:bookID': {
    name: 'reader', // give the route a name
    component: Reader
  },
  // Redirect unmatched routes to Home
  '*': {
    component: Home
  }
});

router.start(App, "main");
