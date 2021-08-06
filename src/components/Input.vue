<template>
  <input 
    type="text"
    class="form-control my-2"
    placeholder="Ingrese nombre"
    v-model.trim="tarea.nombre"
  >
  <div class="form-check form-check-inline">
    <input 
      class="form-check-input" 
      type="checkbox" 
      id="inlineCheckbox1" 
      value="javascript"
      v-model="tarea.categorias"
    >
    <label class="form-check-label" for="inlineCheckbox1">JavaScript</label>
  </div>
  <div class="form-check form-check-inline">
    <input 
      class="form-check-input" 
      type="checkbox" 
      id="inlineCheckbox2" 
      value="nodejs"
      v-model="tarea.categorias"
    >
    <label class="form-check-label" for="inlineCheckbox2">Node.js</label>
  </div>
  <div class="mt-2">
    <div class="form-check form-check-inline">
      <input 
        class="form-check-input" 
        type="radio"
        id="inlineRadio1"
        name="estado"
        value="urgente"
        v-model="tarea.estado">
      <label class="form-check-label" for="inlineRadio1">Urgente</label>
    </div>
    <div class="form-check form-check-inline">
      <input 
        class="form-check-input" 
        type="radio"
        id="inlineRadio2"
        name="estado"
        value="relax"
        v-model="tarea.estado">
      <label class="form-check-label" for="inlineRadio2">Relax</label>
    </div>
  </div>

  <div class="mt-2">
    <input 
      type="number"
      class="form-control"
      v-model.number="tarea.numero"
    >
  </div>

  <button 
    class="btn btn-dark mt-2 btn-block"
    type="submit"
    :disabled="bloquear"
  >Procesar
  </button>
</template>

<script>
export default {
    props: {
        tarea: Object
    },
    computed: {
        bloquear(){
            return this.tarea.nombre.trim() === "" ? true : false;
        }
    }
}
</script>
