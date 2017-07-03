<template>
  <header class="_global-header">
    <div class="layout-wrapper">
      <h1 class="title header-logo">
        <router-link to="/" class="_icon sprites-logo">pixiv</router-link>
      </h1>
      <nav class="navigation-list">
        <ul>
          <li class="home">
            <router-link to="/" class="current">
              <i class="_icon sprites-home"></i>首页




            </router-link>
          </li>
          <li class="home">
            <router-link to="/recommend" class="current">
              <i class="_icon  sprites-stacc"></i>推荐




            </router-link>
          </li>
          <li class="home">
            <router-link to="/search" class="current">
              <i class="_icon  sprites-bookmarks"></i>关键词搜索




            </router-link>
          </li>
        </ul>
      </nav>
      <nav class="navigation-search">
        <el-input
          placeholder="搜索关键词"
          icon="search"
          v-model="keywords"
          :on-icon-click="getSearchIllust">
        </el-input>
      </nav>
    </div>
  </header>
</template>

<script>

  import {
    mapState,
    mapGetters,
    mapActions
  } from 'vuex'

  export default {
    name: 'PHeader',

    computed: {
      ...mapGetters({
        searchIllust: 'searchIllust'
      }),
      keywords: {
        get(){
          return this.$store.state.header.keywords
        },
        set(val){
          this.$store.dispatch('setKeywords',val)
        }
      }
    },
    methods: {

      getSearchIllust(){
        this.$store.dispatch('getSearchIllust').then(() => {
          this.$router.push('/search')
        })
      }
    }
  }
</script>

<style lang="stylus">
  ._global-header {
    background-color: #fff;
    border-bottom: 1px solid #d6dee5;
    .title {
      position: absolute;
      top: 12px;
    }
    .layout-wrapper {
      position: relative;
      width: 972px;
      height: 115px;
      margin: 0 auto;
    }
    .navigation-search {
      position: absolute;
      right: 8px;
      bottom: 0px;
    }

    .navigation-list {
      position: absolute;
      left: 8px;
      bottom: 13px;
      font-size: 14px;
      line-height: 20px;

      li {
        display: inline-block;
        position: relative;
        padding-left: 24px;
        margin-right: 16px;
        ._icon {
          position: absolute;
          left: 0;
          top: 0px;
        }
        a.current {
          font-weight: bold;
          color: inherit;
        }
        .sprites-home {
          background-image: url(../../assets/sprites-s30f7c00f21.png);
          background-repeat: no-repeat;
          background-position: 0 -1162px;
          height: 20px;
          width: 20px;
        }
        .sprites-stacc {
          background-image: url(../../assets/sprites-s30f7c00f21.png);
          background-repeat: no-repeat;
          background-position: 0 -2279px;
          height: 20px;
          width: 20px;
        }
        .sprites-bookmarks {
          background-image: url(../../assets/sprites-s30f7c00f21.png);
          background-repeat: no-repeat;
          background-position: 0 -82px;
          height: 20px;
          width: 20px;
        }
      }

    }

  }
</style>


