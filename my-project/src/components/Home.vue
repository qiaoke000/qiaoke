<template>
    <div>
        <router-view></router-view>
        <foot></foot>
    </div>
</template>
<script>
import Foot from './component/Foot.vue'
export default {
    name:'Home',
    components:{
        Foot:Foot
    }
}
</script>
<style lang="scss" scoped>
    
</style>