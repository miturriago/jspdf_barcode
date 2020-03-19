<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <button @click="download">Download PDF</button>
    </div>
    <div ref="content">
      <img id='code39' />    
    </div>
  </div>
</template>
<script>
import jsPDF from 'jspdf' 
import html2canvas from "html2canvas"
export default {
  data () {
    return {
       
    }
},
  methods: {
 download() {
    JsBarcode("#code39", "12345678901237", {
            format: 'CODE39',
            });

    const img = document.querySelector('img#code39');

    var doc = new jsPDF();
    doc.addImage(img.src, 'JPEG', 130 , 10, 40, 15);
    doc.save('my.pdf');
 },

 downloadWithCSS() {
   const doc = new jsPDF();
   /** WITH CSS */
   var canvasElement = document.createElement('canvas');
    html2canvas(this.$refs.content, { canvas: canvasElement 
      }).then(function (canvas) {
    const img = canvas.toDataURL("image/jpeg", 0.8);
    doc.addImage(img,'JPEG',20,20);
    doc.save("sample.pdf");
   });
 },
}
}
</script>

<style>
.pdf{
  background:url("https://res.cloudinary.com/lomaju/image/upload/v1584237363/Gesco/guiaContado_gf4imb.jpg");
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
