import Vue from 'vue'
import Vuex from 'vuex'
import { dataUsersModule } from './modules/datausers'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    dataUsers: dataUsersModule
  }
})
