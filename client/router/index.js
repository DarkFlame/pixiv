import Vue from 'vue'
import App from '../app'
import VueRouter from 'vue-router'


Vue.use(VueRouter)



export function createRouter() {
  let navigatorAction = false
  const router = new VueRouter({
    mode: 'history',
    scrollBehavior: (to, from, savedPosition) => {
      if (to == from) {
        navigatorAction = true
      } else {
        navigatorAction = false
      }
    },
    routes: [
      { path: '*', component: App },

    ]
  })
  if (typeof window !== "undefined") {
    router.afterEach((to, from) => {
      setTimeout(() => {
        if (navigatorAction) {
          return;
        }
        if (document && to.meta.scrollToTop) {
          console.log(to)
          console.log("回到顶部")
          document.body.scrollTop = 0
        }
      }, 200)
    })
  }
  return router
}
