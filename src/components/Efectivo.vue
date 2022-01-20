<template>
    <div>
    <h1>Solo un paso mas</h1>
    
    <v-container>
         <v-card class="sidebar pa-4">
              <h3>Completa con tus datos</h3>
              <v-text-field
                v-model="nombreUsuario"
                label="Nombre"
              ></v-text-field>
              <v-text-field
                v-model="direccion"
                label="Direccion"
              ></v-text-field>
                <v-btn color="green" dark block @click="enviarOrden()"
                >Realizar Pedido</v-btn
              >
            </v-card>
    </v-container>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
    export default {
        data() {
            return {
                nombreUsuario:"",
                direccion:""
            }
        },
        computed: {
    ...mapGetters(["gettCarrito"]),
  },

  methods:{
enviarOrden() {
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
          elem.precio;
      });
      if (order === "delivery") {
        closingMessage =
          "%0D%0A" +
          "El+total+del+pedido+es+de+" +
          "%24" +
          this.userCartTotal +
          `%0D%0AEnviar+pedido+a+${this.direccion}`;
      } else if (order === "deliveryy") {
        closingMessage = `%0D%0AVoy+a+retirar+el+producto`;
      }
      window.location.href = `https://wa.me/542645202530?text=Hola+soy+${
        this.nombreUsuario
      }%21%0D%0AQuiero+realizar+un+pedido+de+los+siguientes+items%3A${
        productsString + closingMessage
      }`;
    },
  }
    }
</script>

<style lang="scss" scoped>

</style>