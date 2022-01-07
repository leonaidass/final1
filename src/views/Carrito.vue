<template>
<v-container>
  <div>
    <h2>Carrito</h2>

    <v-card>
      <v-data-table :items="datos" :headers="cabezera"> </v-data-table>
    </v-card>
  </div>
  </v-container>
</template>

<script>
import axios from "axios";



export default {
  data() {
    return {
      datos:[],
      cabezera: [
        {
          text: "Nombre",
          align: "start",
          sortable: false,
          value: "nombre",
        },
        { text: "Precio", value: "precio" },
        { text: "Cantidad", value: "cantidad" },
      ],
    };
  },

  methods: {

      obtenerDatos(){
          axios.get("https://61afe8ff3e2aba0017c4959a.mockapi.io/carrito")
          .then((data)=>{
               this.datos = data.data;
              
          })
      }
  },

  mounted(){
      this.obtenerDatos()
  }
};
</script>

<style lang="scss" scoped></style>
