<template>
    <div id="detail">
      <detail-nav-bar class="detail-nav"></detail-nav-bar>

      <Scroll class="content" ref="scroll">
<!--        <ul>-->
<!--          <li v-for="item in $store.state.carList">-->
<!--            {{item}}-->
<!--          </li>-->
<!--        </ul>-->
        <detail-swiper :top-images="topImages"></detail-swiper>
        <detail-base-info :goods="goods"></detail-base-info>
        <mun>
          <div slot="top">￥{{goods.rank}}</div>
          <div slot="left">销量 1500</div>
          <div slot="center">收藏 33人</div>
          <div slot="right">分享 888次</div>
        </mun>
        <detail-shop-info></detail-shop-info>
      </Scroll>
      <detail-bottom-bar @addCart="addToCart"></detail-bottom-bar>
      <back-Top @click.native="backClick" v-show="isShowBackTop"></back-Top>
      <toast :message="message" :show="show"></toast>
    </div>
</template>

<script>
  import DetailNavBar from './childComps/DetailNavBar'
  import {getDetail} from 'network/detail'
  import  DetailSwiper from './childComps/DetailSwiper'
  import DetailBaseInfo from './childComps/DetailBaseInfo'
  import Mun from 'components/common/myself/Mun'
  import DetailShopInfo from './childComps/DetailShopInfo'
  import DetailBottomBar from './childComps/DetailBottomBar'
  import BackTop from 'components/content/backTop/BackTop'
  import {BACK_POSITION} from 'common/utils'

  import Scroll from 'components/common/scroll/Scroll'

  import Toast from 'components/common/toast/Toast'
    export default {
        name: "Detail",
      components:{
        DetailNavBar,
        DetailSwiper,
        DetailBaseInfo,
        Mun,
        DetailShopInfo,
        Scroll,
        DetailBottomBar,
        BackTop,
        BACK_POSITION,
        Toast
      },
      data(){
          return{
            iid:null,
            topImages:[],
            goods:{},
            isShowBackTop:true,
            message:'',
            show:false
          }
      },
      methods:{
        // contentScroll(position){
        //   // console.log(position);
        //   // 1.判断Back Top是否显示
        //   this.isShowBackTop = -position.y > 200
        //
        // },
        backClick(){
          this.$refs.scroll.scrollTo(0,0,10)
        },
        addToCart(){
          // 1.获取购物车所需要的信息
          const product= {}
          product.image =this.goods.album_500_500
          product.name =this.goods.artist_name
          product.title =this.goods.title
          product.country=this.goods.country
          // console.log('---');
          product.iid=this.iid

          // 2.将商品添加到购物车
          // this.$store.commit('addCart',product)
          this.$store.dispatch('addCart',product).then(res=>{
            this.show =true;
            this.message =res;
            // console.log(res);
            setTimeout(()=>{
              this.show =false;
              this.message = ''
            },1500)
          })
        }
      },
      activated() {

      },
      created() {
          // 1.保存传入的id
          this.iid = this.$route.params.id
        // 2.根据iid请求详情数据
        getDetail(this.iid).then(res=>{
          // console.log(res);
          this.topImages = res.result[this.iid -1].pic_s500
          // console.log(this.topImages);

          this.goods =res.result[this.iid -1]
          console.log(this.goods);
        })
      }
    }
</script>

<style scoped>
 #detail{
   position: relative;
   z-index: 11;
   background-color: #fff;
   height: 100vh;
 }
  .content{
    height: calc(100% - 44px - 47px);
  }
  .detail-nav{
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
</style>
