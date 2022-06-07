<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
  <PartFile></PartFile>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import PartFile from '@/components/PartFile.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    PartFile
  }
}
</script>
