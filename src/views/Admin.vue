<template>
  <v-container>
    <div>
      <h1>Panel Administracion</h1>

      <v-container>
        <v-row>
          <v-col cols="12" sm="4">
            <v-card class="sidebar pa-4">
              <h3>Agregar Producto</h3>
              <v-text-field
                v-model="productoAgregar.nombre"
                label="Nombre"
              ></v-text-field>
              <v-text-field
                v-model.number="productoAgregar.precio"
                label="Precio"
              ></v-text-field>
              <v-text-field
                v-model.number="productoAgregar.cantidad"
                label="Cantidad"
              ></v-text-field>
              <v-btn color="green" dark block @click="agregarProducto()"
                >Agregar</v-btn
              >
            </v-card>
          </v-col>

          <v-col>
            <v-data-table :headers="datosHeader" :items="gettProductos">
              <template v-slot:[`item.total`] ="{ item }">
                {{ item.precio * item.cantidad }}
              </template>
              <template v-slot:[`item.acciones`]="{ item }">
                <v-btn color="green" dark @click="editarDialog(item.id)"
                  ><v-icon>mdi-pencil</v-icon></v-btn
                >
                <v-btn color="red" class="ml-2" dark @click="eliminar(item.id)"
                  ><v-icon>mdi-delete</v-icon></v-btn
                >
              </template>
            </v-data-table>
          </v-col>
        </v-row>
        <v-dialog v-model="dialog" persistent max-width="600px">
          <v-card>
            <v-card-title>
              <span class="text-h5">Editar Producto</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-card-text>
                  <v-text-field
                    v-model="gettDatosEditar.nombre"
                    label="Nombre"
                  ></v-text-field>

                  <v-text-field
                    v-model="gettDatosEditar.precio"
                    label="Precio $"
                  ></v-text-field>

                  <v-text-field
                    v-model="gettDatosEditar.cantidad"
                    label="Cantidad"
                  ></v-text-field>

                  <v-text-field
                    v-model="gettDatosEditar.descripcion"
                    label="Descripcion"
                  ></v-text-field>

                  <v-text-field
                    v-model="gettDatosEditar.imagen"
                    label="Imagen"
                  ></v-text-field>
                </v-card-text>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialog = false">
                Cerrar
              </v-btn>
              <v-btn color="blue darken-1" text @click="editarGuarda()">
                Guardar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-container>
    </div>
  </v-container>
</template>

<script>
import axios from "axios";
import {mapGetters} from "vuex"
export default {
  data() {
    return {
      datos: [],
      productoAgregar: {
        nombre: "",
        precio: 0,
        cantidad: 0,
      },
  
      dialog: false,
      datosHeader: [
        {
          text: "Nombre",
          value: "nombre",
        },
        {
          text: "Precio",
          value: "precio",
        },
        {
          text: "Cantidad",
          value: "cantidad",
        },

        {
          text: "Total",
          value: "total",
        },
        {
          text: "Acciones",
          value: "acciones",
        },
      ],
    };
  },
  mounted() {
      this.$store.dispatch("traerProductos")
  },
  methods: {
    
      agregarProducto() {
     
       this.$store.dispatch("agregarProducto",this.productoAgregar)
      setTimeout(()=>{
            this.actualizar()
          },1500)
        
    },
     actualizar(){
      this.$store.dispatch("traerProductos")
    },
    editarDialog(ideditar) {
      this.dialog = true;
      this.$store.dispatch("datosDialog",ideditar)
      
    },
    editarGuarda() {
      const id = this.gettDatosEditar.id;
      axios
        .put(
          `https://61afe8ff3e2aba0017c4959a.mockapi.io/productos/${id}`,
          this.gettDatosEditar
        )
        .then((res) => {
          console.log(res);
          this.dialog = false;
          this.actualizar()
        })
        .catch((error) => {
          console.log(error);
        });
    },
    eliminar(idproducto) {
      axios
        .delete(
          `https://61afe8ff3e2aba0017c4959a.mockapi.io/productos/${idproducto}`
        )
        .then((res) => {
          console.log(res);
          this.actualizar()
        });
    },
  },

  
  computed:{
    ...mapGetters(["gettProductos","gettDatosEditar"])
  }
};
</script>

<style lang="scss" scoped></style>
