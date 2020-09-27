<template>
  <div class="container">
    <div class="wrapper">
      <div class="logo">
        <img :src="logoURL" alt="">
      </div>
      <ul>
        <li><router-link to="/home">首页</router-link></li>
        <li><router-link to="/pins">沸点</router-link></li>
        <li><router-link to="/topics">话题</router-link></li>
        <li><router-link to="/books">小册</router-link></li>
        <li><router-link to="/events">活动</router-link></li>
      </ul>
      <div class="input">
        <input type="text" placeholder="搜索">
        <i class="icon-search iconfont"></i>
      </div>
      <div class="button">
        <button>写文章</button>
      </div>
      <div class="icon">
        <i class="icon-lingdang iconfont"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logoURL: 'https://s3.pstatp.com/toutiao/xitu_juejin_web/img/logo.a7995ad.svg'
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container
    width 100%
    background-color #fff
    .wrapper
      width 66%
      height 60px
      margin 0 auto
      display flex
      align-items center
      .logo
        margin-left 20px
      ul 
        margin-left 20px
        overflow hidden
        li
          float left
          list-style-type none
          width 68px
          display flex
          align-items center
          justify-content center
          color #718CC0
          .router-link-active
            color rgb(0,127,255)
          a:hover
            color rgb(0,127,255)
      .input
        width 180px
        height 32px
        border 1px solid #eee
        background-color #F9FAFB
        margin-left 120px
        display flex
        justify-content center
        align-items center
        i 
          margin-left 10px
          color #C3CCD5
        input
          margin-left 8px
          width 130px
          height 22px
          border none
          outline none
          background-color #F9FAFB
      .button
        button
          width 68px
          height 36px
          background-color #007FFF
          border-radius 4px
          border none
          margin-left 20px
          color #fff
          outline none
          &:hover
            cursor pointer
            background #0876E4
      .icon
        width 50px
        background-color red 
        
</style>