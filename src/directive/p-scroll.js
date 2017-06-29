import Vue from 'vue'
import {throttle} from 'lodash'

let EventCallback = function (cb) {
  return throttle((e) => {
    console.log('getNextUrl')
    if ((document.body.scrollTop + window.innerHeight) / document.body.scrollHeight > 0.8) {
      cb()
    }
  },4000)
}

Vue.directive('p-scroll',{
  bind: function (el,binding) {
    el.handler = EventCallback(binding.value)
    window.addEventListener('scroll',el.handler)
  },
  unbind: function (el,binding) {
    window.removeEventListener('scroll',el.handler)
  }
})
