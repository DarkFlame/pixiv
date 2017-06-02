import Vue from 'vue'
import {throttle} from 'lodash'



Vue.directive('p-scroll', {
  bind: function (el, binding, vnode) {
    window.addEventListener('scroll',throttle((e)=>{

      if((document.body.scrollTop + window.innerHeight)/document.body.scrollHeight > 0.8) {
        binding.value()
      }
    },1000))
  },
  unbind:function(){
  }
})
