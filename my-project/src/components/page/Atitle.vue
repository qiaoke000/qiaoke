<template>
    <div class="att">
        <div>
             <h3>文章列表</h3>
        </div>
        <div class="w1 clear" v-for = '(item,index) in arr' :key = "index">
           <h4 class="fl">{{ item.title }}</h4> 
           <p > {{ item.time }}</p>
           <img :src="item.img" alt="" class="fr"> 
        </div>
    </div>
</template>
<script>
export default {
    name:'',
    data(){
        return{
            arr:[]
        }
    },
    created() {
        this.$http.get('/api/getNoticeList')
        .then(res =>{
            this.arr = res.data.data
            console.log(res)
            
        })
        .catch(error =>{
            console.log(error)
        })
    },
}
</script>
<style lang="scss" scoped>
    .att{
        width: 100%;
        div{
            width: 100%;
            height: 80px;
            background-color: #4498ee;
            margin-top: -60px;
            position: relative;
            h3{
                width: 100%;
                color: white;
                position: absolute;
                margin-top: 40px;
                font-weight: 60;
            }
        }
        .w1{
            width: 100%;
            height: 140px;
            margin-top: -10px;
            background-color: white;

            h4{
                width: 60%;
                margin-right: 15px;
            }
            p{
                position: absolute;
                margin-top: -10px;
                left: 5px;
            }
            img{
                width: 100px;
                margin-left: 255px;
                margin-top: -35px;
            }
                
        }
        
    }
        
</style>