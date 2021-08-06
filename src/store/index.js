import { createStore } from 'vuex'
import mutationsApp from './mutations'
import actions from './actions'

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
    ...actions
  },
  modules: {
  }
})
