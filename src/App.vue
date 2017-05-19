<template>
  <div id="app">
    <a href="/" class="_icon sprites-logo">pixiv</a>
    <!--<img src="./assets/logo.png">-->
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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
</style>
