export default {
  async cargarLocalStorage({ commit }) {
    try {
      const res = await fetch('https://vue-project-api-31d89-default-rtdb.europe-west1.firebasedatabase.app/tareas.json')

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
  async setTareas({ commit }, tarea) {
    try {
      const res = await fetch(`https://vue-project-api-31d89-default-rtdb.europe-west1.firebasedatabase.app/tareas/${tarea.id}.json`, {
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
  async deleteTareas({ commit }, id) {
    try {
      const res = await fetch(`https://vue-project-api-31d89-default-rtdb.europe-west1.firebasedatabase.app/tareas/${id}.json`, {
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
  async updateTarea({ commit }, tarea) {
    try {
      const res = await fetch(`https://vue-project-api-31d89-default-rtdb.europe-west1.firebasedatabase.app/tareas/${tarea.id}.json`, {
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