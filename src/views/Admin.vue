<template>
  <div>
    <h1>Panel Administracion</h1>

    <v-container>
      <v-row>
        <v-col cols="4">
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
          <v-data-table :headers="datosHeader" :items="datos">
            <template v-slot:item.total="{ item }">
              {{ item.precio * item.cantidad }}
            </template>
            <template v-slot:item.acciones="{ item }">
              <v-btn color="red" dark @click="eliminar(item.id)"
                >Eliminar</v-btn>
                <v-btn class="ml-2" color="green" dark @click="editarDialog(item.id)"
                >Editar</v-btn>
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
              v-model="datosEditar.nombre"
              label="Nombre"
            ></v-text-field>

             <v-text-field
              v-model="datosEditar.precio"
              label="Precio $"
            ></v-text-field>

             <v-text-field
              v-model="datosEditar.cantidad"
              label="Cantidad"
            ></v-text-field>

             <v-text-field
              v-model="datosEditar.descripcion"
              label="Descripcion"
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
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      datos: [],
      productoAgregar: {
        nombre: "",
        precio: 0,
        cantidad: 0,
        
      },
      datosEditar:{},
      dialog:false,
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
  methods: {
    obtenerProductos() {
      axios.get("https://61afe8ff3e2aba0017c4959a.mockapi.io/productos")
          .then((data) => {
          this.datos = data.data;
        });
    },
    agregarProducto() {
      axios.post("https://61afe8ff3e2aba0017c4959a.mockapi.io/productos",this.productoAgregar)
      .then((res)=>{
          console.log(res.data)
          this.obtenerProductos()
      })
    },
    editarDialog(ideditar){
        this.dialog=true
        axios.get(`https://61afe8ff3e2aba0017c4959a.mockapi.io/productos/${ideditar}`)
       .then((res)=>{
         this.datosEditar=res.data
         console.log("los datos son",this.datosEditar)
       })
    },
    editarGuarda(){
            const id = this.datosEditar.id
            axios.put(`https://61afe8ff3e2aba0017c4959a.mockapi.io/productos/${id}`,this.datosEditar)
            .then((res)=>{
              console.log(res)
              this.dialog=false
              this.obtenerProductos()
            }) .catch((error)=>{
              console.log(error)
            })
    },
    eliminar(idproducto) {
      axios
        .delete(
          `https://61afe8ff3e2aba0017c4959a.mockapi.io/productos/${idproducto}`
        )
        .then((res) => {
            console.log(res)
            this.obtenerProductos()
        });
    },
  },

  mounted() {
    this.obtenerProductos();
  },
};
</script>

<style lang="scss" scoped></style>
