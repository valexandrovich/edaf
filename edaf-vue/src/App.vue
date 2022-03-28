<template>
  <div id="app" >
    <router-view />
  </div>
</template>

<script>
import {loadMessages} from './plugins/i18n'

export default {
mounted(){
  loadMessages()
}
}

</script>
