<template>
  <div class="star" :class='`star-${size}`'>
    <span class="star-item" v-for="sc in starClass" :class="sc">  </span>
  </div>




</template>
<script>
  const CLASS_ON = 'on'
  const CLASS_OFF = 'off'
  const CLASS_HALF= 'half'

  export default {
    props:{
      score:Number,
      size:Number
    },
    data() {
      return {}
    },
    methods: {},
    computed: {
      starClass(){
        const scs = []
        const scoreInter = Math.floor(this.score)
        for (var i = 0; i < scoreInter; i++) {
           scs.push(CLASS_ON)
        }
        if(this.score - scoreInter >=0.5){
          scs.push(CLASS_HALF)
        }
        while(scs.length<5){
          scs.push(CLASS_OFF)
        }
          return scs
      }
    },
    components: {}
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .star-24
    text-align center
    .star-item
      display inline-block
      width 10px
      height 10px
      background-repeat no-repeat
      background-size 10px 10px
    .on
      bg-star(star24_on)

    .half
      bg-star(star24_half)
    .off
      bg-star(star24_off)

  .star-36
    text-align center
    .star-item
      display inline-block
      width 22px
      height 22px
      background-repeat no-repeat
      background-size 22px 22px
    .on
      bg-star(star36_on)

    .half
      bg-star(star36_half)
    .off
      bg-star(star36_off)

  .star-48
    text-align center
    .star-item
      display inline-block
      width 20px
      height 20px
      background-repeat no-repeat
      background-size 20px 20px
    .on
      bg-star(star48_on)

    .half
      bg-star(star48_half)
    .off
      bg-star(star48_off)
</style>
