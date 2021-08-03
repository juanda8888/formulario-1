import { createStore } from 'vuex'
import mutationsApp from './mutations'

export default createStore({
  state: {
    tareas: [],
    tarea: {
      nombre: '',
      categorias: [],
      estado: '',
      numero: 0
    }
  },
  mutations: {
    ...mutationsApp
  },
  actions: {
    setTareas({ commit }, tarea) {
      commit('set', tarea)
    },
    deleteTareas({ commit }, id) {
      commit('eliminar', id);
    },
    setTarea({ commit }, id) {
      commit('tarea', id)
    },
    updateTarea({ commit }, tarea) {
      commit('update', tarea)
    }
  },
  modules: {
  }
})
