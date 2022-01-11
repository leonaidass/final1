<template>
<v-container>
  
  <div>
    <h2>Carrito</h2>

      <v-row>
        <v-col cols="12" md="6">
    <v-card>
      <v-data-table :items="gettCarrito" :headers="cabezera">

        <template v-slot:[`item.total`] ="{ item }">
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
         <!-- <h2>Total: {{totalCarrito}}</h2> -->
    </v-card>
    </v-col>
    </v-row>
  </div>
  </v-container>
</template>

<script>
// import axios from "axios";
import { mapGetters} from "vuex"


export default {
  data() {
    return {
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
     eliminar(item){
      let leo=item.id;
      
      let indice = this.gettCarrito.findIndex(mascota => mascota.id === leo);
      this.gettCarrito.splice(indice, 1)
     }
     
  },

  mounted(){
       },
  computed: {
    ...mapGetters(["gettCarrito"]),
  },
   watch: {
    gettCarrito(newValue) {
      localStorage.setItem("carrito", JSON.stringify(newValue));
    },
  },
};
</script>

<style lang="scss" scoped></style>
