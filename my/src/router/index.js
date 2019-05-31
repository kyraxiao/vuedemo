import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'
import City from '@/pages/city/City'
import Find from '@/pages/find/find'
import Shop from '@/pages/shop/shop'
import User from '@/pages/user/user'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
    	path:'/city',
    	name:'City',
    	component:City
    },
    {
    	path:'/find',
    	name:'Find',
    	component:Find
    },
    {
      path:'/shop',
      name:'Shop',
      component:Shop
    },
    {
      path:'/user',
      name:'User',
      component:User
    }
  ]
})
