<template>
  <div id="app">
    <PHeader></PHeader>
    <div id="wrapper"  >
      <div class="layout-body" >
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>



  import PHeader from './components/common/header.vue'
  import {
    routerView,
    routerLink
  } from 'vue-router'
  export default {
    name: 'app',
    components: {
      PHeader
    }
  }
</script>

<style lang="stylus">
  @import "./assets/static/global.styl"
  @import "./assets/static/card.styl"
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    color: #2c3e50;
  }

  ._icon, .rss a {
    display: inline-block;
    overflow: hidden;
    text-indent: -999px;
    white-space: nowrap;
    vertical-align: middle;
  }

  .sprites-logo {
    background-position: 0 -1535px;
    height: 50px;
    width: 130px;
    background-image: url(./assets/sprites-s30f7c00f21.png);
    background-repeat: no-repeat;
  }

  .layout-body {
    width: 972px;
    margin: 0 auto;
  }

  #wrapper {
    margin: 0 auto 0;
    width: 100%;
    background-color: #e4e7ee;
    min-height 960px
    overflow scroll
  }
</style>
