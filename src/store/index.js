import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    productos: [],
    datosEditar:{},
    carrito:[],
    login:false
  },
  mutations: {
    getProductos(state,payload){
     state.productos=payload
     console.log(state.productos)
    },
    agregarNuevoProducto(state,payload){
    
      axios
      .post(
        "https://61afe8ff3e2aba0017c4959a.mockapi.io/productos",
        payload
      )
      .then((res) => {
        console.log(res.data);
        
      });
      
     
    },
    dialogDatos(state,payload){
      axios
      .get(
        `https://61afe8ff3e2aba0017c4959a.mockapi.io/productos/${payload}`
      )
      .then((res) => {
        state.datosEditar = res.data;
        
      });
    },
    guardarCarrito(state,payload){
     
      //  const carritoProductos= JSON.parse(payload);
        payload.cantidad=1
        
      state.carrito.push(payload)
      
      
    

    },
    CargarCarrito(state,payload){
      state.carrito=payload
    },

    vistaAdmin(state,payload){
       state.login= payload
       console.log(state.login)
    }




  },



  actions: {
    traerProductos(context) {
      axios
        .get("https://61afe8ff3e2aba0017c4959a.mockapi.io/productos")
        .then((data) => {
          context.commit("getProductos", data.data);
        });
    },
    agregarProducto(context,payload) {
     
       context.commit("agregarNuevoProducto",payload)
       
    },
    datosDialog(context,payload){
       context.commit("dialogDatos",payload)
    },
    agregarCarrito(context,payload){
       context.commit("guardarCarrito",payload)
    },
    cargarCarrito(context,payload){
    context.commit("CargarCarrito",payload)
    },
    habilitarAdmin(context,payload){
      context.commit("vistaAdmin",payload)
      }

  },

  getters:{
    gettProductos(state){
      return state.productos
    },
    gettDatosEditar(state){
      return state.datosEditar
    },
    gettCarrito(state){
      return state.carrito
    },
    gettLogin(state){
      return state.login
    },
    totalCarrito(state){
      // return state.carrito.reduce((acc, el) => (acc += el.precio), 0);
      return state.carrito.reduce(function(acc, el) {
        return acc + (el.precio * el.cantidad)
        
      }, 0);
    }
  }
});
