<template>
  <div>
    <v-parallax
      height="300"
      src="https://www.diariamenteali.com/medias/7-almuerzos-saludables-para-toda-la-semana-1900Wx500H?context=bWFzdGVyfGltYWdlc3wxNDYyMjF8aW1hZ2UvanBlZ3xoN2QvaDdkLzkwNzQ0NTExNTI5MjYvNy1hbG11ZXJ6b3Mtc2FsdWRhYmxlcy1wYXJhLXRvZGEtbGEtc2VtYW5hXzE5MDBXeDUwMEh8N2VhMDEwNGE4ZDNkYmViZThmNzYyMWM1ZGU4MjVhODg4MTI4YjJhMjg4NjhmZGIyYTEwNjI1Mjk1MzBkMzY1Zg"
    >
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          
          <a href="http://www.thismanslife.co.uk" target="_blank">Green Comidas</a>
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
@keyframes tipsy {
  0 {
    transform: translateX(-50%) translateY(-50%) rotate(0deg);
  }
  100% {
    transform: translateX(-50%) translateY(-50%) rotate(360deg);
  }
}


a {
  color: #7e5dd6;
  text-shadow: 0 20px 25px #2e2e31, 0 40px 60px #2e2e31;
  font-size: 80px;
  font-weight: bold;
  text-decoration: none;
  letter-spacing: -3px;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  
}

a:before,
a:after {
  content: '';
  padding: .9em .4em;
  position: absolute;
  left: 50%;
  width: 100%;
  top: 50%;
  display: block;
  border: 15px solid red;
  transform: translateX(-50%) translateY(-50%) rotate(0deg);
  animation: 10s infinite alternate ease-in-out tipsy;
}

a:before {
  border-color: #d9524a #d9524a rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);
  z-index: -1;
}

a:after {
  border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0) #d9524a #d9524a;
  box-shadow: 25px 25px 25px rgba(46, 46, 49, .8);
}
</style>
