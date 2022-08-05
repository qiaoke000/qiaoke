import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Goods from '@/components/page/Goods'
import Feek from '@/components/page/Feek'
import Atitle from '@/components/page/Atitle'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect:'/home/feek',
      children:[
        {
          path:'goods',
          name:'Goods',
          component:Goods
        },
        {
          path:'feek',
          name:'Feek',
          component:Feek
        },
        {
          path:'atitle',
          name:'Atitle',
          component:Atitle
        }
      ]
    }
  ]
})

