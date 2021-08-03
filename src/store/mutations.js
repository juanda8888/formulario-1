import router from '../router'
export default {
  set(state, payload) {
    state.tareas.push(payload);
    console.log(state.tareas)
  },
  eliminar(state, payload) {
    state.tareas = state.tareas.filter(item => item.id !== payload);
  },
  tarea(state, payload) {
    if(!state.tareas.find(tarea => tarea.id === payload)){
      router.push('/')
      return
    }
    state.tarea = state.tareas.find(tarea => tarea.id === payload)
  },
  update(state, payload) {
    state.tareas = state.tareas.map(item => item.id === payload.id ? payload : item)
    router.push('/')
  }
}