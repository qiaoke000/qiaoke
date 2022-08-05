<template>
    <div class="foot">
        <div class="flex">
            <div>
                <router-link to='/home/goods'>商品</router-link>
                
            </div>
            <div>
                <router-link to='/home/feek'>反馈</router-link>
                
            </div>
            <div>
                <router-link to='/home/atitle'>文章</router-link>
                
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:''
}
</script>
<style lang="scss" scoped>
    .foot{
        width: 100%;
        height: 50px;
        position: fixed;
        left: 0;
        bottom: 0;
        border: 1px solid #ccc;
        .flex{
            display: flex;
            justify-content: space-around;
            div{
                line-height: 50px;
            }
        }
    }
</style>