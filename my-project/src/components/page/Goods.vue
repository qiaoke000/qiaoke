<template>
    <div class="good">
        <div class="s">
            <h3>商品列表</h3>
        </div>
        <div class="k clear">
            <p class="fl" @click="dian(1)">综合</p>
            <p class="fl" @click="dian(2)">价格</p>
            <p class="fl" @click="dian(3)">销量</p>
        </div>
        <div class="container clear">
            <div class="conta fl" v-for = '(item,index) in arr' :key = "index">
                <div class="img-con">
				    <img :src="item.img" alt="">
                </div>
                <div class="ppp">
                    <p>{{ item.name }}</p>
                    <h4>月销{{ item.sales }}</h4>
                    <div class="pp clear">
                        <span class="kk fl">￥{{ item.price }}</span>
                        <img class="kk1 fr" src="../img/car.png">
                    </div>
                </div>
            </div>
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
        this.$http.get('api/getGoodsList?sort_type=2')
        .then(res =>{
            this.arr = res.data.data
            console.log(res)
            
        })
        .catch(error =>{
            console.log(error)
        })
    },
    methods: {
        dian:function(n){
            this.$http.get('api/getGoodsList?sort_type'+n)
            .then(res =>{
                this.arr = res.data.data
                console.log(res)
                
            })
            .catch(error =>{
                console.log(error)
            })
        }
    },
}
</script>
<style lang="scss" scoped>
    .good{
        width: 100%;
        .s{
            background-color: #4498ee;
            height: 70px;
            margin-top: -60px;
             h3{
                width: 100%;
                color: white;
                position: absolute;
                font-weight: 60;  
                margin-top: 35px;   
            }   
        }
        .k{
            display: flex;
            justify-content: space-around;
            p{
                line-height: 30px;
            }
        }
        .container{
            width: 100%;
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            .conta{
                width: 40%;
                .img-con{
                    width: 100%;
                    margin-right: 60px;
                    img{
                        width: 100%;
                    }
                }
                .ppp{
                    width: 100%;
                    p{
                        width: 100%;
                        font-size: 10px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        margin-left:  -10px;
                    }
                    h4{
                        font-size: 10px;
                        font-weight: 50;
                        margin-right: 82px;
                    }
                    .pp{
                        width: 100%;
                        .kk{
                            margin-right: 85px;
                            color: #509ede;
                        }
                        .kk1{
                            width: 20px;
                            margin-left: -30px;
                        }
                    }
                }
            
        }
        
            
        }
    }
</style>