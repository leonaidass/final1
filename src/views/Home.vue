<template>
  <div>
    <v-parallax
      height="300"
      src="https://www.diariamenteali.com/medias/7-almuerzos-saludables-para-toda-la-semana-1900Wx500H?context=bWFzdGVyfGltYWdlc3wxNDYyMjF8aW1hZ2UvanBlZ3xoN2QvaDdkLzkwNzQ0NTExNTI5MjYvNy1hbG11ZXJ6b3Mtc2FsdWRhYmxlcy1wYXJhLXRvZGEtbGEtc2VtYW5hXzE5MDBXeDUwMEh8N2VhMDEwNGE4ZDNkYmViZThmNzYyMWM1ZGU4MjVhODg4MTI4YjJhMjg4NjhmZGIyYTEwNjI1Mjk1MzBkMzY1Zg"
    >
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="text-h4 font-weight-thin mb-4">Green Comidas</h1>
          <h4 class="subheading">La tienda Nº 1 en Comidas!</h4>
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

<style lang="scss" scoped>
h1,
h4 {
  color: black;
  font-size: 20px;
}
</style>
