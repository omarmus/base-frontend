<template>
  <section>
    <h2 class="title">Lista</h2>
    <table>
      <tr>
        <th>ID</th>
        <th>Nombre</th>
        <th>Email</th>
        <th>Web</th>
        <th>Direccion</th>
      </tr>
      <tr v-for="item in lista">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.email }}</td>
        <td>{{ item.website }}</td>
        <td>{{ item.address.city }} - {{ item.address.street }}</td>
      </tr>
    </table>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  mounted () {
    let url = 'https://jsonplaceholder.typicode.com/users';
    axios.get(url)
    .then(respuesta => {
      console.log(respuesta.data);
      this.lista = respuesta.data;
    })
  },
  created () {
    
  },
  data () {
    return {
      lista: []
    }
  }
}
</script>

