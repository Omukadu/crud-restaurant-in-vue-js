import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router'
import HomeComp from './components/HomeComp.vue'
import SignUp from './components/SignUp.vue'
import LogIn from './components/LogIn.vue'
import AddRes from './components/AddRes.vue'
import UpdateRes from './components/UpdateRes.vue'
Vue.config.productionTip = false
Vue.use(vueRouter);
const routes = [
  { name: 'home', path: '/', component: HomeComp },
  { name: 'signup', path: '/signup', component: SignUp },
  { name: 'login', path: '/login', component: LogIn },
  { name: 'addres', path: '/addres', component: AddRes },
  { name: 'updateres', path: '/updateres/:id', component: UpdateRes },
]

const router = new vueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
