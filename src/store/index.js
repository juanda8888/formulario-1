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
    cargarLocalStorage({ commit }) {
      if(localStorage.getItem('tareas')) {
        const tareas = JSON.parse(localStorage.getItem('tareas'))
        commit('cargar', tareas)
        return
      }

      localStorage.setItem('tareas', JSON.stringify([]))
    },
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
