<template>
  <div id="app">
    <v-app>
      <v-app-bar app color=green dark>
         <h1>ComidasSaludables.Com</h1>
         <v-spacer></v-spacer>
         <v-btn color="teal lighten-3" class="ml-4" v-if="logueado" @click="salir()">
           Salir
          </v-btn>
          <div >
        <router-link to="/">Home</router-link> |
        <router-link to="/admin" >Administrador</router-link> |
         <router-link to="/carrito" >Carrito</router-link>
         </div>
      </v-app-bar>
      <v-container class="pt-12 mt-12">
         <Login v-if="!logueado" @recibir="enviar" /> 
        <router-view v-else/>
        
  
      </v-container>
      
    </v-app>
  </div>
</template>

<script>

import Login from "./components/Login.vue"
  export default {
    components:{
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
        
      },
      salir(){
        this.logueado=false
      }
    }
    
  }
</script>

<style lang="scss" scoped>
 
</style>
