<template>
  <div id="app">
    <div id="nav">
      <button @click="download">Download PDF</button>
      <button @click="downloadMasiva">Download Masiva</button>
      <button @click="informe">Informes</button>
    </div>
    <div ref="content">
      <img id="code39" v-if="code==null" />
    </div>
  </div>
</template>
<script>
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { imgDataMasivo, credito_contado } from "./masivo";
import { logo } from "./logo";
export default {
  data() {
    return {
      code: null,
      datas: [
        {
          guie: "1234092125",
          ramitente: "Mauricio Maldonado",
          destinatario: "Lourdes Barreto",
          direccion: "calle 21 # 26 72",
          telefono: "3012345678",
          ciudad: "BARRANQUILLA",
          fecha: "21-07-2020",
          os: "2345",
          nip: "1"
        },
        {
          guie: "1234092126",
          ramitente: "Mauricio Maldonado",
          destinatario: "Lourdes Barreto",
          direccion: "calle 21 # 26 72",
          telefono: "3012345678",
          ciudad: "BARRANQUILLA",
          fecha: "21-07-2020",
          os: "2345",
          nip: "1"
        },
        {
          guie: "1234092127",
          ramitente: "Mauricio Maldonado",
          destinatario: "Lourdes Barreto",
          direccion: "calle 21 # 26 72",
          telefono: "3012345678",
          ciudad: "BARRANQUILLA",
          fecha: "21-07-2020",
          os: "2345",
          nip: "1"
        },
        {
          guie: "1234092128",
          ramitente: "Mauricio Maldonado",
          destinatario: "Lourdes Barreto",
          direccion: "calle 21 # 26 72",
          telefono: "3012345678",
          ciudad: "BARRANQUILLA",
          fecha: "21-07-2020",
          os: "2345",
          nip: "1"
        },
        {
          guie: "1234092129",
          ramitente: "Mauricio Maldonado",
          destinatario: "Lourdes Barreto",
          direccion: "calle 21 # 26 72",
          telefono: "3012345678",
          ciudad: "BARRANQUILLA",
          fecha: "21-07-2020",
          os: "2345",
          nip: "1"
        },
        {
          guie: "1234092130",
          ramitente: "Mauricio Maldonado",
          destinatario: "Lourdes Barreto",
          direccion: "calle 21 # 26 72",
          telefono: "3012345678",
          ciudad: "BARRANQUILLA",
          fecha: "21-07-2020",
          os: "2345",
          nip: "1"
        },
        {
          guie: "1234092131",
          ramitente: "Mauricio Maldonado",
          destinatario: "Lourdes Barreto",
          direccion: "calle 21 # 26 72",
          telefono: "3012345678",
          ciudad: "BARRANQUILLA",
          fecha: "21-07-2020",
          os: "2345",
          nip: "1"
        },
        {
          guie: "1234092132",
          ramitente: "Mauricio Maldonado",
          destinatario: "Lourdes Barreto",
          direccion: "calle 21 # 26 72",
          telefono: "3012345678",
          ciudad: "BARRANQUILLA",
          fecha: "21-07-2020",
          os: "2345",
          nip: "1"
        },
        {
          guie: "1234092133",
          ramitente: "Mauricio Maldonado",
          destinatario: "Lourdes Barreto",
          direccion: "calle 21 # 26 72",
          telefono: "3012345678",
          ciudad: "BARRANQUILLA",
          fecha: "21-07-2020",
          os: "2345",
          nip: "1"
        },
        {
          guie: "1234092134",
          ramitente: "Mauricio Maldonado",
          destinatario: "Lourdes Barreto",
          direccion: "calle 21 # 26 72",
          telefono: "3012345678",
          ciudad: "BARRANQUILLA",
          fecha: "21-07-2020",
          os: "2345",
          nip: "1"
        },
        {
          guie: "1234092135",
          ramitente: "Mauricio Maldonado",
          destinatario: "Lourdes Barreto",
          direccion: "calle 21 # 26 72",
          telefono: "3012345678",
          ciudad: "BARRANQUILLA",
          fecha: "21-07-2020",
          os: "2345",
          nip: "1"
        },
        {
          guie: "1234092136",
          ramitente: "Mauricio Maldonado",
          destinatario: "Lourdes Barreto",
          direccion: "calle 21 # 26 72",
          telefono: "3012345678",
          ciudad: "BARRANQUILLA",
          fecha: "21-07-2020",
          os: "2345",
          nip: "1"
        },
        {
          guie: "1234092137",
          ramitente: "Mauricio Maldonado",
          destinatario: "Lourdes Barreto",
          direccion: "calle 21 # 26 72",
          telefono: "3012345678",
          ciudad: "BARRANQUILLA",
          fecha: "21-07-2020",
          os: "2345",
          nip: "1"
        },
        {
          guie: "1234092138",
          ramitente: "Mauricio Maldonado",
          destinatario: "Lourdes Barreto",
          direccion: "calle 21 # 26 72",
          telefono: "3012345678",
          ciudad: "BARRANQUILLA",
          fecha: "21-07-2020",
          os: "2345",
          nip: "1"
        },
        {
          guie: "1234092139",
          ramitente: "Mauricio Maldonado",
          destinatario: "Lourdes Barreto",
          direccion: "calle 21 # 26 72",
          telefono: "3012345678",
          ciudad: "BARRANQUILLA",
          fecha: "21-07-2020",
          os: "2345",
          nip: "1"
        },
        {
          guie: "1234092140",
          ramitente: "Mauricio Maldonado",
          destinatario: "Lourdes Barreto",
          direccion: "calle 21 # 26 72",
          telefono: "3012345678",
          ciudad: "BARRANQUILLA",
          fecha: "21-07-2020",
          os: "2345",
          nip: "1"
        },
        {
          guie: "1234092141",
          ramitente: "Mauricio Maldonado",
          destinatario: "Lourdes Barreto",
          direccion: "calle 21 # 26 72",
          telefono: "3012345678",
          ciudad: "BARRANQUILLA",
          fecha: "21-07-2020",
          os: "2345",
          nip: "1"
        },
        {
          guie: "1234092142",
          ramitente: "Mauricio Maldonado",
          destinatario: "Lourdes Barreto",
          direccion: "calle 21 # 26 72",
          telefono: "3012345678",
          ciudad: "BARRANQUILLA",
          fecha: "21-07-2020",
          os: "2345",
          nip: "1"
        },
        {
          guie: "1234092143",
          ramitente: "Mauricio Maldonado",
          destinatario: "Lourdes Barreto",
          direccion: "calle 21 # 26 72",
          telefono: "3012345678",
          ciudad: "BARRANQUILLA",
          fecha: "21-07-2020",
          os: "2345",
          nip: "1"
        },
        {
          guie: "1234092144",
          ramitente: "Mauricio Maldonado",
          destinatario: "Lourdes Barreto",
          direccion: "calle 21 # 26 72",
          telefono: "3012345678",
          ciudad: "BARRANQUILLA",
          fecha: "21-07-2020",
          os: "2345",
          nip: "1"
        },
        {
          guie: "1234092145",
          ramitente: "Mauricio Maldonado",
          destinatario: "Lourdes Barreto",
          direccion: "calle 21 # 26 72",
          telefono: "3012345678",
          ciudad: "BARRANQUILLA",
          fecha: "21-07-2020",
          os: "2345",
          nip: "1"
        },
        {
          guie: "1234092146",
          ramitente: "Mauricio Maldonado",
          destinatario: "Lourdes Barreto",
          direccion: "calle 21 # 26 72",
          telefono: "3012345678",
          ciudad: "BARRANQUILLA",
          fecha: "21-07-2020",
          os: "2345",
          nip: "1"
        },
        {
          guie: "1234092147",
          ramitente: "Mauricio Maldonado",
          destinatario: "Lourdes Barreto",
          direccion: "calle 21 # 26 72",
          telefono: "3012345678",
          ciudad: "BARRANQUILLA",
          fecha: "21-07-2020",
          os: "2345",
          nip: "1"
        },
        {
          guie: "1234092127",
          ramitente: "Mauricio Maldonado",
          destinatario: "Lourdes Barreto",
          direccion: "calle 21 # 26 72",
          telefono: "3012345678",
          ciudad: "BARRANQUILLA",
          fecha: "21-07-2020",
          os: "2345",
          nip: "1"
        },
        {
          guie: "1234092148",
          ramitente: "Mauricio Maldonado",
          destinatario: "Lourdes Barreto",
          direccion: "calle 21 # 26 72",
          telefono: "3012345678",
          ciudad: "BARRANQUILLA",
          fecha: "21-07-2020",
          os: "2345",
          nip: "1"
        },
        {
          guie: "1234092149",
          ramitente: "Mauricio Maldonado",
          destinatario: "Lourdes Barreto",
          direccion: "calle 21 # 26 72",
          telefono: "3012345678",
          ciudad: "BARRANQUILLA",
          fecha: "21-07-2020",
          os: "2345",
          nip: "1"
        },
        {
          guie: "1234092150",
          ramitente: "Mauricio Maldonado",
          destinatario: "Lourdes Barreto",
          direccion: "calle 21 # 26 72",
          telefono: "3012345678",
          ciudad: "BARRANQUILLA",
          fecha: "21-07-2020",
          os: "2345",
          nip: "1"
        },
        {
          guie: "1234092151",
          ramitente: "Mauricio Maldonado",
          destinatario: "Lourdes Barreto",
          direccion: "calle 21 # 26 72",
          telefono: "3012345678",
          ciudad: "BARRANQUILLA",
          fecha: "21-07-2020",
          os: "2345",
          nip: "1"
        },
        {
          guie: "1234092152",
          ramitente: "Mauricio Maldonado",
          destinatario: "Lourdes Barreto",
          direccion: "calle 21 # 26 72",
          telefono: "3012345678",
          ciudad: "BARRANQUILLA",
          fecha: "21-07-2020",
          os: "2345",
          nip: "1"
        },
        {
          guie: "1234092153",
          ramitente: "Mauricio Maldonado",
          destinatario: "Lourdes Barreto",
          direccion: "calle 21 # 26 72",
          telefono: "3012345678",
          ciudad: "BARRANQUILLA",
          fecha: "21-07-2020",
          os: "2345",
          nip: "1"
        },
        {
          guie: "1234092154",
          ramitente: "Mauricio Maldonado",
          destinatario: "Lourdes Barreto",
          direccion: "calle 21 # 26 72",
          telefono: "3012345678",
          ciudad: "BARRANQUILLA",
          fecha: "21-07-2020",
          os: "2345",
          nip: "1"
        },
        {
          guie: "1234092155",
          ramitente: "Mauricio Maldonado",
          destinatario: "Lourdes Barreto",
          direccion: "calle 21 # 26 72",
          telefono: "3012345678",
          ciudad: "BARRANQUILLA",
          fecha: "21-07-2020",
          os: "2345",
          nip: "1"
        },
        {
          guie: "1234092156",
          ramitente: "Mauricio Maldonado",
          destinatario: "Lourdes Barreto",
          direccion: "calle 21 # 26 72",
          telefono: "3012345678",
          ciudad: "BARRANQUILLA",
          fecha: "21-07-2020",
          os: "2345",
          nip: "1"
        },
        {
          guie: "1234092157",
          ramitente: "Mauricio Maldonado",
          destinatario: "Lourdes Barreto",
          direccion: "calle 21 # 26 72",
          telefono: "3012345678",
          ciudad: "BARRANQUILLA",
          fecha: "21-07-2020",
          os: "2345",
          nip: "1"
        },
        {
          guie: "1234092158",
          ramitente: "Mauricio Maldonado",
          destinatario: "Lourdes Barreto",
          direccion: "calle 21 # 26 72",
          telefono: "3012345678",
          ciudad: "BARRANQUILLA",
          fecha: "21-07-2020",
          os: "2345",
          nip: "1"
        },
        {
          guie: "1234092159",
          ramitente: "Mauricio Maldonado",
          destinatario: "Lourdes Barreto",
          direccion: "calle 21 # 26 72",
          telefono: "3012345678",
          ciudad: "BARRANQUILLA",
          fecha: "21-07-2020",
          os: "2345",
          nip: "1"
        },
        {
          guie: "1234092160",
          ramitente: "Mauricio Maldonado",
          destinatario: "Lourdes Barreto",
          direccion: "calle 21 # 26 72",
          telefono: "3012345678",
          ciudad: "BARRANQUILLA",
          fecha: "21-07-2020",
          os: "2345",
          nip: "1"
        },
        {
          guie: "1234092161",
          ramitente: "Mauricio Maldonado",
          destinatario: "Lourdes Barreto",
          direccion: "calle 21 # 26 72",
          telefono: "3012345678",
          ciudad: "BARRANQUILLA",
          fecha: "21-07-2020",
          os: "2345",
          nip: "1"
        },
        {
          guie: "1234092162",
          ramitente: "Mauricio Maldonado",
          destinatario: "Lourdes Barreto",
          direccion: "calle 21 # 26 72",
          telefono: "3012345678",
          ciudad: "BARRANQUILLA",
          fecha: "21-07-2020",
          os: "2345",
          nip: "1"
        }
      ]
    };
  },
  methods: {
    download() {
      JsBarcode("#code39", "12345678901237", {
        format: "CODE39"
      });

      const img = document.querySelector("img#code39");
      var imgData = credito_contado;

      var doc = new jsPDF();

      doc.addImage(imgData, "JPEG", 5, 15, 205, 270);
      doc.setFont("arial"); //tipo de letra
      //********************Destinatario*************************
      doc.addImage(img.src, "JPEG", 130, 16, 40, 15); //BARCODE
      //Tipo pago
      doc.setFontSize(8);
      doc.text("Crédito", 94, 30); //Tipo pago
      doc.setFontSize(6);
      doc.text("Fecha", 43, 36); //Fecha envío remitente
      doc.text("Lugar", 78, 36); //Lugar origen remitente

      doc.text("Fecha", 120, 36); //Fecha envío destinatario
      doc.text("Lugar", 163, 36); //Lugar origen destinatario
      doc.setFontSize(7);
      doc.text("OS", 175, 32); //OS

      doc.text("Nombre remitente", 23, 42); //Nombre remitente
      doc.text("NIT", 23, 45); //  NIT remitente
      doc.text("direccion", 23, 48); //direccion remitente
      doc.text("teléfono", 23, 51); //telefono remitente
      doc.text("lugar", 23, 54); //lugar remitente
      doc.text("cod postal", 92, 58); //Codigo postal remitente

      doc.text("Nombre destinatario", 110, 42); //Nombre destinatario
      doc.text("NIT", 110, 45); //  NIT destinatario
      doc.text("direccion", 110, 48); //direccion destinatario
      doc.text("teléfono", 110, 51); //telefono destinatario
      doc.text("lugar", 110, 54); //lugar destinatario
      doc.text("cod postal", 180, 58); //Codigo postal destinatario

      //datos envío
      doc.setFontSize(6);
      doc.text("1", 62, 66); //cantidad
      doc.text("1", 62, 71); //peso
      doc.text("1", 62, 76); //volumen
      doc.text("1", 62, 81); //valor asegurado
      doc.text("1", 62, 86); //valor social

      //Observación
      doc.setFontSize(5);
      doc.text("Observaciones", 119, 66); //Observaciones

      //********************Prueba de entrega*************************
      doc.addImage(img.src, "JPEG", 130, 105, 40, 15); //BARCODE

      //Tipo pago
      doc.setFontSize(8);
      doc.text("Crédito", 94, 119); //Tipo pago
      doc.setFontSize(6);
      doc.text("Fecha", 43, 125); //Fecha envío remitente
      doc.text("Lugar", 78, 125); //Lugar origen remitente

      doc.text("Fecha", 120, 125); //Fecha envío destinatario
      doc.text("Lugar", 163, 125); //Lugar origen destinatario
      doc.setFontSize(7);
      doc.text("OS", 175, 121); //OS

      doc.text("Nombre remitente", 23, 131); //Nombre remitente
      doc.text("NIT", 23, 134); //  NIT remitente
      doc.text("direccion", 23, 137); //direccion remitente
      doc.text("teléfono", 23, 140); //telefono remitente
      doc.text("lugar", 23, 143); //lugar remitente
      doc.text("cod postal", 92, 148); //Codigo postal remitente

      doc.text("Nombre destinatario", 110, 131); //Nombre destinatario
      doc.text("NIT", 110, 134); //  NIT destinatario
      doc.text("direccion", 110, 137); //direccion destinatario
      doc.text("teléfono", 110, 140); //telefono destinatario
      doc.text("lugar", 110, 143); //lugar destinatario
      doc.text("cod postal", 180, 148); //Codigo postal destinatario

      //datos envío
      doc.setFontSize(6);
      doc.text("1", 62, 156); //cantidad
      doc.text("1", 62, 161); //peso
      doc.text("1", 62, 166); //volumen
      doc.text("1", 62, 171); //valor asegurado
      doc.text("1", 62, 176); //valor social

      //Observación
      doc.setFontSize(5);
      doc.text("Observaciones", 119, 156); //Observaciones

      //********************Remitente*************************
      doc.addImage(img.src, "JPEG", 130, 196, 40, 15); //BARCODE

      //Tipo pago
      doc.setFontSize(8);
      doc.text("Crédito", 94, 211); //Tipo pago
      doc.setFontSize(6);
      doc.text("Fecha", 43, 217); //Fecha envío remitente
      doc.text("Lugar", 78, 217); //Lugar origen remitente

      doc.text("Fecha", 120, 217); //Fecha envío destinatario
      doc.text("Lugar", 163, 217); //Lugar origen destinatario
      doc.setFontSize(7);
      doc.text("OS", 175, 213); //OS

      doc.text("Nombre remitente", 23, 223); //Nombre remitente
      doc.text("NIT", 23, 226); //  NIT remitente
      doc.text("direccion", 23, 229); //direccion remitente
      doc.text("teléfono", 23, 232); //telefono remitente
      doc.text("lugar", 23, 235); //lugar remitente
      doc.text("cod postal", 92, 239); //Codigo postal remitente

      doc.text("Nombre destinatario", 110, 223); //Nombre destinatario
      doc.text("NIT", 110, 226); //  NIT destinatario
      doc.text("direccion", 110, 229); //direccion destinatario
      doc.text("teléfono", 110, 232); //telefono destinatario
      doc.text("lugar", 110, 235); //lugar destinatario
      doc.text("cod postal", 180, 239); //Codigo postal destinatario

      //datos envío
      doc.setFontSize(6);
      doc.text("1", 62, 248); //cantidad
      doc.text("1", 62, 253); //peso
      doc.text("1", 62, 258); //volumen
      doc.text("1", 62, 263); //valor asegurado
      doc.text("1", 62, 268); //valor social

      //Observación
      doc.setFontSize(5);
      doc.text("Observaciones", 119, 248); //Observaciones

      doc.save("guía crédito_contado.pdf");
      this.code = "creado";
      vm.$forceUpdate();
    },
    print() {
      let datas = this.datas;
      console.log("DATOS ", datas);
      console.log("CANTIDAD ", datas.length);
      for (let i = 0; i < datas.length; i++) {
        this.downloadMasiva(datas[i], i);
      }
    },

    downloadMasiva() {
      let cant = 1;
      let tam = this.datas.length;
      console.log(tam);
      tam = tam - 1;
      console.log(tam);
      let page = 0;
      let j = 0;
      const doc = new jsPDF();
      for (let i = 0; i < this.datas.length; i++) {
        JsBarcode("#code39", this.datas[i].guie, {
          format: "CODE39"
        });

        const img = document.querySelector("img#code39");
        var imgData = imgMasivo;
        if (j == 0) {
          //Primer formato
          if (page != 0) {
            doc.addPage();
          }
          doc.addImage(imgData, "JPEG", 3, 12, 102, 68);
          doc.setFont("arial"); //tipo de letra
          doc.addImage(img.src, "JPEG", 50, 16, 30, 10); //BARCODE
          doc.setFontSize(6);
          doc.text(this.datas[i].fecha, 92, 42); //Fecha
          doc.setFontSize(5);
          doc.text(this.datas[i].os, 93, 48); //O.S
          doc.text(cant + "", 93, 55); //N.I.P
          doc.setFontSize(6);
          doc.text(this.datas[i].guie, 5.5, 45); //guía
          doc.setFontSize(5);
          doc.text(this.datas[i].ramitente, 5.5, 51); //NOmbre Remitente
          doc.text("01245", 11, 56.5); //codpostal Remitente
          doc.text(this.datas[i].destinatario, 5.5, 61); //NOmbre destinatario
          doc.text(this.datas[i].direccion, 5.5, 63); //direccion destinatario
          doc.text(this.datas[i].telefono, 5.5, 65); //telefono destinatario
          doc.text(this.datas[i].ciudad, 5.5, 67); //ciudad destinatario
          doc.text("01245", 11, 71); //codpostal destinatario

          doc.setFontSize(8);
          doc.text(this.datas[i].ramitente, 30, 40); //Nombre remitente
          doc.text(this.datas[i].destinatario, 30, 45); //Nombre Destinatario
          doc.text(this.datas[i].direccion, 30, 48); //Direccion destinatario
          doc.text(this.datas[i].telefono, 30, 51); //telefono destinatario
          doc.text(this.datas[i].ciudad, 30, 54); //ciudad destinatario
          doc.setFontSize(7);
          doc.text("012535", 78, 56.5); //Codpostal destinatario
          j++;
          cant++;
          if (i == tam) {
            doc.save("guía masiva.pdf");
          }
        } else if (j == 1) {
          //Segundo formato
          doc.addImage(imgData, "JPEG", 105, 12, 102, 68);
          doc.setFont("arial"); //tipo de letra
          doc.addImage(img.src, "JPEG", 155, 16, 30, 10); //BARCODE
          doc.setFontSize(6);
          doc.text(this.datas[i].fecha, 194, 42); //Fecha
          doc.setFontSize(5);
          doc.text(this.datas[i].os, 195, 48); //O.S
          doc.text(cant + "", 195, 55); //N.I.P
          doc.setFontSize(6);
          doc.text(this.datas[i].guie, 108, 45); //guía
          doc.setFontSize(5);
          doc.text(this.datas[i].ramitente, 108, 51); //NOmbre Remitente
          doc.text("01245", 113.5, 56.5); //codpostal Remitente
          doc.text(this.datas[i].destinatario, 108, 61); //NOmbre destinatario
          doc.text(this.datas[i].direccion, 108, 63); //direccion destinatario
          doc.text(this.datas[i].telefono, 108, 65); //telefono destinatario
          doc.text(this.datas[i].ciudad, 108, 67); //ciudad destinatario
          doc.text("01245", 113.5, 71); //codpostal destinatario

          doc.setFontSize(8);
          doc.text(this.datas[i].ramitente, 133, 40); //Nombre remitente
          doc.text(this.datas[i].destinatario, 133, 45); //Nombre Destinatario
          doc.text(this.datas[i].direccion, 133, 48); //Direccion destinatario
          doc.text(this.datas[i].telefono, 133, 51); //telefono destinatario
          doc.text(this.datas[i].ciudad, 133, 54); //ciudad destinatario
          doc.setFontSize(7);
          doc.text("012535", 180, 56.5); //Codpostal destinatario
          j++;
          cant++;
          if (i == tam) {
            doc.save("guía masiva.pdf");
          }
        } else if (j == 2) {
          //tercer formato
          doc.addImage(imgData, "JPEG", 3, 80, 102, 68);
          doc.setFont("arial"); //tipo de letra
          doc.addImage(img.src, "JPEG", 50, 83, 30, 10); //BARCODE
          doc.setFontSize(6);
          doc.text(this.datas[i].fecha, 92, 110); //Fecha
          doc.setFontSize(5);
          doc.text(this.datas[i].os, 93, 116); //O.S
          doc.text(cant + "", 93, 123); //N.I.P
          doc.setFontSize(6);
          doc.text(this.datas[i].guie, 5.5, 113); //guía
          doc.setFontSize(5);
          doc.text(this.datas[i].ramitente, 5.5, 119); //NOmbre Remitente
          doc.text("01245", 11, 124.5); //codpostal Remitente
          doc.text(this.datas[i].destinatario, 5.5, 129); //NOmbre destinatario
          doc.text(this.datas[i].destinatario, 5.5, 131); //direccion destinatario
          doc.text(this.datas[i].telefono, 5.5, 133); //telefono destinatario
          doc.text(this.datas[i].ciudad, 5.5, 135); //ciudad destinatario
          doc.text("01245", 11, 139); //codpostal destinatario

          doc.setFontSize(8);
          doc.text(this.datas[i].ramitente, 30, 108); //Nombre remitente
          doc.text(this.datas[i].destinatario, 30, 113); //Nombre Destinatario
          doc.text(this.datas[i].direccion, 30, 116); //Direccion destinatario
          doc.text(this.datas[i].telefono, 30, 119); //telefono destinatario
          doc.text(this.datas[i].ciudad, 30, 122); //ciudad destinatario
          doc.text("012535", 78, 124.5); //Codpostal destinatario
          j++;
          cant++;
          if (i == tam) {
            doc.save("guía masiva.pdf");
          }
        } else if (j == 3) {
          //cuarto formato
          doc.addImage(imgData, "JPEG", 105, 80, 102, 68);
          doc.setFont("arial"); //tipo de letra
          doc.addImage(img.src, "JPEG", 155, 83, 30, 10); //BARCODE
          doc.setFontSize(6);
          doc.text(this.datas[i].fecha, 194, 110); //Fecha
          doc.setFontSize(5);
          doc.text(this.datas[i].os, 195, 116); //O.S
          doc.text(cant + "", 195, 123); //N.I.P
          doc.setFontSize(6);
          doc.text(this.datas[i].guie, 108, 113); //guía
          doc.setFontSize(5);
          doc.text(this.datas[i].ramitente, 108, 119); //NOmbre Remitente
          doc.text("01245", 113.5, 124.5); //codpostal Remitente
          doc.text(this.datas[i].destinatario, 108, 129); //NOmbre destinatario
          doc.text(this.datas[i].direccion, 108, 131); //direccion destinatario
          doc.text(this.datas[i].telefono, 108, 133); //telefono destinatario
          doc.text(this.datas[i].ciudad, 108, 135); //ciudad destinatario
          doc.text("01245", 113.5, 139); //codpostal destinatario
          doc.setFontSize(8);
          doc.text(this.datas[i].ramitente, 133, 108); //Nombre remitente
          doc.text(this.datas[i].destinatario, 133, 113); //Nombre Destinatario
          doc.text(this.datas[i].direccion, 133, 116); //Direccion destinatario
          doc.text(this.datas[i].telefono, 133, 119); //telefono destinatario
          doc.text(this.datas[i].ciudad, 133, 122); //ciudad destinatario
          doc.text("012535", 180, 124.5); //Codpostal destinatario
          j++;
          cant++;
          if (i == tam) {
            doc.save("guía masiva.pdf");
          }
        } else if (j == 4) {
          //quinto formato
          doc.addImage(imgData, "JPEG", 3, 148, 102, 68);
          doc.setFont("arial"); //tipo de letra
          doc.addImage(img.src, "JPEG", 50, 151, 30, 10); //BARCODE
          doc.setFontSize(6);
          doc.text(this.datas[i].fecha, 92, 178); //Fecha
          doc.setFontSize(5);
          doc.text(this.datas[i].os, 93, 184); //O.S
          doc.text(cant + "", 93, 191); //N.I.P
          doc.setFontSize(6);
          doc.text(this.datas[i].guie, 5.5, 181); //guía
          doc.setFontSize(5);
          doc.text(this.datas[i].ramitente, 5.5, 187); //NOmbre Remitente
          doc.text("01245", 11, 192.5); //codpostal Remitente
          doc.text(this.datas[i].destinatario, 5.5, 197); //NOmbre destinatario
          doc.text(this.datas[i].direccion, 5.5, 199); //direccion destinatario
          doc.text(this.datas[i].telefono, 5.5, 201); //telefono destinatario
          doc.text(this.datas[i].ciudad, 5.5, 203); //ciudad destinatario
          doc.text("01245", 11, 207); //codpostal destinatario
          doc.setFontSize(8);
          doc.text(this.datas[i].ramitente, 30, 176); //Nombre remitente
          doc.text(this.datas[i].destinatario, 30, 181); //Nombre Destinatario
          doc.text(this.datas[i].direccion, 30, 184); //Direccion destinatario
          doc.text(this.datas[i].telefono, 30, 187); //telefono destinatario
          doc.text(this.datas[i].ciudad, 30, 190); //ciudad destinatario
          doc.text("012535", 78, 192.5); //Codpostal destinatario
          j++;
          cant++;
          if (i == tam) {
            doc.save("guía masiva.pdf");
          }
        } else if (j == 5) {
          //sexto fromato
          doc.addImage(imgData, "JPEG", 105, 148, 102, 68);
          doc.setFont("arial"); //tipo de letra
          doc.addImage(img.src, "JPEG", 155, 150, 30, 10); //BARCODE
          doc.setFontSize(6);
          doc.text(this.datas[i].fecha, 194, 178); //Fecha
          doc.setFontSize(5);
          doc.text(this.datas[i].os, 195, 184); //O.S
          doc.text(cant + "", 195, 191); //N.I.P
          doc.setFontSize(6);
          doc.text(this.datas[i].guie, 108, 181); //guía
          doc.setFontSize(5);
          doc.text(this.datas[i].ramitente, 108, 187); //NOmbre Remitente
          doc.text("01245", 113.5, 192.5); //codpostal Remitente
          doc.text(this.datas[i].destinatario, 108, 197); //NOmbre destinatario
          doc.text(this.datas[i].direccion, 108, 199); //direccion destinatario
          doc.text(this.datas[i].telefono, 108, 201); //telefono destinatario
          doc.text(this.datas[i].ciudad, 108, 203); //ciudad destinatario
          doc.text("01245", 113.5, 207); //codpostal destinatario
          doc.setFontSize(8);
          doc.text(this.datas[i].ramitente, 133, 176); //Nombre remitente
          doc.text(this.datas[i].destinatario, 133, 181); //Nombre Destinatario
          doc.text(this.datas[i].direccion, 133, 184); //Direccion destinatario
          doc.text(this.datas[i].telefono, 133, 187); //telefono destinatario
          doc.text(this.datas[i].ciudad, 133, 190); //ciudad destinatario
          doc.text("012535", 180, 192.5); //Codpostal destinatario
          j++;
          cant++;
          if (i == tam) {
            doc.save("guía masiva.pdf");
          }
        } else if (j == 6) {
          //septimo formato
          doc.addImage(imgData, "JPEG", 3, 216, 102, 68);
          doc.setFont("arial"); //tipo de letra
          doc.addImage(img.src, "JPEG", 50, 220, 30, 10); //BARCODE
          doc.setFontSize(6);
          doc.text(this.datas[i].fecha, 92, 246); //Fecha
          doc.setFontSize(5);
          doc.text(this.datas[i].os, 93, 253); //O.S
          doc.text(cant + "", 93, 260); //N.I.P
          doc.setFontSize(6);
          doc.text(this.datas[i].guie, 5.5, 250); //guía
          doc.setFontSize(5);
          doc.text(this.datas[i].ramitente, 5.5, 256); //NOmbre Remitente
          doc.text("01245", 11, 261); //codpostal Remitente
          doc.text(this.datas[i].destinatario, 5.5, 266); //NOmbre destinatario
          doc.text(this.datas[i].direccion, 5.5, 268); //direccion destinatario
          doc.text(this.datas[i].telefono, 5.5, 270); //telefono destinatario
          doc.text(this.datas[i].ciudad, 5.5, 272); //ciudad destinatario
          doc.text("01245", 11, 275.5); //codpostal destinatario
          doc.setFontSize(8);
          doc.text(this.datas[i].ramitente, 30, 245); //Nombre remitente
          doc.text(this.datas[i].destinatario, 30, 249); //Nombre Destinatario
          doc.text(this.datas[i].direccion, 30, 252); //Direccion destinatario
          doc.text(this.datas[i].telefono, 30, 255); //telefono destinatario
          doc.text(this.datas[i].ciudad, 30, 258); //ciudad destinatario
          doc.text("012535", 78, 260.5); //Codpostal destinatario
          j++;
          cant++;
          if (i == tam) {
            doc.save("guía masiva.pdf");
          }
        } else if (j == 7) {
          //octavo formato
          doc.addImage(imgData, "JPEG", 105, 216, 102, 68);
          doc.setFont("arial"); //tipo de letra
          doc.addImage(img.src, "JPEG", 155, 220, 30, 10); //BARCODE
          doc.setFontSize(6);
          doc.text(this.datas[i].fecha, 194, 246); //Fecha
          doc.setFontSize(5);
          doc.text(this.datas[i].os, 195, 253); //O.S
          doc.text(cant + "", 195, 260); //N.I.P
          doc.setFontSize(6);
          doc.text(this.datas[i].guie, 108, 250); //guía
          doc.setFontSize(5);
          doc.text(this.datas[i].ramitente, 108, 256); //NOmbre Remitente
          doc.text("01245", 113.5, 261); //codpostal Remitente
          doc.text(this.datas[i].destinatario, 108, 266); //NOmbre destinatario
          doc.text(this.datas[i].direccion, 108, 268); //direccion destinatario
          doc.text(this.datas[i].telefono, 108, 270); //telefono destinatario
          doc.text(this.datas[i].ciudad, 108, 272); //ciudad destinatario
          doc.text("01245", 113.5, 275.5); //codpostal destinatario
          doc.setFontSize(8);
          doc.text(this.datas[i].ramitente, 133, 245); //Nombre remitente
          doc.text(this.datas[i].destinatario, 133, 249); //Nombre Destinatario
          doc.text(this.datas[i].direccion, 133, 252); //Direccion destinatario
          doc.text(this.datas[i].telefono, 133, 255); //telefono destinatario
          doc.text(this.datas[i].ciudad, 133, 258); //ciudad destinatario
          doc.text("012535", 180, 260.5); //Codpostal destinatario
          cant++;
          j = 0;
          page++;
          if (i == tam) {
            doc.save("guía masiva.pdf");
          }
        }
      }
    },
    informe() {
      JsBarcode("#code39", "12345678901237", {
        format: "CODE39"
      });

      const img = document.querySelector("img#code39");
      var imgData = logo;

      var doc = new jsPDF();
      //Encabezado
      doc.addImage(imgData, "JPEG", 40, 5, 20, 13);//logo
      doc.setFontSize("12")
      doc.text("INFORME DE GESTIÓN",75,13)
      doc.text("No.",140,13)
      doc.addImage(img.src, "JPEG",147, 5, 35, 10); //BARCODE
      doc.setFontSize("8")
      doc.text("18/01/2020",175,24)
      //Info
      doc.roundedRect(15, 25, 180, 20, 1.5, 1.5);//Rectángulo externo
      doc.roundedRect(16, 26, 178, 18, 1.5, 1.5);//Rectánguo interno
      
      doc.save("informe.pdf");
    }
  }
};
</script>

<style>
.pdf {
  background: url("https://res.cloudinary.com/lomaju/image/upload/v1584237363/Gesco/guiaContado_gf4imb.jpg");
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
