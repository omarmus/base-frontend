<template>
  <section>
    <!-- Formulario agregar/editar empresa -->
    <form @submit.prevent="guardar" v-if="mostrar">
      <h2 class="title">{{ form.id ? 'Editar' : 'Agregar'}} empresa</h2>
      <input type="hidden" v-model="form.id">
      <div class="form-group">
        <label>Nombre</label>
        <input type="text" class="form-control" v-model="form.nombre">
      </div>
      <div class="form-group">
        <label>Dirección</label>
        <input type="text" class="form-control" v-model="form.direccion">
      </div>
      <button class="btn" type="button" @click="mostrar = false">Cancelar</button>
      <button type="submit" class="btn btn-primary">Guardar</button>
    </form>

    <!-- Listado de empresas -->
    <div v-else>
      <h3>Empresas</h3>
      <div class="btn-container">
        <button class="btn btn-primary" @click="agregar">Agregar empresa</button>
      </div>
      <table>
        <tr>
          <th>Acciones</th>
          <th>Nombre</th>
          <th>Dirección</th>
        </tr>
        <tr v-for="item in empresas">
          <td class="text-center">
            <button type="button" class="btn" @click="editar(item.id)">Editar</button>
            <button type="button" class="btn" @click="eliminar(item.id)">Eliminar</button>
          </td>
          <td>{{ item.nombre }}</td>
          <td>{{ item.direccion }}</td>
        </tr>
      </table>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  created () {
    this.url = 'http://localhost:4000/api-rest/';
    this.lista();
  },
  data () {
    return {
      form: {
        id: null,
        nombre: '',
        direccion: ''
      },
      empresas: [],
      mostrar: false
    }
  },
  methods: {
    agregar () {
      this.mostrar = true;
      this.form = {
        id: null,
        nombre: '',
        direccion: ''
      };
    },
    guardar () {
      // Preguntamos si tenemos un id para la actualización
      if (this.form.id) {
        let datos = {
          nombre: this.form.nombre,
          direccion: this.form.direccion
        };
        axios.put(`${this.url}empresas/${this.form.id}`, datos)
        .then(respuesta => {
          console.log('Actualizado', respuesta.data);
          this.mostrar = false;
          this.lista();
        })
      } else { // Si no tiene id creamos un nuevo registro
        axios.post(`${this.url}empresas`, this.form)
        .then(respuesta => {
          console.log('Guardado', respuesta.data);
          this.mostrar = false;
          this.lista();
        })
      }
    },
    lista () {
      // Cargando lista de empresas
      axios.get(`${this.url}empresas`)
      .then(respuesta => {
        this.empresas = respuesta.data.rows;
      })
    },
    editar (id) {
      axios.get(`${this.url}empresas/${id}`)
      .then(respuesta => {
        // Asignamos respuesta para editar el registro
        this.form = respuesta.data;
        this.mostrar = true;
      })
    },
    eliminar (id) {
      if (confirm('¿Está seguro de eliminar el registro?')) {
        axios.delete(`${this.url}empresas/${id}`)
        .then(respuesta => {
          this.lista();
        })
      }
    }
  }
}
</script>
