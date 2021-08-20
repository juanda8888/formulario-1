<template>
  <div class="navbar navbar-dark bg-dark">
    <router-link to="/" class="navbar-brand">
      Formulario
    </router-link>
    <div class="d-flex">
      <router-link
        v-if="usuarioAutenticado"
        class="btn btn-dark mr-2"
        to="/"
      >
        Tareas
      </router-link>
      <router-link
        v-if="!usuarioAutenticado"
        class="btn btn-primary mr-2"
        to="/login"
      >
        Ingresar
      </router-link>
      <router-link
        v-if="!usuarioAutenticado"
        class="btn btn-primary mr-2"
        to="/registro"
      >
        registrar
      </router-link>
      <button
        v-if="usuarioAutenticado"
        class="btn btn-danger"
        @click="cerrarSesion"
      >
        Cerrar sesión
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['usuarioAutenticado'])
  },
  methods: {
    ...mapActions(['cerrarSesion'])
  }
}
</script>

