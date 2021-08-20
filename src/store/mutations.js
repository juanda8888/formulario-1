import router from '../router'
export default {
  setError(state, payload) {
    console.log(payload)
    // REINICIAR
    if (payload === null) {
      return state.error = {tipo: null, mensaje: ''}
    }
    // LOGIN
    if (payload === "EMAIL_NOT_FOUND") {
      return state.error = {
        tipo: 'email',
        mensaje: 'Email no registrado'
      }
    }
    // LOGIN
    if (payload === "INVALID_PASSWORD") {
      return state.error = {
        tipo: 'password',
        mensaje: 'Contraseña no válida'
      }
    }
    // LOGIN
    if (payload === "EMAIL_EXISTS") {
      return state.error = {
        tipo: 'email',
        mensaje: 'Email ya registrado'
      }
    }
    // REGISTRO
    if (payload === "INVALID_EMAIL") {
      return state.error = {
        tipo: 'email',
        mensaje: 'Formato email no válido'
      }
    }
  },
  setUser(state, payload) {
    state.user = payload
  },
  cargar(state, payload) {
    state.tareas = payload
  },
  set(state, payload) {
    state.tareas.push(payload);
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