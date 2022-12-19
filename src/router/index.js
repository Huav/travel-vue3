import { createRouter, createWebHistory } from 'vue-router'
import Login from "@/views/Login/Login.vue"
import Register from "@/views/Register/Register.vue"
import Home from "@/views/Home/Home.vue"
import FlightTicket from "@/views/FlightTicket/FlightTicket.vue"
import Orders from "@/views/Orders/Orders.vue"
import AddedServices from "@/views/AddedServices/AddedServices.vue"
import pay from "@/views/pay/pay.vue"
import Myorder from "@/views/Myorder/Myorder.vue"
import admin from '@/views/adminview/admin-left.vue'
import admin_main from '@/views/adminview/admin-main.vue'
import discounts from '@/views/adminview/discounts.vue'
import airplane from '@/views/adminview/airplane.vue'
import seat from '../views/seat/index.vue'
import checkin from '@/views/CheckIn/CheckIn.vue'
import ChinService from '@/views/CheckIn/ChinService.vue'
import pay1 from '@/views/CheckIn/Pay.vue'
import changes from '@/views/changes/index.vue'
import order from '@/views/changes/order.vue'
import price from '@/views/changes/price.vue'
import FlightTicketMax from '@/views/changes/FlightTicketMax.vue'
import store from '@/Store'
import holiday_discounts from '@/views/adminview/holiday_discounts.vue'
import allorders from '@/components/Myorders/AllOrders.vue'
import { ElMessage } from 'element-plus'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    //重定向
    {
      path: '/',
      redirect: '/home'
    },
    {
      name: Home,
      path: '/home',
      component: Home,
      meta: { keepAlive: true },
      children: [
        {
          name: FlightTicket,
          meta: { permission: true },
          path: "/home/FlightTicket",
          component: FlightTicket
        }

      ]
    },
    {
      name: Register,
      path: '/register',
      component: Register
    },
    {
      name: Login,
      path: '/login',
      component: Login
    },
    {
      name: Orders,
      path: "/orders",
      component: Orders
    },
    {
      name: Myorder,
      path: "/Myorder",
      meta: { permission: true },
      component: Myorder,
      children: [
        {
          meta: { permission: true },
          name: allorders,
          path: '/Myorder/allorders',
          name: 'AllOrders',
          component: allorders
        }
      ],
    },

    {
      name: changes,
      path: "/changes",
      component: changes,
      children: [
        {
          name: FlightTicket,
          path: '/changes/FlightTicketMax',
          component: FlightTicketMax
        },
      ]
    },
    {
      name: AddedServices,
      path: "/addedServices",
      component: AddedServices
    },
    {
      name: order,
      path: "/changesorder",
      component: order
    },
    {
      name: price,
      path: "/changesprice",
      component: price
    },
    {
      name: pay,
      path: "/pay",
      component: pay
    },
    {
      name: ChinService,
      path: '/ChinService',
      component: ChinService
    },
    {
      name: pay1,
      path: '/pay1',
      component: pay1
    },
    {
      name: checkin,
      path: "/checkin",
      component: checkin,

    },
    {
      name: seat,
      path: "/seat",
      component: seat
    },
    {
      name: admin,
      path: '/admin',
      component: admin,
      // redirect:'/admin_main',
      children: [
        {
          path: '/admin_main',
          component: admin_main,
        },
        {
          path: '/discounts',
          component: discounts,
        },
        {
          path: '/airplane',
          component: airplane,
        }
        ,
        {
          path: '/holiday_discounts',
          component: holiday_discounts,
        }
      ]
    }
  ]
})


// router.beforeEach(async (to, from, next) => {
//   if (to.meta.permission) {
//       if (store.state.token==""&&to.name !== Login) {
//     ElMessage({
//       message: '请先登录',
//       type: 'error',
//     })
//     next("/login")
//   } else {
//   next()
//   }
//   }
//   else {
//     next()
//   }

// })


export default router
