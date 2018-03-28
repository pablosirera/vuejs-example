<template>
  <el-row type="flex" justify="center">
    <el-col :span="12">
    <CountErrors :errors="errors"/>
      <el-form ref="form" :rules="rules" :model="form">
        <el-form-item label="Nombre" prop="name">
          <el-input name="name" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="Apellidos" prop="lastName">
          <el-input name="lastName" v-model="form.lastName"></el-input>
        </el-form-item>
        <el-button type="primary" @click="submitForm('form')">Comprobar</el-button>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
import CountErrors from './CountErrors'

export default {
  components: { CountErrors },
  data () {
    return {
      form: {
        name: '',
        lastName: ''
      },
      errors: {
        name: true,
        lastName: true
      },
      rules: {
        name: [
          { required: true, message: 'Please input name', trigger: 'blur' },
          { min: 3, message: 'Length should be 3', trigger: 'blur' }
        ],
        lastName: [
          { required: true, message: 'Please input last name' }
        ]
      }
    }
  },
  updated () {
    this.validateFields()
    this.$emit('onChangeData', { form: this.formFormatted })
  },
  methods: {
    validateFields () {
      for (const key in this.form) {
        this.setValidate(key)
      }
    },
    setValidate (name) {
      this.$refs['form'].validateField(name, errorMsg => {
        if (errorMsg) {
          this.errors[name] = true
        } else {
          this.errors[name] = false
        }
      })
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  },
  computed: {
    formFormatted () {
      return {
        name: {
          text: this.form.name,
          invalid: this.errors['name']
        },
        lastName: {
          text: this.form.lastName,
          invalid: this.errors['lastName']
        }
      }
    }
  }
}
</script>
