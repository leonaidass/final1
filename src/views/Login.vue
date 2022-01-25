<template>
  <div>
    <v-container class="card-container d-flex justify-center">
      <v-card class="text-center pa-8" max-width="500">
        <img src="../assets/logo.jpg" alt="" style="width: 300px" />
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

          <v-btn block color="green" class="mt-4" dark @click="login()">
            Ingresar
          </v-btn>
          <v-btn
            block
            color="green"
            class="mt-4"
            dark
            v-model="dialog"
            @click="dialog = true"
          >
            Registrarse
          </v-btn>
        </v-form>
      </v-card>

      <v-dialog v-model="dialog" persistent max-width="600px">
        <v-card>
          <v-card-title>
            <span class="text-h5">Registrarse</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" md="12">
                  <v-text-field
                    v-model="nombreRegistro"
                    :rules="nameRules"
                    :counter="10"
                    label="Usuario"
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="12">
                  <v-text-field
                    v-model="contraseñaRegistro"
                    :rules="nameRules"
                    :counter="10"
                    label="Contraseña"
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="12">
                  <v-text-field
                    v-model="emailRegistro"
                    :rules="emailRules"
                    :counter="10"
                    label="Correo"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false">
              Cerrar
            </v-btn>
            <v-btn color="blue darken-1" text @click="regitrarse()">
              Enviar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      valid: false,
      dialog: false,
      Usuario: "",
      Contraseña: "",
      nombreRegistro: "",
      emailRegistro: "",
      contraseñaRegistro: "",
      datoRegistro: {},
      registroLogin: "",
      ingreso:false,

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
    login() {
      if (this.$refs.login.validate()) {
        if (
          this.registroLogin[0].nombre === this.Usuario &&
          this.registroLogin[0].password === this.Contraseña
        ) {
          // console.log("ingreso al sistema admin");
          this.ingreso=true;
          this.$store.dispatch("habilitarAdmin",this.ingreso)
          this.$router.push('/');
        }
      }
    },
    enviar() {
      if (this.$refs.login.validate()) {
        this.valor = true;
        this.$emit("recibir", this.valor);
      }
    },

    regitrarse() {
      this.datoRegistro = {
        nombre: this.nombreRegistro,
        correo: this.emailRegistro,
        contraseña: this.contraseñaRegistro,
      };

      axios
        .post(
          "https://61afe8ff3e2aba0017c4959a.mockapi.io/usuario",
          this.datoRegistro
        )
        .then((res) => {
          console.log(res.data);
        });
      this.dialog = false;
      this.valor = true;
      this.$emit("recibir", this.valor);
      console.log(this.datoRegistro);
    },
  },
  mounted() {
    axios
      .get("https://61afe8ff3e2aba0017c4959a.mockapi.io/usuario")
      .then((res) => {
        this.registroLogin = res.data;
        console.log(this.registroLogin[0].nombre);
      });
  },
};
</script>

<style lang="scss" scoped></style>
