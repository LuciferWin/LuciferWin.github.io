<template>
  <div class="about">
    <h1>About Page</h1>
  </div>
  <PartFile></PartFile>
</template>
<script>
// @ is an alias to /src
import PartFile from '@/components/PartFile.vue';

export default {
  name: 'AboutView',
  components: {
    PartFile
  }
}
</script>


