<template>
  <div class="ratingselect">
    <div class="rating-type border-1px">
      <span class="block positive" :class="{active: rateType==2}" @click="setRateType(2)">
        {{desc.all}}<span class="count">{{ratings.length}}</span>
      </span>
      <span class="block positive" :class="{active: rateType==0}" @click="setRateType(0)">
        {{desc.positive}}<span class="count">{{positiveSize}}</span>
      </span>
      <span class="block negative" :class="{active: rateType==1}" @click="setRateType(1)">
        {{desc.negative}}<span class="count">{{ratings.length-positiveSize}}</span>
      </span>
    </div>

    <div class="switch" :class="{on: onlyContent}" @click="toggleOnlyContent">
      <span class="icon-check_circle"></span>
      <span class="text">只看有内容的评价</span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      rateType: Number,
      onlyContent: Boolean,
      toggleOnlyContent: Function,
      setRateType: Function,
      ratings: Array,
      desc: Object  // {all: ''全部', positive: "推荐", negative: '吐糟'}
    },

    computed: {
      positiveSize () {
        return this.ratings.reduce((preTotal, rating) => {
          return preTotal + (rating.rateType===0 ? 1 : 0)
        }, 0)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"

  .ratingselect
    .rating-type
      padding: 18px 0
      margin: 0 18px
      border-1px(rgba(7, 17, 27, 0.1))
      font-size: 0
      .block
        display: inline-block
        padding: 8px 12px
        margin-right: 8px
        line-height: 16px
        border-radius: 1px
        font-size: 12px
        color: rgb(77, 85, 93)
        &.active
          color: #fff
        .count
          margin-left: 2px
          font-size: 8px
        &.positive
          background: rgba(0, 160, 220, 0.2)
          &.active
            background: rgb(0, 160, 220)
        &.negative
          background: rgba(77, 85, 93, 0.2)
          &.active
            background: rgb(77, 85, 93)
    .switch
      padding: 12px 18px
      line-height: 24px
      border-bottom: 1px solid rgba(7, 17, 27, 0.1)
      color: rgb(147, 153, 159)
      font-size: 0
      &.on
        .icon-check_circle
          color: #00c850
      .icon-check_circle
        display: inline-block
        vertical-align: top
        margin-right: 4px
        font-size: 24px
      .text
        display: inline-block
        vertical-align: top
        font-size: 12px
</style>