import router from '../router'
export default {
  cargar(state, payload) {
    state.tareas = payload
  },
  set(state, payload) {
    state.tareas.push(payload);
    localStorage.setItem('tareas', JSON.stringify(state.tareas))
  },
  eliminar(state, payload) {
    state.tareas = state.tareas.filter(item => item.id !== payload);
    localStorage.setItem('tareas', JSON.stringify(state.tareas))
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
    localStorage.setItem('tareas', JSON.stringify(state.tareas))
    router.push('/')
  }
}