<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <button @click="download">Download PDF</button>
      <button @click="downloadMasiva">Download Masiva</button>
    </div>
    <div ref="content">
      <img id='code39' />    
      <img id="fondo"/>
    </div>
  </div>
</template>
<script>
import jsPDF from 'jspdf' 
import html2canvas from "html2canvas"
import {imgDataMasivo,credito_contado} from './masivo'
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
    var imgData = credito_contado;

    var doc = new jsPDF();
    
    doc.addImage(imgData, 'JPEG', 5, 15,205, 270)
    doc.setFont("helvetica");//tipo de letra
    //********************Destinatario*************************
    doc.addImage(img.src, 'JPEG', 130 , 16, 40, 15);//BARCODE

    //Tipo pago
    doc.setFontSize(8);
    doc.text("Crédito",94,30) //Tipo pago
    doc.setFontSize(6);
    doc.text("Fecha",43,36)//Fecha envío remitente
    doc.text("Lugar",78,36)//Lugar origen remitente

    doc.text("Fecha",120,36)//Fecha envío destinatario
    doc.text("Lugar",163,36)//Lugar origen destinatario
    doc.setFontSize(7);
    doc.text("OS",175,32)//OS

    doc.text("Nombre remitente",23,42) //Nombre remitente
    doc.text("NIT",23,45) //  NIT remitente
    doc.text("direccion",23,48) //direccion remitente
    doc.text("teléfono",23,51) //telefono remitente
    doc.text("lugar",23,54) //lugar remitente
    doc.text("cod postal",92,58)//Codigo postal remitente

    doc.text("Nombre destinatario",110,42) //Nombre destinatario
    doc.text("NIT",110,45) //  NIT destinatario
    doc.text("direccion",110,48) //direccion destinatario
    doc.text("teléfono",110,51) //telefono destinatario
    doc.text("lugar",110,54) //lugar destinatario
    doc.text("cod postal",180,58)//Codigo postal destinatario

    //datos envío
    doc.setFontSize(6);
    doc.text("1",62,66)//cantidad
    doc.text("1",62,71)//peso
    doc.text("1",62,76)//volumen
    doc.text("1",62,81)//valor asegurado
    doc.text("1",62,86)//valor social

    //Observación
    doc.setFontSize(5);
    doc.text("Observaciones",119,66)//Observaciones

    //********************Prueba de entrega*************************
    doc.addImage(img.src, 'JPEG', 130 , 105, 40, 15);//BARCODE

    //Tipo pago
    doc.setFontSize(8);
    doc.text("Crédito",94,119) //Tipo pago
    doc.setFontSize(6);
    doc.text("Fecha",43,125)//Fecha envío remitente
    doc.text("Lugar",78,125)//Lugar origen remitente

    doc.text("Fecha",120,125)//Fecha envío destinatario
    doc.text("Lugar",163,125)//Lugar origen destinatario
    doc.setFontSize(7);
    doc.text("OS",175,121)//OS

    doc.text("Nombre remitente",23,131) //Nombre remitente
    doc.text("NIT",23,134) //  NIT remitente
    doc.text("direccion",23,137) //direccion remitente
    doc.text("teléfono",23,140) //telefono remitente
    doc.text("lugar",23,143) //lugar remitente
    doc.text("cod postal",92,148)//Codigo postal remitente

    doc.text("Nombre destinatario",110,131) //Nombre destinatario
    doc.text("NIT",110,134) //  NIT destinatario
    doc.text("direccion",110,137) //direccion destinatario
    doc.text("teléfono",110,140) //telefono destinatario
    doc.text("lugar",110,143) //lugar destinatario
    doc.text("cod postal",180,148)//Codigo postal destinatario

    //datos envío
    doc.setFontSize(6);
    doc.text("1",62,156)//cantidad
    doc.text("1",62,161)//peso
    doc.text("1",62,166)//volumen
    doc.text("1",62,171)//valor asegurado
    doc.text("1",62,176)//valor social

    //Observación
    doc.setFontSize(5);
    doc.text("Observaciones",119,156)//Observaciones

    //********************Remitente*************************
    doc.addImage(img.src, 'JPEG', 130 , 196, 40, 15);//BARCODE

    //Tipo pago
    doc.setFontSize(8);
    doc.text("Crédito",94,211) //Tipo pago
    doc.setFontSize(6);
    doc.text("Fecha",43,217)//Fecha envío remitente
    doc.text("Lugar",78,217)//Lugar origen remitente

    doc.text("Fecha",120,217)//Fecha envío destinatario
    doc.text("Lugar",163,217)//Lugar origen destinatario
    doc.setFontSize(7);
    doc.text("OS",175,213)//OS

    doc.text("Nombre remitente",23,223) //Nombre remitente
    doc.text("NIT",23,226) //  NIT remitente
    doc.text("direccion",23,229) //direccion remitente
    doc.text("teléfono",23,232) //telefono remitente
    doc.text("lugar",23,235) //lugar remitente
    doc.text("cod postal",92,239)//Codigo postal remitente

    doc.text("Nombre destinatario",110,223) //Nombre destinatario
    doc.text("NIT",110,226) //  NIT destinatario
    doc.text("direccion",110,229) //direccion destinatario
    doc.text("teléfono",110,232) //telefono destinatario
    doc.text("lugar",110,235) //lugar destinatario
    doc.text("cod postal",180,239)//Codigo postal destinatario

    //datos envío
    doc.setFontSize(6);
    doc.text("1",62,248)//cantidad
    doc.text("1",62,253)//peso
    doc.text("1",62,258)//volumen
    doc.text("1",62,263)//valor asegurado
    doc.text("1",62,268)//valor social

    //Observación
    doc.setFontSize(5);
    doc.text("Observaciones",119,248)//Observaciones

