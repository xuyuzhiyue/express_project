<template>
  <div>
    <div class="nav-top">
      <div class="top"><slot name="top"></slot></div>
    </div>
    <div class="nav-bar">
      <div class="left"><slot name="left"></slot></div>
      <div class="center"><slot name="center"></slot></div>
<!--      <div class="right"><slot name="right"></slot></div>-->
    </div>
  </div>
</template>

<script>
    export default {
        name: "Mun2"
    }
</script>

<style scoped>
  .nav-bar {
    display: flex;
    justify-content: center;
    text-align: center;
  }

  .left{
    width: 100%;
  }

  /*.center {*/
  /*  flex: 1*/
  /*}*/
  .left{
    height: 150px;
    letter-spacing: 12px;
    overflow: auto;
    text-indent: 2em;
    line-height: 25px;
  }
  .center img{
    width: 150px;
    height:  150px;
    display: block;
  }
</style>
