<template>
    <section>
        <h3>Empresas</h3>
        <table>
            <tr>
                <th>Nombre</th>
                <th>Dirección</th>
            </tr>
            <tr v-for="item in empresas">
                <td>{{ item.nombre }}</td>
                <td>{{ item.direccion }}</td>
            </tr>
        </table>
    </section>
</template>

<script>
import axios from 'axios';

export default {
    created () {
        this.url = 'http://localhost:4000/api-rest/';
        axios.get(`${this.url}empresas`)
        .then((respuesta) => {
            console.log(respuesta.data);
            this.empresas = respuesta.data;
        })
    },
    mounted () {

    },
    data () {
        return {
            empresas: []
        }
    }
}
</script>