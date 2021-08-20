import router from '../router'
export default {
  cerrarSesion({ commit }) {
    commit('setUser', null)
    router.push('/login')
    localStorage.removeItem('usuario')
  },
  async loginUsuario({ commit }, usuario) {
    try {
      const res = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=
      AIzaSyB6VgaUWUAlSd5kjTp3gyOHVICBPV8lvkA`, {
        method: 'POST',
        body: JSON.stringify({
          email: usuario.email,
          password: usuario.password,
          returnSecureToken: true
        })
      })
      const userDB = await res.json()
      console.log('user login', userDB)
      if(userDB.error) {
        console.log('error', userDB.error.message)
        return commit('setError', userDB.error.message)
      }
      commit('setUser', userDB)
      commit('setError', null)
      router.push('/')
      localStorage.setItem('usuario', JSON.stringify(userDB))
    } catch (error) {
      console.log(error.errors)
    }
  },
  async registrarUsuario({ commit }, usuario) {
    try {
      const res = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=
      AIzaSyB6VgaUWUAlSd5kjTp3gyOHVICBPV8lvkA`, {
        method: 'POST',
        body: JSON.stringify({
          email: usuario.email,
          password: usuario.password,
          returnSecureToken: true
        })
      })
      const userDB = await res.json()
      console.log('user register', userDB)
      if(userDB.error) {
        console.log(userDB.error.errors)
        return commit('setError', dataDB.error.message)
      }
      commit('setUser', userDB)
      commit('setError', null)
      router.push('/login')
    } catch (error) {
      console.log(error.errors)
    }
  },
  async cargarLocalStorage({ commit, state }) {
    if (localStorage.getItem('usuario')) {
      commit('setUser', JSON.parse(localStorage.getItem('usuario')))
      console.log('dato de local', JSON.parse(localStorage.getItem('usuario')))
    } else {
      return commit('setUser', null)
    }
    try {
      const res = await fetch(`https://vue-project-api-31d89-default-rtdb.europe-west1.firebasedatabase.app/tareas/${state.user.localId}.json?auth=${state.user.idToken}`)

      const dataDB = await res.json()
      const arrayTareas = []
      for (let id in dataDB) {
        arrayTareas.push(dataDB[id])
      }
      commit('cargar', arrayTareas)

    } catch (error) {
      console.log(error)
    }
  },
  async setTareas({ commit, state }, tarea) {
    try {
      const res = await fetch(`https://vue-project-api-31d89-default-rtdb.europe-west1.firebasedatabase.app/tareas/${state.user.localId}/${tarea.id}.json?auth=${state.user.idToken}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(tarea)
      })

      const dataDB = await res.json()
      console.log(dataDB)

    } catch (error) {
      console.log(error)
    }
    commit('set', tarea)
  },
  async deleteTareas({ commit, state }, id) {
    try {
      const res = await fetch(`https://vue-project-api-31d89-default-rtdb.europe-west1.firebasedatabase.app/tareas/${state.user.localId}/${id}.json?auth=${state.user.idToken}`, {
        method: 'DELETE'
      })
      const resDataDb = await res.json()
      console.log('res after deleted', resDataDb)
      commit('eliminar', id)
    } catch (error) {
      console.log(error)
    }
  },
  setTarea({ commit }, id) {
    commit('tarea', id)
  },
  async updateTarea({ commit, state }, tarea) {
    try {
      const res = await fetch(`https://vue-project-api-31d89-default-rtdb.europe-west1.firebasedatabase.app/tareas/${state.user.localId}/${tarea.id}.json?auth=${state.user.idToken}`, {
        method: 'PATCH',
        body: JSON.stringify(tarea)
      })
      const resDataDb = await res.json()
      console.log('update response', resDataDb)
      commit('update', tarea)
    } catch (error) {
      console.log(error)
    }
  }
}