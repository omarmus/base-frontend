<template>
  <section>
    <h3>Número: {{ numero }}</h3>
    Ingrese número: <input type="text" 
                           class="form-control" 
                           v-model="numero">
    <button class="btn btn-primary" @click="agregar">Agregar</button>

    <ul v-if="lista.length > 0">
      <li v-for="item in lista">{{ item }}</li>
    </ul>
    <h4 v-else>Lista vacia!</h4>

    <button @click="sumar()" class="btn btn-primary" type="button">Sumar</button>
    <h3>Total: {{ total }}</h3>

  </section>
</template>

<script>
export default {
  data () {
    return {
      numero: 0,
      lista: [],
      total: 0
    }
  },
  methods: {
    sumar () {
      let suma = 0;
      for (let i in this.lista) {
        suma += parseInt(this.lista[i]);
      }
      this.total = suma;
    },
    agregar () {
      let numero = this.numero;
      this.lista.push(numero);
    }
  }
};
</script>
