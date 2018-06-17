import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'
import City from '@/pages/city/City'
import Tab from '@/pages/tablist/tablist'
import Me from '@/pages/tablist/me'
import Ta from '@/pages/tablist/compents/cm'
import Ca from '@/pages/tablist/compents/mm'
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
    	path:'/tab',
    	name:'Tab',
    	component:Tab
    },{
        path:'/me',
        component:Me,
        children:[
          {
            path:'t',
            component:Ta
          },{
            path:'h',
            component:Ca
          }
        ]
    }
  ]
})
