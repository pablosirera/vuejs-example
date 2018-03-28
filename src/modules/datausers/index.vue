<template>
  <div>
    <h1>Users</h1>
    <list-users :users="users"></list-users>
  </div>
</template>

<script>
import ListUsers from './_components/ListUsers'
import { mapGetters } from 'vuex'

export default {
  name: 'DataUsersModule',
  components: {
    ListUsers
  },
  computed: {
    ...mapGetters({
      users: '$_datausers/users'
    })
  }
}
</script>
