import axios from 'axios'

export const dataUsersModule = {
  namespaced: true,
  state: {
    users: []
  },
  getters: {
    users: state => state.users,
    getUserById: state => value => state.users.find(user => user.id.value === value)
  },
  actions: {
    getUsers (state) {
      axios.get('https://randomuser.me/api/?results=20')
        .then(resp => {
          state.commit('setUsers', resp.data.results)
        })
    }
  },
  mutations: {
    setUsers (state, usersToSave) {
      state.users = usersToSave.filter(user => user.id.value !== null)
    }
  }
}
