<template>
  <div>
    <v-parallax
      height="300"
      src="https://www.diariamenteali.com/medias/7-almuerzos-saludables-para-toda-la-semana-1900Wx500H?context=bWFzdGVyfGltYWdlc3wxNDYyMjF8aW1hZ2UvanBlZ3xoN2QvaDdkLzkwNzQ0NTExNTI5MjYvNy1hbG11ZXJ6b3Mtc2FsdWRhYmxlcy1wYXJhLXRvZGEtbGEtc2VtYW5hXzE5MDBXeDUwMEh8N2VhMDEwNGE4ZDNkYmViZThmNzYyMWM1ZGU4MjVhODg4MTI4YjJhMjg4NjhmZGIyYTEwNjI1Mjk1MzBkMzY1Zg"
    >
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          
          
          <h1>Comidas Saludables</h1>
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
/* text-align: left; */
transform: translateX(-50%) translateY(-50%);
letter-spacing: -3px;
margin: 0;
position: absolute; 
top: 50%;
left: 50%;
font-family: Arial Black; 
font-weight: bold; 
font-size: 75px; 
color: #fff; 
text-shadow: 0 1px 0 #ddd, 0 2px 0 #ccc, 0 3px 0 #bbb, 0 4px 0 #aaa, 0 5px 0 #acacac, 0 6px 1px rgba(0,0,0,0.1), 0 0 5px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.3), 0 3px 5px rgba(0,0,0,0.2), 0 5px 10px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.2), 0 20px 20px rgba(0,0,0,0.15);
}


</style>
