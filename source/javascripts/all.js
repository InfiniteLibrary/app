import 'babel-polyfill';

const Vue = require('vue');
const Router = require('vue-router');
const App = require('./components/App.vue');
const Home = require('./components/Home.vue');
Vue.use(require('vue-resource'));

Vue.use(Router);

var router = new Router();

router.map({
  '/': {
    component: Home
  }
});

router.start(App, "main");
