<template>
  <div id="app">
    <nav-bar></nav-bar>
    <login v-if="showLogin"></login>
    <router-view/>
  </div>
</template>

<script>
import navBar from "@/components/navbar"
import login from "@/components/login"
export default {
  components: {
      navBar,
      login
  },
  data() {
    return {
      showLogin: true
    }
  },
  method: {

  }
}
</script>

<style lang="stylus" scoped>
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video 
    margin 0
    padding 0
    border 0
    font inherit
    vertical-align baseline
  a
    text-decoration none
  #app 
    background-color #F4F5F5
    margin 0 auto
    padding-bottom 50px

</style>
