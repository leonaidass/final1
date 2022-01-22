<template>
  <div>
    <v-app-bar app color="green" dark>
      <v-app-bar-nav-icon
        v-show="login"
        @click="menu = !menu"
      ></v-app-bar-nav-icon>
      <h1>GreenComidas.com</h1>

      <v-spacer></v-spacer>
      <v-btn color="accent" class="ml-4" @click="goLogin"> Login </v-btn>
      <v-btn color="teal lighten-3" class="ml-4" v-if="login"> Salir </v-btn>
      <div>
        <router-link to="/">Inicio</router-link>
      </div>
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
export default {
  data() {
    return {
      menu: false,
    };
  },
  methods:{
    goLogin(){
       this.$router.push('/login').catch(()=>{});
    }
  },
  props: {
    login: Boolean,
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
