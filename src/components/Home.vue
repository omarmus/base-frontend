<template>
  <section>
    <h2 class="title">Ejemplos</h2>
    <h3>Número: {{ numero }}</h3>
    <div class="form-group">
      <label>Ingrese número</label>
      <input type="text" class="form-control" v-model="numero">
    </div>
    <button type="button" @click="agregar()" class="btn btn-primary">Agregar</button>
    <ul v-if="lista.length > 0">
      <li v-for="item in lista">{{ item }}</li>
    </ul>
    <p v-else>
      La lista no tiene elementos
    </p>
    <h3><button class="btn btn-primary" @click="sumar">Sumar números</button> Suma total: {{ suma }}</h3>
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
