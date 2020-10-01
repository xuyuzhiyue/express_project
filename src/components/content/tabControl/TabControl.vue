<template>
    <div class="tab-control">
      <div v-for="(item,index) in titles" class="tab-control-item" :class="{active:index === currentIndex}" @click="itemClick(index)">

        <span>{{item}}</span></div>
    </div>
</template>

<script>
    export default {
        name: "TabControl",
      data(){
          return{
            currentIndex:0
          }
      },
      methods:{
        itemClick(index){
          this.currentIndex = index;
          this.$emit('tabClick',index)
        }
      },
      props:{
          titles:{
            type:Array,
            default(){
              return []
            }
          }
      }
    }
</script>

<style scoped>
 .tab-control{
   display: flex;
   text-align: center;
   font-size: 15px;
   background-color: rgba(255, 255, 255, 0.1);
   z-index: 10;
 }
  .tab-control-item{
    flex: 1;
    height: 40px;
    line-height: 40px;
  }
  .active{
    color: var(--color-high-text);
  }
  .tab-control-item span{
    padding: 5px;
  }
  .active span{
    border-bottom: 2px solid var(--color-high-text);
  }
</style>
