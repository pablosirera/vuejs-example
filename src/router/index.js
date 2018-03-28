import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '@/views/Home'
import UsersView from '@/views/Users'
import UserView from '@/views/User'
import FormsView from '@/views/Forms'
import TestsView from '@/views/Tests'
import ToDoView from '@/views/ToDo'

import { store } from '@/store'
import storeDataUsers from '@/modules/datausers/_store'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: 'users',
          name: 'users',
          component: UsersView,
          beforeEnter: (to, from, next) => {
            // register module
            if (store._modulesNamespaceMap['$_datausers/'] === undefined) {
              store.registerModule('$_datausers', storeDataUsers)
            }

            // get users
            if (!store.getters['$_datausers/users'].length) {
              store.dispatch('$_datausers/getUsers')
            }

            next()
          }
        },
        {
          path: 'users/:user',
          name: 'user',
          component: UserView,
          props: true
        },
        {
          path: '/forms',
          name: 'forms',
          component: FormsView
        },
        {
          path: '/tests',
          name: 'tests',
          component: TestsView
        },
        {
          path: '/todo',
          name: 'todo',
          component: ToDoView
        }
      ]
    }
  ]
})
