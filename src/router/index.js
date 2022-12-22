import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import NotFound from '@/components/NotFound'
import OrderList from '@/components/order/OrderList'
import ServiceGroupList from '@/components/service/ServiceGroupList'
import WorkList from '@/components/order/WorkList'
import ServiceList from '@/components/service/ServiceList'
import StaffList from '@/components/staff/StaffList'
import DataOverView from '@/components/dataAnalysis/DataOverView'
import MapData from '@/components/dataAnalysis/MapData'

Vue.use(Router)

export default new Router({
  routes: [
    {

      path: '/',
      redirect: 'login',
      hidden: true
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      hidden: true
    },
    {
      path: '/home',
      name: 'Order manager',
      component: Home,
      iconClass: 'fa fa-list-alt',
      children: [
        {
          path: '/home',
          name: 'Order List',
          component: OrderList,
          iconClass: 'fa fa-users'
        }
      ]
    }, {
      path: '/service',
      name: 'Service manager',
      component: Home,
      iconClass: 'fa fa-list-alt',
      children: [
        {
          path: '/service/list',
          name: 'Service list',
          component: ServiceList,
          iconClass: 'fa fa-users'
        }, {
          path: '/service/groupList',
          name: 'Service group list',
          component: ServiceGroupList,
          iconClass: 'fa fa-users'
        }
      ]
    },
    {
      path: '/staff',
      name: 'Staff manager',
      component: Home,
      iconClass: 'fa fa-list-alt',
      children: [
        {
          path: '/staff/list',
          name: 'Staff list',
          component: StaffList,
          iconClass: 'fa fa-users'
        }
      ]
    },
    {
      path: '/data',
      name: '数据分析',
      component: Home,
      iconClass: 'fa fa-bar-chart',
      children: [
        {
          path: '/data/dataview',
          name: '数据概览',
          component: DataOverView,
          iconClass: 'fa fa-line-chart'
        }
        // {
        //   path: '/home/mapdata',
        //   name: '地图概览',
        //   component: MapData,
        //   iconClass:'fa fa-map-o',
        // },
      ]
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound,
      hidden: true
    }
  ],
  mode: 'history'
})
