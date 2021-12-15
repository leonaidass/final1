<template>
<v-app>
  <v-app-bar app  color=green dark>
   <h1>ComidasSaludables.Com</h1>
  </v-app-bar>

  <v-container class="pt-12 mt-12">
    <Login v-if="!logueado" @recibir="enviar" />  
   <div v-else>
  <Productos/>
  <Carrito/> 
   </div>
  </v-container>

  </v-app>  
</template>

<script>
import Productos from "./components/Productos.vue"
import Carrito from "./components/Carrito.vue"
import Login from "./components/Login.vue"
  export default {
    components:{
      Productos,
      Carrito,
      Login
    },
    data() {
      return {
       logueado: false,
      }
    },
    methods:{
       enviar(valor) {
        this.logueado = valor
        
      }
    }
    
  }
</script>

<style lang="scss" scoped>

</style>
