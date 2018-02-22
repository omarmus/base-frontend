<template>
  <section>
    <h2 class="title">Formulario</h2>
    <h3>{{ respuesta }}</h3>
    <form @submit.prevent="agregar">
      Ingresar número: <input type="text" v-model="numero">
      <button class="btn btn-primary" type="submit">Agregar</button>
    </form>

    <ul v-if="lista.length > 0">
      <li v-for="item in lista">{{ item }}</li>
    </ul>
    <div v-else>no tengo elementos</div>

    <button class="btn btn-primary" @click="sumar()" type="button">Sumar</button>
  </section>
</template>

<script>
export default {
  data () {
    return {
      numero: 0,
      respuesta: 0,
      lista: []
    }
  },
  methods: {
    sumar () {
      let suma = 0;
      for (let i in this.lista) {
        suma += this.lista[i];
      }
      this.respuesta = suma;
    },
    agregar () {
      let numero = parseInt(this.numero);
      this.lista.push(numero);
    }
  }
};
</script>
