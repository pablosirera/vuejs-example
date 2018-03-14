import Vue from 'vue'
import Router from 'vue-router'
import UsersView from '@/views/Users'
import UserView from '@/views/User'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/users',
      name: 'users',
      component: UsersView
    },
    {
      path: '/users/:id',
      name: 'user',
      component: UserView
    }
  ]
})
