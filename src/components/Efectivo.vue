<template>
    <div>
    <h1>Solo un paso mas</h1>
    
    <v-container>
         <v-card class="sidebar pa-4">
              <h3>Completa con tus datos</h3>
              <v-form v-model="valid" ref="compra">
              <v-text-field
                v-model="nombreUsuario"
                :rules="nameRules"
                label="Nombre"
              ></v-text-field>
              <v-text-field
                v-model="direccion"
                :rules="nameDireccion"
                label="Direccion"
              ></v-text-field>
                <v-btn color="green" dark block @click="enviarOrden()"
                >Realizar Pedido</v-btn
              >
              </v-form>
            </v-card>
            <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
      color="red accent-2"
    >
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="white"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Cerrar
        </v-btn>
      </template>
    </v-snackbar>
    </v-container>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
    export default {
      props:{
      total:Number
      },

        data() {
            return {
                nombreUsuario:"",
                direccion:"",
                 snackbar: false,
      text: 'Agregue Productos al Carrito y Complete sus datos para continuar.',
      timeout: 2000,
                valid: false,
                nameRules: [
        (v) => !!v || "Por favor complete este campo",
        (v) =>
          v.length >= 3 || "Este campo debe contener al menos 3 caracteres",
      ],
      nameDireccion: [
        (v) => !!v || "Por favor complete este campo",
        (v) =>
          v.length >= 3 || "Este campo debe contener al menos 3 caracteres",
      ],
            }
        },
        computed: {
    ...mapGetters(["gettCarrito"]),
  },

  methods:{
enviarOrden() {
       if(this.$refs.compra.validate() && this.gettCarrito.length>0){
      let productsString = "";
      let closingMessage = "";
      let order="delivery"
      this.gettCarrito.forEach((elem) => {
        productsString =
          productsString +
          "%0D%0A" +
          elem.nombre.replace(" ", "+") +
          "+-+" +
          "%24" +
          elem.precio +
          "+-+" +
          "cantidad: " +
          elem.cantidad;
      });
      localStorage.removeItem('carrito')
      if (order === "delivery") {
        closingMessage =
          "%0D%0A" +
          "El+total+del+pedido+es+de+" +
          "%24" +
          this.total +
          `%0D%0AEnviar+pedido+a+${this.direccion}`;
      } else if (order === "deliveryy") {
        closingMessage = `%0D%0AVoy+a+retirar+el+producto`;
      }
      window.location.href = `https://wa.me/542645202530?text=Hola+soy+${
        this.nombreUsuario
      }%21%0D%0AQuiero+realizar+un+pedido+de+los+siguientes+items%3A${
        productsString + closingMessage
      }`;
    }else{
      this.snackbar=true
    }
    },
  }
    }
</script>

<style lang="scss" scoped>

</style>