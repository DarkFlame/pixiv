<template>
  <div id="app">
    <h1>HELLO WORLD</h1>
    <div class="wrap">
      <transition name="fade" mode="out-in">
        <!-- keep-alive排除article -->
        <keep-alive exclude="article">
          <router-view>
          </router-view>
        </keep-alive>
      </transition>
    </div>
    <footer class="footer">
      <p>Created by Lawliet Yue</p>
    </footer>
  </div>
</template>

<script>
    import {routerView,routerLink} from 'vue-router'
export default {
    name: 'app',
    created(){
        if(typeof window == 'undefined') {
            return;
        }
    }
}
</script>

<style lang="stylus">
  @import 'assets/stylus/main.styl'
  @import 'assets/stylus/markdown.styl'
  $footer-height = 60px
  #app
    width 100%
    height 100%
    
	.fade-enter-active, .fade-leave-active
    transition all .2s ease

  .fade-enter, .fade-leave-active
  	opacity 0 
    
  .wrap 
    min-height 100%
    margin-bottom -($footer-height)
  .wrap:after
    content ""
    display block
    height $footer-height
  .footer 
    height $footer-height
    text-align center
    color $grey
    text-align center
    line-height 20px
    a
      text-decoration none
      color $blue-link
      &:hover
        text-decoration underline
  @media screen and (max-width: 850px) 
    .fade-enter
      transform translate(30px, 0px)

    .fade-leave-active
      transform translate(-30px, 0px)
</style>
