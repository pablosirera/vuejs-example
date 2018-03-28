<template>
  <el-row>
    <el-col v-if="form">
      <p v-if="form.name.text">
        <strong>Nombre:</strong> <span>{{ form.name.text }}</span>
        <span v-if="form.name.invalid">eeeerror</span>
      </p>
      <p v-if="form.lastName.text">
        <strong>Apellido:</strong> <span>{{ form.lastName.text }}</span>
      </p>
    </el-col>
  </el-row>
</template>
<script>
export default {
  props: [
    'form'
  ]
}
</script>
