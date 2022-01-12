<template>
  <div id="app">
    <v-app>
      <v-app-bar app color="green" dark>
        <h1>ComidasSaludables.Com</h1>
        <v-spacer></v-spacer>
        <v-btn
          color="teal lighten-3"
          class="ml-4"
          v-if="logueado"
          @click="salir()"
        >
          Salir
        </v-btn>
        <div>
          <router-link to="/">Inicio</router-link> |
          <router-link to="/admin">Administrador</router-link> |
          <router-link to="/carrito"
            ><v-badge
              :content="gettCarrito.length"
              :value="gettCarrito.length"
              color="blue"
              overlap
            >
              <v-icon large> mdi-cart-variant </v-icon>
            </v-badge></router-link
          >
        </div>
      </v-app-bar>
      <!-- <v-container class="pt-12 mt-12"> -->
      <v-main>
        <Login v-if="logueado" @recibir="enviar" />
        <router-view v-else />
      </v-main>
    </v-app>
  </div>
</template>

<script>
import Login from "./components/Login.vue";
import {mapGetters} from "vuex"
export default {
  components: {
    Login,
  },
  data() {
    return {
      logueado: false,
    };
  },
  methods: {
    enviar(valor) {
      this.logueado = valor;
    },
    salir() {
      this.logueado = false;
    },
  },
  mounted() {
    const productosCarrito = localStorage.getItem("carrito");
    if (productosCarrito) {
      this.$store.dispatch("cargarCarrito", JSON.parse(productosCarrito));
    }
  },

   computed: {
    ...mapGetters(["gettCarrito"]),
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: white !important;
}
</style>
