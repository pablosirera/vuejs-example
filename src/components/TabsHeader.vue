<template>
  <el-tabs v-model="activeTab" class="tabs-panels" @tab-click="handleClick">
    <el-tab-pane
      v-for="(route, index) in routes"
      :key="index"
      :label="route.name"
      :name="route.name">
        <router-view/>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  data () {
    return {
      activeTab: 'users',
      routes: [
        {
          name: 'users'
        },
        {
          name: 'forms'
        },
        {
          name: 'tests'
        },
        {
          name: 'todo'
        }
      ]
    }
  },
  methods: {
    handleClick (tab, event) {
      const nameRoute = tab.$options.propsData.name
      this.$router.push({ name: nameRoute })
    }
  }
}
</script>

<style scoped lang="scss">
.tabs-panels {
  /deep/ .el-tabs__nav-scroll {
    display: flex;
    justify-content: center;
  }
}
</style>
