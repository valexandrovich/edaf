<template>
  <div id="app" >
    <router-view />
  </div>
</template>

<script>
import {loadMessages} from './plugins/i18n'

export default {
  metaInfo: {
    title: 'Default App Title',
    titleTemplate: '%s | vue-meta Example App',
    htmlAttrs: {
      lang: 'en-US'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'description', content: 'An example Vue application with vue-meta.' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  },
mounted(){
  loadMessages()
  document.title = 'EDAF — FIRST PAN-EUROPEAN DIGITAL ART FAIR'
}
}

</script>
