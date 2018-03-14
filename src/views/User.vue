<template>
  <div>
    <el-button
      type="danger"
      @click="goBack()"
      round>Volver</el-button>
    <el-row justify="center">
      <el-col :span="12">
        <el-card :body-style="{ padding: '0px' }">
          <img :src="user.picture.large" class="image">
          <div style="padding: 14px;">
            <!-- <span>{{ getName(user.name) }}</span> -->
            <div class="bottom clearfix">
              <time class="time">{{ user.phone }}</time>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <pre>{{user}}</pre>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  methods: {
    goBack () {
      this.$router.push('/users')
    }
  },
  mounted () {
    if (!this.user) {
      this.$router.push('/users')
    }
  },
  computed: {
    ...mapGetters({
      getUserById: 'dataUsers/getUserById'
    }),
    user () {
      return this.getUserById(this.$route.params.id)
    }
  }
}
</script>
