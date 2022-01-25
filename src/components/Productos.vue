<template>
  <div class="row">
        <div v-for="dato in gettProductos" :key="dato.id" class="cols-12 col-md-3">
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

        <v-btn class="ma-2" color="primary" @click="ver(dato.descripcion)">Ver Mas</v-btn>
        <v-btn color="green" dark @click="enviarCarrito(dato)">Agregar <v-icon
          dark
          right
        >
         mdi-cart-variant
        </v-icon> </v-btn>
      </v-card>
    </div>
 <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
      color="success"
    >
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="white"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Cerrar
        </v-btn>
      </template>
    </v-snackbar>
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
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      dialog: false,
      mensajeDetalle: "",
      datoCarrito: { nombre: "", precio: "", cantidad: "",id:"" },
      carritoLocal: [],
       snackbar: false,
      text: 'Se agrego el producto al carrito.',
      timeout: 2000,
    };
  },
  methods: {
    ver(descrpicion) {
      this.dialog = true;
      this.mensajeDetalle = descrpicion;
      console.log(descrpicion);
    },
    enviarCarrito(parametros) {
      this.snackbar=true
      this.datoCarrito = {
        nombre: parametros.nombre,
        precio: parametros.precio,
        cantidad: parametros.cantidad,
        id:parametros.id
      };
      this.$store.dispatch("agregarCarrito", this.datoCarrito);
    },
  },
  mounted() {
    this.$store.dispatch("traerProductos");
    
  },
  computed: {
    ...mapGetters(["gettProductos", "gettCarrito"]),
  },
  watch: {
    gettCarrito(newValue) {
      localStorage.setItem("carrito", JSON.stringify(newValue));
    },
  },
};
</script>

<style lang="scss" scoped></style>
