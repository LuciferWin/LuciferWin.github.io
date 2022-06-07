<template>
    <div class="shop">
        <h1>Shop Page</h1>
        <p><router-link :to="{name: 'shopdetail', params:{id:'item-1'}}">Item - 1</router-link></p>
        <p><router-link :to="{name: 'shopdetail', params:{id:'item-2'}}">Item - 2</router-link></p>
        <PartFile></PartFile>
    </div>
</template>
<script>
// @ is an alias to /src
import PartFile from '@/components/PartFile.vue'

export default {
    name: 'ShopView',
    components: {
        PartFile,
    }
}
</script>