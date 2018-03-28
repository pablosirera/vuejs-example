<template>
  <div>
    <Form v-on:onChangeData="onChangeData" />
    <RequestForm :form="form" />
  </div>
</template>

<script>
// import store from './_store'
import Form from './_components/Form'
import RequestForm from './_components/RequestForm'

export default {
  name: 'FormsModule',
  data () {
    return {
      form: null
    }
  },
  components: {
    Form,
    RequestForm
  },
  methods: {
    onChangeData (ev) {
      this.form = ev.form
    }
  }
  // created () {
  //   this.$store.registerModule('$_forms', store)
  // }
}
</script>
