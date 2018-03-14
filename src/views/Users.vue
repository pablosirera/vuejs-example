<template>
  <div>
    <h1>Users</h1>
    <list-users :users="users"></list-users>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ListUsers from '@/components/ListUsers'

export default {
  components: {ListUsers},
  methods: {
    ...mapActions({
      getUsers: 'dataUsers/getUsers'
    })
  },
  computed: {
    ...mapGetters({
      users: 'dataUsers/users'
    })
  },
  created () {
    if (!this.users.length) this.getUsers()
  }
}
</script>
