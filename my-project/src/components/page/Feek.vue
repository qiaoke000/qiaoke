<template>
    <div class="feek">
        <div class="t">
              <h3>投诉建议</h3>
        </div>
        <div class="feedback">
            <div class="inp">
                <label for="name">姓名</label>
                <input v-model="name" type="text" placeholder="请输入您的姓名" id="name">
            </div>
            <div class="inp">
                <label for="tell">电话</label>
                <input v-model="tel" type="text" placeholder="请输入您的联系方式" id="tell">
            </div>
            <div class="inp">
                <label for="email">邮箱</label>
                <input v-model="email" type="text" placeholder="请输入您的邮箱号" id="email">
            </div>
            <div class="box">
                <form>
                    <p>投诉建议</p>
                    <textarea v-model = 'msg' placeholder="为了能更好的为您服务..." ></textarea>
                    <div class="num">{{num}}/240</div>
                </form>
            </div>
            <button @click ="ok">提交</button>
        </div>
    </div>
</template>
<script>
export default {
  name:'',
  data() {
    return {
      name:'',
      tel:'',
      email:'',
      msg:'',
      num:0,
    }
  },
  methods: {
    ok(){
      this.$http.post('/api/feedback',{
        name:this.name,
        tel:this.tel,
        email:this.email,
        msg:this.msg,
      })
      .then(res =>{
            console.log(res.data)
        })
    }
  },
  watch:{
    msg(){
      this.num = this.msg.length;
    }
  },
  created() {
    this.$http.post('/api/feedback')
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
    .feek{
      display: flex;
      flex-direction: column;
      .t{
        width: 100%;
        height: 80px;
        background-color: #4498f0;
        text-align: center;
        color: #fff;
        margin-top: -60px;
        h3{
          margin-top: 42px;
          font-weight: 60;
        }
      }
      .feedback{
        .inp{
          width: 100%;
          margin: 10px 0;
          border-bottom: 1px solid #ccc;
          label{
            font-size: 22px;
            width: 100%;
            padding: 0 8px;
           
          }
          input{
            width: 80%;
            height: 45px;
            font-size: 15px;
            border: none;
            // input:-webkit-input-placeholder{
            //   color: #fff;
            // }
          }
        }
      }
      .box{
        width: 100%;
        form{
            padding-left: 10px;
            p{
              font-size: 22px;
              text-align: left;
            }
            textarea{
              width: 100%;
              margin-top: -25px;
              border: none;
              font-size: 15px;
            }
            .num{
              margin-left: 300px;
              font-weight: 50;
            }
        }
      }
      button{
        width: 90%;
        border: none;
        border-radius: 25px;
        height: 50px;
        font-size: 24px;
        color: #fff;
        background-color: #4498f0;
        position: absolute;
        bottom: 70px;
        left: 18px;
      }
    }
</style>