<template>
    <div class="shopdetail">
        <h1>Shop Detail Page</h1>
        <h2>{{this.$route.params.id}}</h2>
    </div>
    <PartFile></PartFile>
</template>


<script>
// @ is an alias to /src
import PartFile from '@/components/PartFile.vue'

export default {
    name: 'ShopDetail',
    data(){
        return{

        }
    },
    components: {
        PartFile,
    }
}
</script>