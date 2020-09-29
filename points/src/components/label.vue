<template>
  <div class="Label">
    <div class="label">
      <router-link to="/recommended">推荐</router-link>
      <router-link to="/following">关注</router-link>
      <router-link to="/backend">后端</router-link>
      <router-link to="/frontend">前端</router-link>
      <router-link to="/android">Android</router-link>
      <router-link to="/ios">IOS</router-link>
      <router-link to="/ai">人工智能</router-link>
    </div>
    <span class="target">标签管理</span>
  </div>
</template>

<script>
export default {
  props: {

  }
}
</script>

<style lang="stylus" scoped>
  .Label
    border-top 2px solid #F4F5F5
    width 100%
    height 40px
    display flex
    align-items center
    justify-content center
    .label
      font-size 13px
      width 870px
      display flex
      align-items center
      height 20px
      a  
        text-align center
        margin 0 15px
        color #71777C
      .router-link-active
        color rgb(0,127,255)
      a:hover
        color rgb(0,127,255)
    .target 
      margin-left 30px
      font-size 14px
      color #71777C
      cursor pointer
      &:hover
        color rgb(0,127,255)
</style>