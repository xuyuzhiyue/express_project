<template>
  <div>
    <div class="nav-top">
      <div class="top"><slot name="top"></slot></div>
    </div>
    <div class="nav-bar">
      <div class="left"><slot name="left"></slot></div>
      <div class="center"><slot name="center"></slot></div>
      <div class="right"><slot name="right"></slot></div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "mun"
    }
</script>

<style scoped>
  .nav-top .top{
    font-size: 27px;
    color: #ff8b93;
    margin-left: 5px;
  }
  .nav-bar {
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    box-shadow: 0 1px 1px rgba(100,100,100,.1);
  }

  .left, .right {
    width: 100px;
  }

  .center {
    flex: 1;
  }
</style>
