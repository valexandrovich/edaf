<template>
  <div id="app">
    
    <router-view />
  </div>
</template>

<script>
    
import { loadMessages } from "./plugins/i18n";

export default {
  metaInfo: {
    titleTemplate: "EDAF - %s",
    htmlAttrs: {
      lang: "en-US",
    },
    meta: [
      { charset: "utf-8" }, 
      {
        name: "viewport",
        content:
          "width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0",
      },
      { "http-equiv": "X-UA-Compatible", content: "ie=edge" },
      {
        name: "description",
        content:
          "European Digital Art Fair aims to present contemporary digital art synchronically. Digital art works by artists from 43 European countries will be exhibited in both spaces simultaneously — at specially designed virtual galleries created by V-Art platform and at the exhibition in M17 Contemporary Art Center. This hybrid format of simultaneous online and offline parts of EDAF represents the poly-modality of contemporary reality. Together they create an immersive all-dimensional art experience.",
      },
      // // Open Graph / Facebook
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://edaf.art/index.html" },
      {
        property: "og:title",
        content: "EDAF — FIRST PAN-EUROPEAN DIGITAL ART FAIR",
      },
      {
        property: "og:description",
        content:
          "European Digital Art Fair aims to present contemporary digital art synchronically. Digital art works by artists from 43 European countries will be exhibited in both spaces simultaneously — at specially designed virtual galleries created by V-Art platform and at the exhibition in M17 Contemporary Art Center. This hybrid format of simultaneous online and offline parts of EDAF represents the poly-modality of contemporary reality. Together they create an immersive all-dimensional art experience.",
      },
      {
        property: "og:image",
        content: "~/assets/images/opengraph.png",
      },
      // // Twitter
      { property: "twitter:card", content: "summary_large_image" },
      { property: "twitter:url", content: "https://edaf.art/index.html" },
      {
        property: "twitter:title",
        content: "EDAF — FIRST PAN-EUROPEAN DIGITAL ART FAIR",
      },
      {
        property: "twitter:description",
        content:
          "European Digital Art Fair aims to present contemporary digital art synchronically. Digital art works by artists from 43 European countries will be exhibited in both spaces simultaneously — at specially designed virtual galleries created by V-Art platform and at the exhibition in M17 Contemporary Art Center. This hybrid format of simultaneous online and offline parts of EDAF represents the poly-modality of contemporary reality. Together they create an immersive all-dimensional art experience.",
      },
      {
        property: "twitter:image",
        content: "~/assets/images/opengraph.png",
      },
    ],
  },
  mounted() {
    loadMessages();
  },

};
</script>
