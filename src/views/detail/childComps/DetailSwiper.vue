<template>
    <div class="detail-swiper">
      <swiper class="swiper">
<!--        <swiper-item v-for="item in topImages">-->
<!--&lt;!&ndash;          <img :src="item" alt="">&ndash;&gt;-->
<!--        </swiper-item>-->
        <swiper-item >
          <img :src="topImages" alt="">
        </swiper-item>
      </swiper>
    </div>
</template>

<script>
  import {Swiper,SwiperItem} from 'components/common/swiper'
    export default {
        name: "DetailSwiper",
      components:{
        Swiper,
        SwiperItem
      },
      props:{
        topImages:{
           // type:Array,
            default(){
              return []
            }
          }
      }
    }
</script>

<style scoped>
 .swiper{
   height: 300px;
   overflow: hidden;
 }

</style>
