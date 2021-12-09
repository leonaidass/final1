<template>
    <div>
       <h1>Inicio Sesion</h1>
       <v-form v-model="valid">
      
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="nombre"
              :rules="nameRules"
              :counter="10"
              label="Nombre"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="apellido"
              :rules="nameRules"
              :counter="10"
              label="Apellido"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="4">
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>
          </v-col>
        </v-row>
     
      <v-btn class="mr-4 primary" @click="enviar" > Enviar </v-btn>
    </v-form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
               valid: false,
    nombre: "",
    apellido: "",
    valor: false,
    nameRules: [
      (v) => !!v || "Por favor complete este campo",
      (v) => v.length >= 3 || "Este campo debe contener al menos 3 caracteres",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "Por favor complete este campo",
      (v) =>
        /.+@.+/.test(v) || "Por favor complete con una dirección de e-mail",
    ]
            }
        },
        methods:{
                  enviar() {
      
        this.valor = true;
        
        this.$emit("click", this.valor);
      
    }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>