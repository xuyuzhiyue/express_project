<template>
 <div class="cart">
<!--   导航-->
   <nav-bar class="nav-bar">
      <div slot="center">购物车({{cartLength}})</div>
   </nav-bar>

<!--   商品的列表-->
   <cart-list></cart-list>

<!--   底部汇总-->
   <cart-button-bar></cart-button-bar>
 </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import CartButtonBar from './childComps/CartButtonBar'
  import CartList from './childComps/CartList'
  import {mapGetters} from 'vuex'
  export default {
    name: "Cart",
    components:{
      NavBar,
      CartList,
      CartButtonBar
    }, computed:{
      // cartLength(){
      //   // return this.$store.getters.cartLength
      // },
      ...mapGetters(['cartList','cartLength'])
    }


  }
</script>

<style scoped>
  .cart{
    height: 100vh;
  }
  .nav-bar{
    background-color: var(--color-tint);
    color: #ffffff;
    font-weight: 700;
  }
</style>
