<template>
  <section>
    <h2 class="title">Formulario</h2>
    <form @submit.prevent="enviar()">
      <input type="text"
        class="form-control"
        v-model="mensaje">
        <button type="submit" class="btn">Agregar</button>
    </form>
    <h3>Listado</h3>
    <ul v-if="lista.length > 0">
      <li v-for="item in listaParesComputed">
        {{ item }}
      </li>
    </ul>
    <p v-else>
      No tienes registros
    </p>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  created () {
    this.lista = [1, 2, 3, 4, 5, 6, 7, 8];
  },
  mounted () {
    let root = 'https://jsonplaceholder.typicode.com';
    axios.get(`${root}/posts/1`)
    .then(respuesta => {
      console.log(respuesta.data);
    });
  },
  data () {
    return {
      mensaje: 'Hola mundo',
      lista: []
    }
  },
  methods: {
    enviar () {
      this.lista.push(this.mensaje);
      console.log(this.lista);
    },
    listaPares () {
      return this.lista.filter(valor => valor % 2 == 0);
    }
  },
  computed: {
    listaParesComputed () {
      return this.lista.filter(valor => valor % 2 == 0);
    }
  }
}
</script>
