<template>
    <div class="toast"  v-show="show">
      <div>{{message}}</div>
    </div>
</template>

<script>
    export default {
        name: "Toast",
      props:{
          message:{
            type:String,
            default:''
          },
        show:{
            type: Boolean,
          default: false
        }
      }
    }
</script>

<style scoped>
  .toast{
    position: fixed;
    color: white;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    padding: 8px 15px;
    background-color: rgba(0,0,0,0.5);
    border-radius: 15px;
  }
</style>
