<template>
<!--  v-if="Object.keys(goods).length !==0"-->
    <div  v-if="Object.keys(goods).length !==0" class="base-info">
      <div class="info-title">
              <span>{{goods.title}}</span>
              <div>{{goods.si_proxycompany}}</div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "DetailBaseInfo",
      props:{
          goods:{
            type:Object,
            default(){
              return {}
            }
          }
      }
    }
</script>

<style scoped>
  .info-title{
    margin-top: 20px;
    margin-bottom: 15px;
    text-align: center;
  }
</style>
