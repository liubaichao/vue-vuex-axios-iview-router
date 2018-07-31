import Vue from 'vue'
import Router from 'vue-router'
import Li1 from '@/components/Li-1'
import Li2 from '@/components/Li-2'
import ZhongKui from '@/components/ZhongKui'
import Kai from '@/components/Kai'

Vue.use(Router)

export default new Router({
  mode: 'history', // 可以是去掉#号
  routes: [{
    path: '/li-1', name: 'Li-1', component: Li1
  }, {
    path: '/li-2', name: 'Li-2', component: Li2
  },{
    path: '/kai', name: 'Kai', component: Kai
  }, {
    path: '/', name: 'ZhongKui', component: ZhongKui
  }]
})
