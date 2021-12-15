<template>
  <div>
    <v-container class="card-container d-flex justify-center">
    <v-card class="primaryBlack text-center pa-8" max-width="500">
      <img src="../assets/logo.jpg" alt="" style="width:300px">
    <h1>Inicio Sesion</h1>
    <v-form v-model="valid" ref="login">
      <v-row>
        <v-col cols="12" md="12">
          <v-text-field
            v-model="Usuario"
            :rules="nameRules"
            :counter="10"
            label="Usuario"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="12">
          <v-text-field
            v-model="Contraseña"
            :rules="nameRules"
            :counter="10"
            label="Contraseña"
            required
          ></v-text-field>
        </v-col>

       
      </v-row>

      <v-btn  block color="green" dark @click="enviar"> Enviar </v-btn>
    </v-form>

    </v-card>

    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      Usuario: "",
      Contraseña: "",
      valor: false,
      nameRules: [
        (v) => !!v || "Por favor complete este campo",
        (v) =>
          v.length >= 3 || "Este campo debe contener al menos 3 caracteres",
      ],
      email: "",
      emailRules: [
        (v) => !!v || "Por favor complete este campo",
        (v) =>
          /.+@.+/.test(v) || "Por favor complete con una dirección de e-mail",
      ],
    };
  },
  methods: {
    enviar() {
      if(this.$refs.login.validate()){
         this.valor = true;
         this.$emit("recibir", this.valor);}
     
    },
  },
};
</script>

<style lang="scss" scoped></style>
