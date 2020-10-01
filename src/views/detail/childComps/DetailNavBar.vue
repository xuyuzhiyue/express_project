<template>
    <div>
      <nav-bar>
        <div slot="left" class="back" @click="backClick">
          <img src="~assets/img/common/back.svg" alt="" >
        </div>
        <div slot="center" class="title">
          <div v-for="(item,index) in titles" class="titleItem" :class="{active:index === currentIndex}" @click="titleClick(index)">
            {{item}}
          </div>
        </div>
      </nav-bar>
    </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
    export default {
        name: "DetailNavBar",
      data(){
        return{
          titles:['青春','飞扬','说说','音乐'],
          currentIndex:0
        }  
      },
      methods:{
        titleClick(index){
          this.currentIndex = index
        },
        backClick(){
          this.$router.back()
        }
      },
      components:{
        NavBar
      }
    }
</script>

<style scoped>
  .title{
    display: flex;
    font-size: 13px;
  }
  .titleItem{
    flex: 1;
  }
  .active{
    color: var(--color-high-text);
  }
  .back img{
    margin-top: 12px;

  }
</style>
