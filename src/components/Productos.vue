<template>
  <div class="row">
    <div v-for="dato in datos" :key="dato.id" class="cols-12 col-md-3">
      <v-card
        class="pa-4 ma-2 mx-auto"
        max-width="344"
        elevation="7"
        outlined
        shaped
      >
        <v-img :src="dato.imagen" height="200px"></v-img>
        <v-card-title>
          {{ dato.nombre }}
        </v-card-title>
        <v-card-text>
          <p>Precio: ${{ dato.precio }}</p>
          <p>Cantidad: {{ dato.cantidad }}</p>
        </v-card-text>

        <v-btn class="ma-2" @click="ver(dato.descripcion)">Ver Mas</v-btn>
        <v-btn @click="enviarCarrito(dato)">Agregar </v-btn>
      </v-card>
    </div>

    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="text-h5">Descripcion</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-card-text>
              {{ mensajeDetalle }}
            </v-card-text>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Cerrar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data() {
    return {
      datos: [],
      dialog: false,
      mensajeDetalle: "",
      datoCarrito: { nombre: "", precio: "", cantidad: "" },
    };
  },
  methods: {
    obtenerProductos() {
      fetch("https://61afe8ff3e2aba0017c4959a.mockapi.io/productos")
        .then((res) => res.json())
        .then((data) => {
          this.datos = data;
        });
    },
    ver(descrpicion) {
      this.dialog = true;
      this.mensajeDetalle = descrpicion;
      console.log(descrpicion);
    },
    enviarCarrito(parametros) {
      this.datoCarrito = {
        nombre: parametros.nombre,
        precio: parametros.precio,
        cantidad: parametros.cantidad,
      };

      axios.post("https://61afe8ff3e2aba0017c4959a.mockapi.io/carrito",this.datoCarrito)
      .then((res)=>{
        console.log(res.data)

      })
      
    },
  },
  mounted() {
    this.obtenerProductos();
  },
};
</script>

<style lang="scss" scoped></style>
