<template>
  <div>
    <v-parallax
      height="300"
      src="https://www.diariamenteali.com/medias/7-almuerzos-saludables-para-toda-la-semana-1900Wx500H?context=bWFzdGVyfGltYWdlc3wxNDYyMjF8aW1hZ2UvanBlZ3xoN2QvaDdkLzkwNzQ0NTExNTI5MjYvNy1hbG11ZXJ6b3Mtc2FsdWRhYmxlcy1wYXJhLXRvZGEtbGEtc2VtYW5hXzE5MDBXeDUwMEh8N2VhMDEwNGE4ZDNkYmViZThmNzYyMWM1ZGU4MjVhODg4MTI4YjJhMjg4NjhmZGIyYTEwNjI1Mjk1MzBkMzY1Zg"
    >
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          
          
          <h1>Green Comidas</h1>
        </v-col>
      </v-row>
    </v-parallax>
    <v-container>
      <Productos />
    </v-container>
  </div>
</template>

<script>
import Productos from "../components/Productos.vue";

export default {
  components: {
    Productos,
  },
};
</script>

<style lang="css" scoped>

h1 {
   --glow-color: rgb(7, 97, 41);
  color: rgba(76, 175, 80, 1);
  
  font-size: 80px;
  font-weight: bold;
  text-decoration: none;
  letter-spacing: -3px;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  -webkit-text-stroke: 1px rgb(20, 122, 56);
  text-shadow: 0 0 .5em var(--glow-color);
        
        
}


</style>