doc.save('guía crédito_contado.pdf');
 },

 downloadMasiva() {
   JsBarcode("#code39", "12345678901237", {
            format: 'CODE39',
            });

    const img = document.querySelector('img#code39');
     var imgData = imgDataMasivo
     var doc = new jsPDF();

    doc.addImage(imgData, 'JPEG', 3, 12,205, 270)
    doc.setFont("helvetica");//tipo de letra

    //Primer formato
    doc.addImage(img.src, 'JPEG', 50 , 16, 30, 10);//BARCODE
    doc.setFontSize(4);
    doc.text("fecha",94,41); //Fecha
    doc.setFontSize(5);
    doc.text("O.S",94,48)//O.S
    doc.text("N.I.P",94,55)//N.I.P
    doc.setFontSize(6);
    doc.text("Número de guía",6,45) //guía
    doc.text("Remitente",6,51) //NOmbre Remitente
    doc.setFontSize(5);
    doc.text("Destinatario",6,61) //NOmbre destinatario
    doc.text("direccion",6,63) //direccion destinatario
    doc.text("telefono",6,65) //telefono destinatario
    doc.text("ciudad",6,67) //ciudad destinatario

    doc.setFontSize(8);
    doc.text("Nombre remitente",30,40) //Nombre remitente
    doc.text("Nombre destinatario",30,45) //Nombre Destinatario
    doc.text("Direccion",30,48) //Direccion destinatario
    doc.text("Telefono",30,51) //telefono destinatario
    doc.text("Ciudad",30,54) //ciudad destinatario

    //Segundo formato
    doc.addImage(img.src, 'JPEG', 155 , 16, 30, 10);//BARCODE
    doc.setFontSize(4);
    doc.text("fecha",198,41); //Fecha
    doc.setFontSize(5);
    doc.text("O.S",198,48)//O.S
    doc.text("N.I.P",198,55)//N.I.P
    doc.setFontSize(6);
    doc.text("Número de guía",110,45) //guía
    doc.text("Remitente",110,51) //NOmbre Remitente
    doc.setFontSize(5);
    doc.text("Destinatario",110,61) //NOmbre destinatario
    doc.text("direccion",110,63) //direccion destinatario
    doc.text("telefono",110,65) //telefono destinatario
    doc.text("ciudad",110,67) //ciudad destinatario

    doc.setFontSize(8);
    doc.text("Nombre remitente",134,40) //Nombre remitente
    doc.text("Nombre destinatario",134,45) //Nombre Destinatario
    doc.text("Direccion",134,48) //Direccion destinatario
    doc.text("Telefono",134,51) //telefono destinatario
    doc.text("Ciudad",134,54) //ciudad destinatario

    //tercer formato
    doc.addImage(img.src, 'JPEG', 50 , 83, 30, 10);//BARCODE
    doc.setFontSize(4);
    doc.text("fecha",94,109); //Fecha
    doc.setFontSize(5);
    doc.text("O.S",94,116)//O.S
    doc.text("N.I.P",94,123)//N.I.P
    doc.setFontSize(6);
    doc.text("Número de guía",6,113) //guía
    doc.text("Remitente",6,119) //NOmbre Remitente
    doc.setFontSize(5);
    doc.text("Destinatario",6,129) //NOmbre destinatario
    doc.text("direccion",6,131) //direccion destinatario
    doc.text("telefono",6,133) //telefono destinatario
    doc.text("ciudad",6,135) //ciudad destinatario

    doc.setFontSize(8);
    doc.text("Nombre remitente",30,108) //Nombre remitente
    doc.text("Nombre destinatario",30,113) //Nombre Destinatario
    doc.text("Direccion",30,116) //Direccion destinatario
    doc.text("Telefono",30,119) //telefono destinatario
    doc.text("Ciudad",30,122) //ciudad destinatario
    //cuarto formato
    doc.addImage(img.src, 'JPEG', 155 , 83, 30, 10);//BARCODE
    doc.setFontSize(4);
    doc.text("fecha",198,109); //Fecha
    doc.setFontSize(5);
    doc.text("O.S",198,116)//O.S
    doc.text("N.I.P",198,123)//N.I.P
    doc.setFontSize(6);
    doc.text("Número de guía",110,113) //guía
    doc.text("Remitente",110,119) //NOmbre Remitente
    doc.setFontSize(5);
    doc.text("Destinatario",110,129) //NOmbre destinatario
    doc.text("direccion",110,131) //direccion destinatario
    doc.text("telefono",110,133) //telefono destinatario
    doc.text("ciudad",110,135) //ciudad destinatario

    doc.setFontSize(8);
    doc.text("Nombre remitente",134,108) //Nombre remitente
    doc.text("Nombre destinatario",134,113) //Nombre Destinatario
    doc.text("Direccion",134,116) //Direccion destinatario
    doc.text("Telefono",134,119) //telefono destinatario
    doc.text("Ciudad",134,122) //ciudad destinatario

    //quinto formato
    doc.addImage(img.src, 'JPEG', 50 , 150, 30, 10);//BARCODE
    doc.setFontSize(4);
    doc.text("fecha",94,176); //Fecha
    doc.setFontSize(5);
    doc.text("O.S",94,183)//O.S
    doc.text("N.I.P",94,190)//N.I.P
    doc.setFontSize(6);
    doc.text("Número de guía",6,180) //guía
    doc.text("Remitente",6,186) //NOmbre Remitente
    doc.setFontSize(5);
    doc.text("Destinatario",6,196) //NOmbre destinatario
    doc.text("direccion",6,198) //direccion destinatario
    doc.text("telefono",6,200) //telefono destinatario
    doc.text("ciudad",6,202) //ciudad destinatario

    doc.setFontSize(8);
    doc.text("Nombre remitente",30,175) //Nombre remitente
    doc.text("Nombre destinatario",30,180) //Nombre Destinatario
    doc.text("Direccion",30,183) //Direccion destinatario
    doc.text("Telefono",30,186) //telefono destinatario
    doc.text("Ciudad",30,189) //ciudad destinatario

    //sexto fromato
    doc.addImage(img.src, 'JPEG', 155 , 150, 30, 10);//BARCODE
    doc.setFontSize(4);
    doc.text("fecha",198,176); //Fecha
    doc.setFontSize(5);
    doc.text("O.S",198,183)//O.S
    doc.text("N.I.P",198,190)//N.I.P
    doc.setFontSize(6);
    doc.text("Número de guía",110,180) //guía
    doc.text("Remitente",110,186) //NOmbre Remitente
    doc.setFontSize(5);
    doc.text("Destinatario",110,196) //NOmbre destinatario
    doc.text("direccion",110,198) //direccion destinatario
    doc.text("telefono",110,200) //telefono destinatario
    doc.text("ciudad",110,202) //ciudad destinatario

    doc.setFontSize(8);
    doc.text("Nombre remitente",134,175) //Nombre remitente
    doc.text("Nombre destinatario",134,180) //Nombre Destinatario
    doc.text("Direccion",134,183) //Direccion destinatario
    doc.text("Telefono",134,186) //telefono destinatario
    doc.text("Ciudad",134,189) //ciudad destinatario

    //septimo formato
    doc.addImage(img.src, 'JPEG', 50 , 217, 30, 10);//BARCODE
    doc.setFontSize(4);
    doc.text("fecha",94,244); //Fecha
    doc.setFontSize(5);
    doc.text("O.S",94,251)//O.S
    doc.text("N.I.P",94,258)//N.I.P
    doc.setFontSize(6);
    doc.text("Número de guía",6,248) //guía
    doc.text("Remitente",6,254) //NOmbre Remitente
    doc.setFontSize(5);
    doc.text("Destinatario",6,264) //NOmbre destinatario
    doc.text("direccion",6,266) //direccion destinatario
    doc.text("telefono",6,268) //telefono destinatario
    doc.text("ciudad",6,270) //ciudad destinatario

    doc.setFontSize(8);
    doc.text("Nombre remitente",30,243) //Nombre remitente
    doc.text("Nombre destinatario",30,247) //Nombre Destinatario
    doc.text("Direccion",30,250) //Direccion destinatario
    doc.text("Telefono",30,253) //telefono destinatario
    doc.text("Ciudad",30,256) //ciudad destinatario

    //octavo formato
    doc.addImage(img.src, 'JPEG', 155 , 217, 30, 10);//BARCODE
    doc.setFontSize(4);
    doc.text("fecha",198,244); //Fecha
    doc.setFontSize(5);
    doc.text("O.S",198,251)//O.S
    doc.text("N.I.P",198,258)//N.I.P
    doc.setFontSize(6);
    doc.text("Número de guía",110,248) //guía
    doc.text("Remitente",110,254) //NOmbre Remitente
    doc.setFontSize(5);
    doc.text("Destinatario",110,264) //NOmbre destinatario
    doc.text("direccion",110,266) //direccion destinatario
    doc.text("telefono",110,268) //telefono destinatario
    doc.text("ciudad",110,270) //ciudad destinatario

    doc.setFontSize(8);
    doc.text("Nombre remitente",134,243) //Nombre remitente
    doc.text("Nombre destinatario",134,247) //Nombre Destinatario
    doc.text("Direccion",134,250) //Direccion destinatario
    doc.text("Telefono",134,253) //telefono destinatario
    doc.text("Ciudad",134,256) //ciudad destinatario

    doc.save('guía masiva.pdf');
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
