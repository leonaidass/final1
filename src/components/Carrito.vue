<template>
    <div>
     
     <h2>Carrito</h2>

      <v-card>
        <v-data-table
         :items="datos"
         :headers="cabezera"
        
        
        
        >

          

        </v-data-table>
      </v-card>


    </div>
</template>

<script>

import datos from "../assets/datos.json";
import cabezera from "../assets/cabezera.json";


    export default {

        data() {
            return {
                datos,
                cabezera
            }
        },
        
    }
</script>

<style lang="scss" scoped>

</style>