import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home, },
  { path: '/home', component: () => Home, },
  { path: '/login', component: () => import('@/views/Login.vue') },
  {
    path: '/doctor', component: () => import('@/views/Doctor.vue'), redirect: '/doctor/patient',
    children: [
      {
        path: '/doctor/patient', component: () => import('@/components/patient/index'), redirect: '/doctor/patient/mypatient',
        children: [
          { path: '/doctor/patient/mypatient', component: () => import('@/components/patient/mypatient') }]
      },
      {
        path: '/doctor/electronic', component: () => import('@/components/electronic/index'), redirect: '/doctor/electronic/case', children: [
          { path: '/doctor/electronic/case', component: () => import('@/components/electronic/case') },
          { path: '/doctor/electronic/addcase', component: () => import('@/components/electronic/addcase') },
        ]
      },
      {
        path: '/doctor/inhospital', component: () => import('@/components/inhospital/index'), redirect: '/doctor/inhospital/inhospital', children: [
          { path: '/doctor/inhospital/inhospital', component: () => import('@/components/inhospital/inhospital') },
          { path: '/doctor/inhospital/addpatient', component: () => import('@/components/inhospital/addpatient') },
        ]
      },
      {
        path: '/doctor/report', component: () => import('@/components/report/index'), redirect: '/doctor/report/report',
        children: [
          { path: '/doctor/report/report', component: () => import('@/components/report/report') },
          { path: '/doctor/report/addreport', component: () => import('@/components/report/addreport') },
        ]
      },
      {
        path: '/doctor/outhospital', component: () => import('@/components/outhospital/index'), redirect: '/doctor/outhospital/outhospital', children: [
          { path: '/doctor/outhospital/outhospital', component: () => import('@/components/outhospital/outhospital') }
        ]
      },
      {
        path: '/doctor/recipe', component: () => import('@/components/recipe/index'), redirect: '/doctor/recipe/recipe',
        children: [
          { path: '/doctor/recipe/recipe', component: () => import('@/components/recipe/recipe') }
        ]
      },
      {
        path: '/doctor/consult', component: () => import('@/components/consult/index'), redirect: '/doctor/consult/consult',
        children: [
          { path: '/doctor/consult/consult', component: () => import('@/components/consult/consult') }
        ]
      },
      {
        path: '/doctor/self', component: () => import('@/components/self/index'), redirect: '/doctor/self/self',
        children: [
          { path: '/doctor/self/self', component: () => import('@/components/self/self') }
        ]
      },
    ]
  }
]

const router = new VueRouter({ routes })

export default router
