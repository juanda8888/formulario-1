<template>
  <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre</th>
      <th scope="col">Categorias</th>
      <th scope="col">Estado</th>
      <th scope="col">Número</th>
      <th scope="col">Acción</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="tarea in tareas" :key="tarea.id">
      <th scope="row">{{tarea.id}}</th>
      <td>{{tarea.nombre}}</td>
      <td>
        <span>
            {{tarea.categorias.join(', ')}}
        </span>
      </td>
      <td>{{tarea.estado}}</td>
      <td>{{tarea.numero}}</td>
      <td>
          <button class="btn btn-danger btn-sm" @click="deleteTareas(tarea.id)">Eliminar</button>
          <router-link
            class="btn btn-warning ml-2 btn-sm"
            :to="{
              name: 'Editar',
              params: {
                id: tarea.id
              }
            }"
          >
            Editar
          </router-link>
      </td>
    </tr>
  </tbody>
</table>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
    computed: {
        ...mapState(['tareas'])
    },
    methods: {
        ...mapActions(['deleteTareas'])
    }
}
</script>

