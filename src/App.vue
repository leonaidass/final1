<template>
  <div id="app">
    <v-app>
      <Navbar :login="logueado"/>
      <!-- <v-container class="pt-12 mt-12"> -->
      <v-main>
        <Login v-if="!logueado" @recibir="enviar" />
        <router-view v-else />
      </v-main>
      <v-btn class="mx-2" id="botonCarrito" fab dark large color="green">
        <v-badge
          :content="gettCarrito.length"
          :value="gettCarrito.length"
          color="red"
          overlap
        >
          <router-link to="/carrito">
            <v-icon large> mdi-cart-variant </v-icon>
          </router-link>
        </v-badge>
      </v-btn>
    </v-app>
  </div>
</template>

<script>
import Login from "./components/Login.vue";
import Navbar from "./components/Navbar.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    Login,
    Navbar,
  },
  data() {
    return {
      logueado: true,
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
#botonCarrito {
  display: inline-block;
  position: fixed;
  bottom: 40px;
  left: 25px;
}
a {
  text-decoration: none;
  color: white !important;
}
</style>
