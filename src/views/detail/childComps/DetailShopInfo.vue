<template>
    <div class="mun2">
      <mun2>
        <div class="top" slot="top">专题首页</div>
        <div class="left" slot="left">一直以来，华晨宇都用自己的歌曲传达着对生命的尊重和珍惜，用音乐表达对社会的责任感，引导大众关爱和理解彼此的内心世界。

          这首《好想爱这个世界啊》是华晨宇“火星三部曲”中的第一首，也是他专门为抑郁症群体所创作的。</div>
        <div class="center" slot="center"><img src="https://p1.music.126.net/3-y4J1CayZI0k2NkNkTmDw==/109951164525748216.jpg?param=440y440" alt=""></div>
      </mun2>
    </div>
</template>

<script>
  import Mun2 from 'components/common/myself/Mun2'
    export default {
        name: "DetailShopInfo",
      components:{
        Mun2
      }
    }
</script>

<style scoped>
  .mun2{
   padding-bottom: 20px;
  }
 .top{
   margin-top: 30px;
   margin-left: 10px;
   font-size: 20px;
   color: darkcyan;
   margin-bottom: 12px;
 }

</style>
