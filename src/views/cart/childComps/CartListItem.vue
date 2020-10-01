<template>
    <div id="shop-item">
      <div class="item-selector">
        <CheckButton :is-checked="itemInfo.checked" @click.native="checkClick">

        </CheckButton>
      </div>
      <div class="item-img">
        <img :src="itemInfo.image" alt="">
      </div>
      <div class="item-info">
        <div class="item-title">{{itemInfo.title}}</div>
<!--        <div class="item-country">{{itemInfo.country}}</div>-->
        <div class="item-name">歌手：{{itemInfo.name}}</div>
        <div class="info-bottom">
          <div class="item-price left">￥{{itemInfo.iid}}</div>
          <div class="item-count right">x{{itemInfo.count}}</div>
        </div>
      </div>
    </div>
</template>

<script>
  import CheckButton from 'components/content/checkButton/CheckButton'
    export default {
        name: "CartListItem",
      components:{
        CheckButton
      },
      methods:{
        checkClick(){
          this.itemInfo.checked = !this.itemInfo.checked
        }
      },
      props:{
        itemInfo:{
          type:Object,
          default(){
            return {}
          }
        }
      }
    }
</script>

<style scoped>
  #shop-item{
    width: 100%;
    display: flex;
    font-size: 0;
    padding: 5px;
    border-bottom: 1px solid #ccc;
  }
  .item-selector{
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .item-title, .item-name{
    overflow: hidden;
    white-space: nowrap;

    text-overflow: ellipsis;
  }
  .item-name, .item-country{
    margin-top: 10px;
    /*margin-left: 50%;*/
    display: inline-block;
  }

  .item-img img{
    width: 100px;
    height: 100px;
    display: block;
    border-radius: 5px;
    margin-left: 5px;
  }

  .item-info{
    font-size: 17px;
    color: #333;
    padding: 5px 100px 5px 0;
    position: relative;
    overflow: hidden;
    margin-top: 10px;
    left: 2%;
  }
  .info-bottom{
    margin-top: 10px ;
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
  }
  .info-bottom .item-price{
    color: orangered;
  }


</style>
