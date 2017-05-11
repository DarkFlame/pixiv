import { createApp } from './app'
const { app, router, store } = createApp()

// store替换使client rendering和server rendering匹配
if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__)
}

//  挂载#app   
router.onReady(() => {
  app.$mount('#app')
})


