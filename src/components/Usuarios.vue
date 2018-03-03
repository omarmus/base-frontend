<template>
  <section>
    <h2 class="title">Usuarios</h2>
    <div class="btn-container">
      <button @click="agregar" 
      class="btn btn-primary" type="button">Agregar usuario</button>
    </div>
    <form @submit.prevent="guardar" v-if="mostrar">
      <div class="form-group">
        <label for="">Nombre</label>
        <input type="text" v-model="nombre" class="form-control">
      </div>
      <div class="form-group">
        <label for="">Email</label>
        <input type="text" v-model="email" class="form-control">
      </div>
      <div class="form-group">
        <label for="">Empresa</label>
        <select class="form-control" v-model="empresa">
          <option>Seleccione</option>
          <option v-for="item in empresas" :value="item.id">
            {{ item.nombre }}
          </option>
        </select>
      </div>
      <button class="btn" @click="mostrar = false" type="button">Cancelar</button>
      <button class="btn btn-primary" type="submit">Guardar</button>
    </form>

    <table v-if="!mostrar">
      <tr>
        <th>Acciones</th>
        <th>Nombre</th>
        <th>Email</th>
        <th>Empresa</th>
      </tr>
      <tr v-for="item in usuarios">
        <td>
          <button 
            class="btn" 
            type="button" 
            @click="eliminar(item.id)">Eliminar</button>
          <button 
            class="btn" 
            type="button" 
            @click="actualizar(item.id)">Actualizar</button>
        </td>
        <td>{{ item.nombre }}</td>
        <td>{{ item.email }}</td>
        <td>{{ item.id_empresa }}</td>
      </tr>
    </table>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  created () {
    this.url = 'http://localhost:4000/api-rest/';

    this.lista();
    this.getEmpresas();
  },
  mounted () {

  },
  data () {
    return {
      usuarios: [],
      nombre: '',
      email: '',
      empresa: '',
      empresas: [],
      mostrar: false
    }
  },
  methods: {
    agregar () {
      this.mostrar = true;
      this.nombre = '';
      this.email = '';
      this.empresa = '';
      this.id = '';
    },
    lista () {
      axios.get(`${this.url}usuarios`)
      .then(respuesta => {
        console.log('usuarios', respuesta.data);
        this.usuarios = respuesta.data.rows;
      })
    },
    getEmpresas () {
      axios.get(`${this.url}empresas`)
      .then(respuesta => {
        this.empresas = respuesta.data.rows;
        console.log('empresas', this.empresas);
      })
    },
    guardar () {
      let data = {
        nombre: this.nombre,
        email: this.email,
        id_empresa: this.empresa
      }
      console.log('enviado!', data);
      if (this.id) {
        axios.put(`${this.url}usuarios/${this.id}`, data)
        .then(respuesta => {
          this.mostrar = false;
          this.lista();
        })
      } else {
        axios.post(`${this.url}usuarios`, data)
        .then(respuesta => {
          console.log('Guardado!')
          this.mostrar = false;
          this.lista();
        })
      }
    },
    eliminar (id) {
      if (confirm('¿Eliminar?')) {
        axios.delete(`${this.url}usuarios/${id}`)
        .then(respuesta => {
          this.lista();
        })
      }
    },
    actualizar (id) {
      axios.get(`${this.url}usuarios/${id}`)
      .then(respuesta => {
        console.log(respuesta.data)
        let usuario = respuesta.data;

        this.nombre = usuario.nombre;
        this.email = usuario.email;
        this.empresa = usuario.id_empresa;
        this.id = usuario.id;

        this.mostrar = true;
      })
    }
  }
}
</script>

