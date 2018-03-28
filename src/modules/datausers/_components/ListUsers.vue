<template>
  <el-row>
    <transition-group name="list">
      <el-col :span="6" v-for="(user, index) in users" :key="index">
        <el-card :body-style="{ padding: '0px' }">
          <img :src="user.picture.large" class="image">
          <div style="padding: 14px;">
            <span>{{ getName(user.name) }}</span>
            <div class="bottom clearfix">
              <time class="time">{{ user.phone }}</time>
            </div>
            <el-button
              type="primary"
              @click="goToUser(user)"
              plain>Ver Usuario</el-button>
          </div>
        </el-card>
      </el-col>
    </transition-group>
  </el-row>
</template>

<script>
export default {
  props: ['users'],
  methods: {
    getName (name) {
      return `${this.capitalizeFirstLetter(name.first)} ${this.capitalizeFirstLetter(name.last)}`
    },
    capitalizeFirstLetter (value) {
      return `${value.charAt(0).toUpperCase()}${value.slice(1)}`
    },
    goToUser (user) {
      this.$router.push({name: 'user', params: { user }})
    }
  }
}
</script>

<style scoped>
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
