<template>
  <div id="app">
    <v-app>
      <Navbar/>
      <!-- <v-container class="pt-12 mt-12"> -->
      <v-main>
        <!-- <Login v-if="!logueado" @recibir="enviar" /> -->
        <router-view />
      </v-main>
      <v-btn class="mx-2" id="botonCarrito"  @click="goCarrito" fab dark large color="green">
        <v-badge
          :content="gettCarrito.length"
          :value="gettCarrito.length"
          color="red"
          overlap
        >
          
            <v-icon large> mdi-cart-variant </v-icon>
          
        </v-badge>
      </v-btn>
      <Footer/>
    </v-app>
  </div>
</template>

<script>
// import Login from "./components/Login.vue";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue"
import { mapGetters } from "vuex";
export default {
  components: {
    // Login,
    Navbar,
    Footer
  },
  data() {
    return {
      logueado: false,
    };
  },
  methods: {
    // enviar(valor) {
    //   this.logueado = valor;
    // },
    // salir() {
    //   this.logueado = false;
    // },
    goCarrito(){
      this.$router.push('/carrito').catch(()=>{});
      
    }
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
