<template>
  <section>
    <h2 class="title">Formulario</h2>
    <h3>Número: {{ numero }}</h3>
    Ingrese número: <input type="text" v-model="numero">
    <button type="button" @click="agregar()" class="btn btn-primary">Agregar</button>
    <ul v-if="lista.length > 0">
      <li v-for="item in lista">{{ item }}</li>
    </ul>
    <div v-else>
      La lista no tiene elementos
    </div>
    <button class="btn btn-primary" @click="sumar">Sumar números</button>
    <h3>Suma total: {{ suma }}</h3>
  </section>
</template>

<script>

export default {
  data () {
    return {
      mensaje: 'Hola mundo',
      numero: 0,
      lista: [],
      suma: 0
    }
  },
  methods: {
    agregar () {
      let numero = this.numero;
      this.lista.push(numero)
    },
    sumar () {
      let suma = 0;
      for (let i in this.lista) {
        suma += parseInt(this.lista[i]);
      }
      this.suma = suma;
    }
  }
};
</script>
