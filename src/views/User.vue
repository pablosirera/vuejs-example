<template>
  <div v-if="!checkTypeOfUser()" class="container">
    <el-button
      type="danger"
      @click="goBack()"
      round>Volver</el-button>
    <el-row type="flex" justify="center" class="row-user">
      <el-col :span="12">
        <el-card>
          <img :src="user.picture.large" class="image">
          <p>
            <b>Nombre:</b> <span>{{ user.name.first }} {{ user.name.last }}</span>
          </p>
          <p>
            <b>Ciudad:</b> <span>{{ user.location.city }}</span>
          </p>
          <p>
            <b>Teléfono:</b> <span>{{ user.phone }}</span>
          </p>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      default: null
    }
  },
  methods: {
    goBack () {
      this.$router.push('/users')
    },
    checkTypeOfUser () {
      return typeof this.user !== 'object'
    }
  },
  mounted () {
    if (this.checkTypeOfUser()) {
      this.$router.push('/users')
    }
  }
}
</script>

<style scoped lang="scss">
  .row-user {
    margin-top: 20px
  }
</style>
