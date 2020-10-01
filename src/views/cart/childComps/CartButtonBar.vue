<template>
    <div class="bottom-bar">
    <div class="check-content">
      <check-button :is-checked="isSelectAll" class="check-button" @click.native="checkClick"></check-button>
      <span>全选</span>
    </div>
      <div class="price">
        合计：{{totalPrice}}
      </div>
      <div class="calculate">
        去计算：{{checkLenth}}
      </div>
    </div>
</template>

<script>
  import CheckButton from 'components/content/checkButton/CheckButton'
  import { mapGetters } from 'vuex'
    export default {
        name: "CartButtonBar",
      components:{
        CheckButton,
      },
      methods:{
        checkClick(){
          if (this.isSelectAll){   //全部选中
            this.$store.state.carList.forEach(item =>item.checked =false)
          } else {  //部分选中
            this.$store.state.carList.forEach(item =>item.checked =true)
          }
        }
      },
      computed:{
          ...mapGetters(['cartList']),
          totalPrice(){
            return '￥'+ this.$store.state.carList.filter(item =>{
              return item.checked
            }).reduce((preValue,item)=>{
              return preValue + item.iid * item.count
            },0).toFixed(2)
          },
        checkLenth(){
            return this.$store.state.carList.filter(item=>item.checked).length
        },
        isSelectAll(){
          if (this.$store.state.carList.length === 0) return false
          //   return !(this.carList.filter(item =>item.checked).length)

          return !this.$store.state.carList.find(item => !item.checked)

          // 普通遍历方法
          // for (let item of this.$store.state.carList){
          //   if (!item.checked){
          //     return false
          //   }
          // }
          // return true
        }
      }
    }
</script>

<style scoped>
 .bottom-bar{
   display: flex;
   height: 40px;
   background-color: #eee;
   position: relative;
   line-height: 40px;
 }
 .check-content{
   display: flex;
   align-items: center;
   margin-left: 10px;
   width: 60px;
 }
  .check-button{
    width: 20px;
    height: 20px;
    line-height: 20px;
    margin-right: 5px;
  }
  .price{
    margin-left: 60px;
    flex: 1;
  }
  .calculate{
    width: 90px;
    text-align: center;
    color: #ff8198;
  }
</style>
