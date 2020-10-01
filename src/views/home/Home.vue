<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">万物街</div></nav-bar>
    <tab-control class="tab-control tab-control" :titles="['青春','往事','拥有']" @tabClick="tabClick" ref="tabControl1" v-show="isTabFixed"></tab-control>
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll" :pull-up-load="true" @pullingUp="loadMore">
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"/>
      <recommend-view :recommends="recommends"/>
      <feature-view></feature-view>
      <tab-control class="tab-control" :titles="['青春','往事','拥有']" @tabClick="tabClick" ref="tabControl2" ></tab-control>
      <good-list :goods="showGoods"></good-list>
    </scroll>
    <back-Top @click.native="backClick" v-show="isShowBackTop"></back-Top>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar';
  import HomeSwiper from './childComps/HomeSwiper'
  import RecommendView from './childComps/RecommendView'
  import FeatureView from './childComps/Feature'
  import  TabControl from 'components/content/tabControl/TabControl'
  import GoodList from 'components/content/goods/GoodsList'
  import Scroll from 'components/common/scroll/Scroll'
  import BackTop from 'components/content/backTop/BackTop'

  import {getHomeMultidata,getHomeGoods} from "network/home";


  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      GoodList,
      Scroll,
      BackTop
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods:{
          // 'pop':{page:1,list:[]},
          // 'news':{page:1,list:[]},
          // 'sell':{page:1,list:[]},
         page:1,list:[]
        },
        isShowBackTop:false,
        tabOffsetTop:0,
        isTabFixed :false,
        saveY:0
      }
    },
    created() {
      // 1.请求多个数据
      this.getHomeMultidata()
      this.getHomeGoods()
      //   this.getHomeGoods('pop')
      // this.getHomeGoods('new')
      // this.getHomeGoods('sell')
    },
    computed:{
      showGoods(){
        return this.goods.list
      }
    },
    activated(){
      this.$refs.scroll.scrollTo(0,this.saveY,0)
      this.$refs.scroll.refresh()
    },
    // 离开时
    deactivated(){
      this.saveY = this.$refs.scroll.getScrollY()
      // console.log(this.saveY);
    },
    methods:{
      tabClick(index){
        console.log(index);
        this.$refs.tabControl1.currentIndex = index
        this.$refs.tabControl2.currentIndex = index
      },
      getHomeMultidata(){
        getHomeMultidata().then(res => {
          // this.result = res;
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      },
      getHomeGoods(){
        getHomeGoods(1).then(res=>{
          console.log(res);
          // this.goods.list.push(...res.result)
          this.goods.list =res.result
          console.log(this.goods.list);
        })
      },
      backClick(){
        this.$refs.scroll.scrollTo(0,0,10)
      },
      contentScroll(position){
        // console.log(position);
        // 1.判断Back Top是否显示
        this.isShowBackTop = -position.y > 1000

        // 2.决定tabControl是否吸顶
        this.isTabFixed =(-position.y) > this.tabOffsetTop
      },
      loadMore(){
        // console.log('hhh');
        // this.getHomeGoods(2)
      },
      swiperImageLoad(){
        // console.log(this.$refs.tabControl.$el.offsetTop);
        this.tabOffsetTop =this.$refs.tabControl2.$el.offsetTop;

      }
    }
  }
</script>

<style scoped>
   #home{
     padding-top: 44px;
     height: 100vh;
     position: relative;
   }
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;

    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 9;
  }
  .tab-control{
    position: relative;
    z-index: 9;
  }
  /*.tab-control{*/
  /*  !*position: sticky;*!*/
  /*  top: 44px;*/
  /*}*/
  .content{
    /*height: 460px;*/
    overflow: hidden;

    position: absolute;
    top: 44px;
    bottom: 49px;
    left:0;
    right: 0;
  }

</style>
