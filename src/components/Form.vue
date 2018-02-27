<template>
  <section>
    <h2 class="title">Agregar empresa</h2>
    <form @submit.prevent="enviar">
      Nombre: <input type="text" v-model="nombre">
      <br>
      Dirección: <input type="text" v-model="direccion">
      <br>
      <button type="submit" class="btn btn-primary">Guardar</button>
    </form>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  created () {
    this.url = 'http://localhost:4000/api-rest/';
  },
  methods: {
    enviar () {
      axios.post(`${this.url}empresas`, {
        nombre: this.nombre,
        direccion: this.direccion
      })
      .then(respuesta => {
        console.log('Guardado', respuesta);
      })
    }
  }
}
</script>