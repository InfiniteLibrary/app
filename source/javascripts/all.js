import 'babel-polyfill';

const Vue = require('vue');
const Router = require('vue-router');
const App = require('./components/App.vue');
const Home = require('./components/Home.vue');
const Reader = require('./components/Reader.vue');

Vue.use(require('vue-resource'));

Vue.use(Router);

var router = new Router();

router.map({
  '/': {
    component: Home
  },
  '/reader/:bookid': {
    name: 'reader', // give the route a name
    component: Reader
  }
});

router.start(App, "main");
