import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    productos: [],
    datosEditar:{}
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
    }
  },

  getters:{
    gettProductos(state){
      return state.productos
    },
    gettDatosEditar(state){
      return state.datosEditar
    }
  }
});
