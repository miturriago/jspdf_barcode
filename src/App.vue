<template>
  <div id="app">
    <div id="nav">
      <button @click="download">Download PDF</button>
      <button @click="downloadMasiva">Download Masiva</button>
      <button @click="informe">Informes</button>
      <button @click="docLib">Doc. Liberación</button>
      <button @click="loteEntrega">Lote entrega</button>
      <button @click="manifiesto">Manifiesto</button>
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
      var imgDat = logo;
      var doc = new jsPDF();
      doc.setFont("arial"); //tipo de letra
      doc.addImage(imgDat, "JPEG", 40, 5, 15, 8); //logo
      doc.setFontSize(8);
      doc.text("Mensajería & Carga", 36, 16);
      doc.setFontSize(6);
      doc.setFontType("bold");
      doc.text("Lic. MINTIC RPOSTAL 0356", 35, 18);
      doc.text("Resol. 876 del 29/04/2014", 36, 20);
      doc.text("Res. MinTransporte No. 0067 de 01/09/2016", 30, 22);
      doc.text("Calle 63B No. 31 - 102", 37, 24);
      doc.text("www.libertadexpress.com", 35, 26);
      doc.text("Factura de" + "\n" + "  Venta No", 125, 16);
      doc.setFontType("");
      //doc.addImage(imgData, "JPEG", 5, 15, 205, 270);
      //********************Destinatario*************************
      doc.addImage(img.src, "JPEG", 145, 6, 40, 15); //BARCODE
      //Tipo pago
      doc.rect(13, 28, 187, 63); //Rectángulo principal
      doc.rect(14, 33.5, 185, 23); //rectángulo de abajo
      doc.rect(14, 58, 34, 16); //FIrma del remitente
      doc.rect(49, 58, 34, 32); //info envío
      doc.rect(50, 59, 32, 5); //Unidades
      doc.rect(50, 65, 32, 5); //Peso
      doc.rect(50, 71, 32, 5); //Volumen
      doc.rect(50, 77, 32, 5); //Vr. Asegurado
      doc.rect(50, 83, 32, 5); //Vr. TOtal
      doc.rect(84, 58, 34, 23); //Recibí a satisfación
      doc.rect(119, 58, 30, 32); //Observaciones
      doc.rect(151, 60, 24, 21); //intento de entrega

      doc.setFontSize(8);
      doc.text("Crédito", 94, 26); //Tipo pago
      doc.setFontSize(6);
      doc.rect(15, 29, 29, 4, "F"); // filled square fecha
      doc.rect(15, 34, 3, 21, "F"); // filled square remitente
      doc.rect(105, 34, 3, 21, "F"); // filled square destinatario
      doc.rect(65, 29, 15, 4, "F"); // filled square origen
      doc.rect(105, 29, 15, 4, "F"); // filled square servicio
      doc.rect(155, 29, 15, 4, "F"); // filled square destino
      doc.rect(77, 51, 12, 4, "F"); // filled square postalOrig
      doc.rect(169, 51, 12, 4, "F"); // filled square postalDest
      doc.rect(151, 57, 48, 3, "F"); // filled square IntentoEntrega
      doc.setFont(); //tipo de letra
      doc.setFontSize(8);
      doc.setTextColor(255);
      doc.setFontType("bold");
      doc.text("Fecha y hora de envío", 16, 32);
      doc.text("Origen", 66, 32);
      doc.text("Servicio", 106, 32);
      doc.text("Destino", 156, 32);
      doc.setFontSize(6);
      doc.text("REMITENTE", 17, 52, 90);
      doc.text("DESTINATARIO", 107, 53, 90);
      doc.setFontSize(5);
      doc.text("COD.POSTAL", 78, 54);
      doc.text("COD.POSTAL", 169, 54);
      doc.text("INTENTO DE ENTREGA", 165, 59);
      doc.setTextColor(0);
      doc.setFontSize(4);
      doc.text(
        "El usuario deja expresa constancia que tuvo" +
          "\n" +
          "conocimiento del contrato que se encuentra publicado" +
          "\n" +
          "en la página web: www.libertadexpres.com y en las" +
          "\n" +
          "carteleras ubicadas en los puntos de ventas, que" +
          "\n" +
          "regula el servicio acordado entre las partes, cuyo" +
          "\n" +
          "contenido clausular acepta expresamente con la" +
          "\n" +
          "suscripción de este documento. Para la presentación " +
          "\n" +
          "de P.Q.R. remítase a nuestra página web " +
          "\n" +
          "www.libertadexpress.com o al PBX (5) 3317700",
        15,
        76
      );
      doc.text(
        "Porque de tal manera amó Dios al mundo, que ha dado " +
          "\n" +
          "a su hijo unigénito para que todo aquel que en " +
          "\n" +
          "Él cree, no se pierda más tenga vida eterna.",
        84,
        85
      );
      doc.setFontSize(6);
      doc.text("Firma del remitente", 15, 60);
      doc.text("Unidades:", 51, 61);
      doc.text("Peso:", 51, 67);
      doc.text("Volumen:", 51, 73);
      doc.text("Vr. Asegurado:", 51, 79);
      doc.text("Vr. Total:", 51, 85);
      doc.text("Recibí a satisfación", 85, 60);
      doc.text("Observaciones en la entrega:", 120, 60);
      doc.setFontType("");
      doc.setFontSize(8);
      doc.text("Fecha", 47, 32); //Fecha envío remitente
      doc.text("Lugar", 82, 32); //Lugar origen remitente

      doc.text("Servicio", 123, 32); //Fecha envío destinatario
      doc.text("Destino", 175, 32); //Lugar origen destinatario
      doc.setFontSize(7);
      doc.text("OS", 175, 27); //OS

      doc.text("Nombre remitente", 23, 38); //Nombre remitente
      doc.text("NIT", 23, 41); //  NIT remitente
      doc.text("direccion", 23, 44); //direccion remitente
      doc.text("teléfono", 23, 47); //telefono remitente
      doc.text("lugar", 23, 50); //lugar remitente
      doc.text("cod postal", 90, 54); //Codigo postal remitente

      doc.text("Nombre destinatario", 110, 38); //Nombre destinatario
      doc.text("NIT", 110, 41); //  NIT destinatario
      doc.text("direccion", 110, 44); //direccion destinatario
      doc.text("teléfono", 110, 47); //telefono destinatario
      doc.text("lugar", 110, 50); //lugar destinatario
      doc.text("cod postal", 182, 54); //Codigo postal destinatario
      doc.line(90, 81, 90, 78); // vertical line
      doc.text("Hora", 92, 76);
      doc.line(98, 81, 98, 78); // vertical line
      doc.text("Día", 100, 76);
      doc.line(105, 81, 105, 78); // vertical line
      doc.text("Mes", 106, 76);
      doc.line(111, 81, 111, 78); // vertical line
      doc.text("Año", 112, 76);

      //datos envío
      doc.setFontSize(6);
      doc.text("1", 65, 63); //cantidad
      doc.text("1", 65, 69); //peso
      doc.text("1", 65, 75); //volumen
      doc.text("1", 65, 81); //valor asegurado
      doc.text("1", 65, 87); //valor social

      //Observación
      doc.setFontSize(5);
      doc.text("Observaciones", 120, 63); //Observaciones

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
      doc.addImage(imgData, "JPEG", 40, 5, 20, 13); //logo
      doc.setFontSize("12");
      doc.text("INFORME DE GESTIÓN", 75, 13);
      doc.text("No.", 140, 13);
      doc.addImage(img.src, "JPEG", 147, 5, 35, 10); //BARCODE
      doc.setFontSize("8");
      doc.text("18/01/2020", 175, 24);
      //Info
      doc.roundedRect(15, 25, 180, 20, 1.5, 1.5); //Rectángulo externo
      doc.roundedRect(16, 26, 178, 18, 1.5, 1.5); //Rectánguo interno
      doc.setFontSize("11");
      doc.text("CLIENTE:", 19, 33);
      doc.text("DIRECCIÓN:", 19, 40);
      doc.text("CENTRO DE COSTO:", 115, 33);
      doc.text("CIUDAD:", 115, 40);
      doc.text("TEL:", 163, 40);
      doc.setFontSize("9");
      doc.text("VIVA HOME", 40, 33); //compañia
      doc.text("DIRECCION", 44, 40); //direccion
      doc.text("MERCADEO", 155, 33); //centro de costo
      doc.text("BARRANQUILLA", 132, 40); //ciudad
      doc.text("3281432098", 173, 40); //tel

      //DATOS
      doc.setFontSize("8");
      doc.text("Entregas efectivas: ", 15, 57);
      doc.text("229", 45, 57); //Cantidad entregas efectivas
      let j = 0,
        x = 15,
        y = 63,
        fil = 0,
        col = 0,
        cant = 233, //Cantidad de efectivas
        cantNov = 33, //Cantidad de novedades
        efec = 0,
        nov = 0;
      //Efectivas
      if ((cant / 8) % 2 != 0) {
        fil = Math.trunc(cant / 8) + 1;
      } else {
        fil = Math.trunc(cant / 8);
      }
      doc.setFontSize("7");
      for (var i = 0; i < fil; i++) {
        x = 15;
        j = 0;
        while (j < 8 && efec < cant) {
          doc.text("1234567890123", x, y);
          x = x + 23;
          j++;
          efec++;
        }
        y = y + 3;
      }
      doc.setFontSize("8");
      y = y + 15;
      doc.text("Novedades: ", 15, y);
      doc.text("33", 30, y); //Cantidad de novedades
      //Novedades
      if ((cantNov / 8) % 2 != 0) {
        fil = Math.trunc(cantNov / 8) + 1;
      } else {
        fil = Math.trunc(cantNov / 8);
      }
      y = y + 6;
      doc.setFontSize("7");
      for (var i = 0; i < fil; i++) {
        x = 15;
        j = 0;
        while (j < 8 && nov < cantNov) {
          doc.text("1234567890123", x, y);
          x = x + 23;
          j++;
          nov++;
        }
        y = y + 3;
      }

      //FIRMAS
      doc.setFontSize(8);
      doc.line(38, 277, 70, 277); // horizontal line
      doc.text("Dpto. de Operaciones", 38, 280, "center");
      doc.line(137, 277, 170, 277); // horizontal line
      doc.text("Firma y sello del cliente", 137, 280, "center");

      doc.save("informe.pdf");
    },
    docLib() {
      var imgData = logo;

      var doc = new jsPDF();
      //Encabezado
      doc.addImage(imgData, "JPEG", 40, 5, 20, 13); //logo
      doc.setFontSize("12");
      doc.text("DOCUMENTO DE LIBERACIÓN", 75, 13);
      doc.text("No.", 144, 13);
      doc.text("DL-001", 152, 13); //codigo
      //Info
      doc.setFontSize("10");
      doc.text("Fecha:", 19, 33);
      doc.text("Operador/Mensajero:", 55, 33);
      doc.text("Generador por:", 100, 33);
      doc.text("Cant:", 160, 33);
      //datos info
      doc.setFontSize("9");
      doc.text("28/01/2020", 32, 33); //Fecha
      doc.text("03", 90, 33); //cod Mensajero
      doc.text("us121323", 130, 33); //Usuario
      doc.text("15000", 180, 33); //cantidad

      //DATOS
      doc.setFontSize("8");
      doc.text("Guías: ", 15, 57);
      let j = 0,
        x = 15,
        y = 63,
        fil = 0,
        col = 0,
        cant = 233, //Cantidad de efectivas
        cantNov = 33, //Cantidad de novedades
        efec = 0,
        nov = 0;
      //Efectivas
      if ((cant / 8) % 2 != 0) {
        fil = Math.trunc(cant / 8) + 1;
      } else {
        fil = Math.trunc(cant / 8);
      }
      doc.setFontSize("7");
      for (var i = 0; i < fil; i++) {
        x = 15;
        j = 0;
        while (j < 8 && efec < cant) {
          doc.text("1234567890123", x, y);
          x = x + 23;
          j++;
          efec++;
        }
        y = y + 3;
      }

      //FIRMAS
      doc.setFontSize(8);
      doc.line(38, 277, 70, 277); // horizontal line
      doc.text(
        "Generador del " + "\n" + "documento de liberacion",
        38,
        280,
        "center"
      );
      doc.line(137, 277, 170, 277); // horizontal line
      doc.text("Quien entrega" + "\n" + "Los envíos", 137, 280, "center");
      doc.save("doclib.pdf");
    },
    loteEntrega() {
      var imgData = logo;

      var doc = new jsPDF();
      //Encabezado
      doc.addImage(imgData, "JPEG", 40, 5, 20, 13); //logo
      doc.setFontSize("12");
      doc.text("LOTE DE ENTREGA", 75, 13);
      doc.text("No.", 144, 13);
      doc.text("L-001", 152, 13); //codigo
      //Info
      doc.setFontSize("10");
      doc.text("Fecha:", 19, 33);
      doc.text("Operador/Mensajero:", 55, 33);
      doc.text("Generador por:", 100, 33);
      doc.text("Cant:", 160, 33);
      //datos info
      doc.setFontSize("9");
      doc.text("28/01/2020", 32, 33); //Fecha
      doc.text("03", 90, 33); //cod Mensajero
      doc.text("us121323", 130, 33); //Usuario
      doc.text("15000", 180, 33); //cantidad

      //DATOS
      doc.setFontSize("8");
      doc.text("Guías: ", 15, 57);
      let j = 0,
        x = 15,
        y = 63,
        fil = 0,
        col = 0,
        cant = 233, //Cantidad de efectivas
        cantNov = 33, //Cantidad de novedades
        efec = 0,
        nov = 0;
      //Efectivas
      if ((cant / 8) % 2 != 0) {
        fil = Math.trunc(cant / 8) + 1;
      } else {
        fil = Math.trunc(cant / 8);
      }
      doc.setFontSize("7");
      for (var i = 0; i < fil; i++) {
        x = 15;
        j = 0;
        while (j < 8 && efec < cant) {
          doc.text("1234567890123", x, y);
          x = x + 23;
          j++;
          efec++;
        }
        y = y + 3;
      }

      //FIRMAS
      doc.setFontSize(8);
      doc.line(38, 277, 70, 277); // horizontal line
      doc.text("Generador del " + "\n" + "Lote de entrega", 38, 280);
      doc.line(137, 277, 170, 277); // horizontal line
      doc.text("Quien entrega" + "\n" + "las pruebas de entrega", 137, 280);
      doc.save("loteEntrega.pdf");
    },
    manifiesto() {
      var imgData = logo;

      var doc = new jsPDF();
      //Encabezado
      doc.addImage(imgData, "JPEG", 40, 5, 20, 13); //logo
      doc.setFontSize("12");
      doc.text("MANIFIESTO", 75, 13);
      doc.text("No.", 144, 13);
      doc.text("L-001", 152, 13); //codigo
      //Info
      doc.setFontSize("10");
      doc.text("Fecha:", 19, 33);
      doc.text("Operador/Mensajero:", 55, 33);
      doc.text("Generador por:", 100, 33);
      doc.text("Cant:", 160, 33);
      //datos info
      doc.setFontSize("9");
      doc.text("28/01/2020", 32, 33); //Fecha
      doc.text("03", 90, 33); //cod Mensajero
      doc.text("us121323", 130, 33); //Usuario
      doc.text("15000", 180, 33); //cantidad

      //DATOS
      doc.setFontSize("8");
      doc.text("Guías: ", 15, 57);
      let j = 0,
        x = 15,
        y = 63,
        fil = 0,
        col = 0,
        cant = 233, //Cantidad de efectivas
        cantNov = 33, //Cantidad de novedades
        efec = 0,
        nov = 0;
      //Efectivas
      if ((cant / 8) % 2 != 0) {
        fil = Math.trunc(cant / 8) + 1;
      } else {
        fil = Math.trunc(cant / 8);
      }
      doc.setFontSize("7");
      for (var i = 0; i < fil; i++) {
        x = 15;
        j = 0;
        while (j < 8 && efec < cant) {
          doc.text("1234567890123", x, y);
          x = x + 23;
          j++;
          efec++;
        }
        y = y + 3;
      }

      //FIRMAS
      doc.setFontSize(8);
      doc.line(38, 277, 70, 277); // horizontal line
      doc.text("Generador del " + "\n" + "Manifiesto", 38, 280, "center");
      doc.line(137, 277, 170, 277); // horizontal line
      doc.text("Quien recibe" + "\n" + "el manifiesto", 137, 280, "center");
      doc.save("manifiesto.pdf");
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
