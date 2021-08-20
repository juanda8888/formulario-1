<template>
  <h1
    class="my-5"
  >
    Registro de usuario
  </h1>
  <div class="alert alert-warning" v-if="error.tipo !== null">
      {{error.mensaje}}
  </div>
  <form
    @submit.prevent="procesarFormulario"
  >
    <input
      type="email"
      placeholder="email"
      class="form-control my-2"
      v-model.trim="email"
    >
    <input
      type="password"
      placeholder="password"
      class="form-control my-2"
      v-model.trim="pass1"
    >
    <input
      type="password"
      placeholder="password"
      class="form-control my-2"
      v-model.trim="pass2"
    >
    <button
      type="submit"
      class="btn btn-primary"
      :disabled="bloquear"
    >
      Registrar
    </button>
  </form>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  data() {
    return {
      email: '',
      pass1: '',
      pass2: ''
    }
  },
  computed: {
    bloquear() {
      if(!this.email.includes('@')) {
        return true
      }
      if(this.pass1.length > 5 && this.pass1 === this.pass2) {
        return false
      }
      return true
    },
    ...mapState(['error'])
  },
  methods: {
    ...mapActions(['registrarUsuario']),
    procesarFormulario() {
      this.registrarUsuario({email: this.email, password: this.pass1})
      this.email = ''
      this.pass1 = ''
      this.pass2 = ''
    }
  }
}
</script>