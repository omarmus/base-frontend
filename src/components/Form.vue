<template>
  <section>
    <div class="grid cols-2">
      <section>
        <h2 class="title">Formulario</h2>
        <form @submit.prevent="enviar()">
          <div class="form-group">
            <label>Mensaje</label>
            <input type="text"
              class="form-control"
              v-model="mensaje">
          </div>
          <button type="submit" class="btn">Agregar</button>
        </form>
      </section>
      <section>
        <h2 class="title">Listado</h2>
        <ul v-if="lista.length > 0">
          <li v-for="item in listaParesComputed">
            {{ item }}
          </li>
        </ul>
        <p v-else>
          No tienes registros
        </p>
      </section>
    </div>

    <h2 class="title">Post obtenido con axios</h2>
    <div v-if="post">
      <p><strong>Título: </strong>{{ post.title }}</p>
      <p><strong>Contenido: </strong>{{ post.body }}</p>
    </div>
    <p v-else>Cargando post</p>

    <h2 class="title">Lista de usuarios con axios</h2>
    <table class="table">
      <thead>
        <tr>
          <th>Nombre completo</th>
          <th>Nombre de usuario</th>
          <th>Correo electrónico</th>
          <th>Dirección</th>
          <th>Compañia</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in usuarios">
          <td>{{ item.name }}</td>
          <td>{{ item.username }}</td>
          <td>{{ item.email }}</td>
          <td>
            {{ item.address.street }}
            {{ item.address.suite }} -
            {{ item.address.city }}
          </td>
          <td>
            {{ item.company.name }} <br>
            <small>{{ item.company.catchPhrase }}</small>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  created () {
    this.lista = [1, 2, 3, 4, 5, 6, 7, 8];
  },
  mounted () {
    this.root = 'https://jsonplaceholder.typicode.com';

    // Obteniendo post
    axios.get(`${this.root}/posts/1`)
    .then(respuesta => {
      console.log('Respuesta post:', respuesta.data);
      this.post = respuesta.data;
    });

    // Llamando a la lista de usuarios
    this.listaUsuarios();
  },
  data () {
    return {
      mensaje: 'Hola mundo',
      lista: [],
      post: null,
      usuarios: null
    }
  },
  methods: {
    enviar () {
      this.lista.push(this.mensaje);
      console.log(this.lista);
    },
    listaPares () {
      return this.lista.filter(valor => valor % 2 == 0);
    },
    listaUsuarios () {
      axios.get(`${this.root}/users`)
      .then(respuesta => {
        console.log('Respuesta usuarios:', respuesta.data);
        this.usuarios = respuesta.data;
      });
    }
  },
  computed: {
    listaParesComputed () {
      return this.lista.filter(valor => valor % 2 == 0);
    }
  }
}
</script>
