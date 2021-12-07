<template>
   
              
                <div class="row">
                    
                    <div v-for="(dato,i) in datos" :key="i" class="cols-12 col-md-4">
                        <v-card class=" pa-4 mt-2">
                        
                            <h2>{{dato.nombre}}</h2>
                            <h3> $ {{dato.precio}}</h3>
                            <v-chip> Stock {{dato.stock}}</v-chip>
                           

                        
                        </v-card>
                    </div>

                 </div>
</template>

<script>

import datos from "../assets/datos.json";

    export default {
        data() {
            return {
                datos
            }
        },
        
    }
</script>

<style lang="scss" scoped>

</style>