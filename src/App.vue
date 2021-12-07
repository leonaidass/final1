<template>
<v-app>
  <v-app-bar app  color=primary dark>
   <h1>Incio</h1>
  </v-app-bar>

  <v-container class="pt-12 mt-12">
  <Productos/>
  <Carrito/> 
  </v-container>

  </v-app>  
</template>

<script>
import Productos from "./components/Productos.vue"
import Carrito from "./components/Carrito.vue"
  export default {
    components:{
      Productos,
      Carrito
    }
    
  }
</script>

<style lang="scss" scoped>

</style>
