<template>
  <div>
    <v-app-bar app color="green" dark>
      <v-app-bar-nav-icon
        v-show="gettLogin"
        @click="menu = !menu"
      ></v-app-bar-nav-icon>
      <v-app-bar-title class="hidden-sm-and-down"><h1>ComidasSaludables.com</h1></v-app-bar-title>
      <v-app-bar-title class="hidden-md-and-up">ComidasSaludables</v-app-bar-title>
      
      

      <v-spacer></v-spacer>
      <div>
        <router-link to="/"><h2>Inicio</h2></router-link>
        
      </div>
      <v-btn color="accent" class="ml-4" @click="goLogin" v-if="!gettLogin"> Login </v-btn>
      <v-btn color="accent" class="ml-4" v-else @click="salir()"> Salir </v-btn>
      
    </v-app-bar>

    <v-navigation-drawer app v-model="menu">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> Administrador </v-list-item-title>
          <v-list-item-subtitle> Panel de administracion </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title
              ><router-link to="/admin"
                ><p id="items">Productos</p></router-link
              ></v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import {mapGetters} from "vuex"
export default {
  data() {
    return {
      menu: false,
    };
  },
  methods:{
    goLogin(){
       this.$router.push('/login').catch(()=>{});
    },
    salir(){
      let salirLogin=false;
      this.$store.dispatch("habilitarAdmin",salirLogin)
      this.$router.push('/');
    }
  },
 computed: {
    ...mapGetters(["gettLogin"]),
  },
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: white !important;
}
#items {
  text-decoration: none;
  color: rgb(26, 3, 3) !important;
  margin: 5px;
  font-size: 15px;
}

</style>
