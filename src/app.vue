<template>
  <div>
    <ele-header :seller="seller"></ele-header>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view :seller="seller"></router-view>
  </div>
</template>

<script>
  import header from './components/header/header.vue'
  import axios from 'axios'

  export default {
    data (){
      return {
        seller:{}
      }
    },
    mounted(){

      axios.get('/api2/seller').then((response) => {
        //console.log(response.data)
        const result = response.data
        if(result.code==0){
          this.seller = result.data
        }
      }, (response) => {
        console.log('失败了')
      })
    },

    components: {
      'ele-header': header
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "./common/stylus/mixins.styl"
  .tab
    height 40px
    display flex
    border-1px(rgba(7,17,27,0.1))
    .tab-item
      width 33.3333%
      line-height 40px
      text-align center
      a
      display block
      &.router-link-active
        color rgb(240,20,20)
</style>
