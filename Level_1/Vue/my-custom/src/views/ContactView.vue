<template>
    <div class="contact">
        <h1>Contact Page</h1>
        <PartFile></PartFile>
    </div>
</template>
<script>
// @ is an alias to /src
import PartFile from '@/components/PartFile.vue'

export default {
    name: 'ContactView',
    components: {
        PartFile,
    }
}
</script>