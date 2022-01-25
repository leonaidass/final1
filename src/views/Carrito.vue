<template>
  <v-container>
    <div>
      <h2>Carrito</h2>

      <v-row>
        <v-col cols="12" md="6">
          <v-card class="pa-3">
            <v-data-table
              hide-default-footer
              :items="gettCarrito"
              :headers="cabezera"
            >
              <template v-slot:[`item.cantidad`]="{ item }">
                <v-text-field
                  v-model="item.cantidad"
                  type="number"
                  min=1
                  required
                ></v-text-field>
              </template>

              <template v-slot:[`item.total`]="{ item }">
                {{ item.precio * item.cantidad }}
              </template>

              <template v-slot:[`item.acciones`]="{ item }">
                <!-- <v-btn color="green" dark @click="editarDialog(item.id)"
                  ><v-icon>mdi-pencil</v-icon></v-btn
                > -->
                <v-btn color="red" class="ml-2" dark @click="eliminar(item)"
                  ><v-icon>mdi-delete</v-icon></v-btn
                >
              </template>
            </v-data-table>
            <!-- <v-btn rounded block
      color="success">Finalizar Compra</v-btn> -->
            
          </v-card>
          <h2>El total de su pedido es: {{totalCarrito}}</h2>
        </v-col>
        <v-col cols="12" md="6">
          <v-alert outlined type="success" text>
            Para finalizar su compra seleccione un metodo de pago.
            <v-radio-group v-model="pago">
              <v-radio value="efectivo" label="Efectivo"></v-radio>
              <v-radio value="credito" label="Credito"></v-radio>
            </v-radio-group>
          </v-alert>
          <Efectivo v-if="pago == 'efectivo'" :total="totalCarrito"/>
          <Credito v-else />
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
// import axios from "axios";
import { mapGetters } from "vuex";
import Efectivo from "../components/Efectivo.vue";
import Credito from "../components/Credito.vue";

export default {
  components: {
    Efectivo,
    Credito,
  },
  data() {
    return {
      pago: "efectivo",
      cantidadProducto: 1,
      cabezera: [
        {
          text: "Nombre",
          align: "start",
          sortable: false,
          value: "nombre",
        },
        { text: "Precio", value: "precio" },
        { text: "Cantidad", value: "cantidad" },
        { text: "Total", value: "total" },
        { text: "Acciones", value: "acciones" },
      ],
    };
  },

  methods: {
    eliminar(item) {
      let idElemento = item.id;

      let indice = this.gettCarrito.findIndex(
        (elementoEliminar) => elementoEliminar.id === idElemento
      );
      this.gettCarrito.splice(indice, 1);
    },
  },

  mounted() {},
  computed: {
    ...mapGetters(["gettCarrito","totalCarrito"]),
  },
  watch: {
    gettCarrito(newValue) {
      localStorage.setItem("carrito", JSON.stringify(newValue));
    },
  },
};
</script>

<style lang="scss" scoped></style>
