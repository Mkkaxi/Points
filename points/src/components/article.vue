<template>
  <div class="article">
    <ul>
      <li v-for="(item, index) in 8" :key="index">
        <div class="author">
          <p>作者</p>
        </div>
        <div class="title">
          <p>标题lajdlajflaj</p>
        </div>
        <div class="mes">
          <div class="agree">
            <i class="iconfont icon-dianzan"></i>
            <p>22</p>
          </div>
          <div class="comment">
            <i class="iconfont icon-zujian"></i>
            <p>22</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scope>
  .article
    background #fff
    width 45%
    margin-left 310px
    margin-top 10px
    ul li 
      list-style none
      border-top 2px solid #F4F5F5
      height 120px
      .author
        font-size 10px
        margin-left 20px
        margin-top 20px
      .title
        font-size 18px
        font-weight bold
        margin-top 5px
        margin-left 20px
      .mes
        display flex
        margin-left 20px
        .agree, .comment
          // width 50px
          padding 2px 8px
          height 18px
          border 1px solid #B2BAC2
          margin-top 10px
          display flex
          align-items center
          justify-content center
          .iconfont
            color #B2BAC2
            font-size 13px
            margin-right 5px
          p
            font-size 13px
            color #B2BAC2
            font-weight 600
        .comment
          border-left none 
</style>