<template>
  <div class="errors" v-if="errorsLength">
    Errores: <el-badge class="mark" :value="errorsLength" />
  </div>
</template>

<script>
export default {
  props: ['errors'],
  computed: {
    errorsLength () {
      let countErrors = 0
      for (const key in this.errors) {
        if (this.errors[key]) {
          countErrors++
        }
      }

      return countErrors
    }
  }
}
</script>
