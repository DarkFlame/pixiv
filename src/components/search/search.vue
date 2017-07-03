<template>
  <div class="re_wrapper">
    <div v-if="searchIllust">
      <el-tabs v-model="bookmark" type="card" @tab-click="getSearchIllust">
        <el-tab-pane label="全部" name="0"></el-tab-pane>
        <el-tab-pane label="10000" name="10000"></el-tab-pane>
        <el-tab-pane label="5000" name="5000"></el-tab-pane>
        <el-tab-pane label="1000" name="1000"></el-tab-pane>
        <el-tab-pane label="500" name="500"></el-tab-pane>
        <el-tab-pane label="300" name="300"></el-tab-pane>
        <el-tab-pane label="100" name="100"></el-tab-pane>
        <el-tab-pane label="50" name="50"></el-tab-pane>

      </el-tabs>
      <section class="column-search-result" v-p-scroll="getSearchNextIllust">
        <div class="re_container">
          <div class="re_card_container" v-for="item in searchIllust.illusts" :key="item.key">
            <p-card class="card"
                    :pid="item.id"
                    :pauthor="item.user.account"
                    :pauthorId="item.user.id"
                    :ptitle="item.title"
                    :purl="item.imageUrls.squareMedium">

            </p-card>
          </div>
        </div>

        <div v-if="!searchIllust.illusts" class="_no-item">未找到任何相关结果</div>
      </section>
    </div>
    <div v-if="!searchIllust" class="search-tip">请输入关键词</div>

  </div>
</template>

<script>
  import {
    routerView,
    routerLink
  } from 'vue-router'
  import PCard from '@/components/common/p-card'
  import getNextUrlMix from '@/mixins/getNextUrl'
  import {
    mapState,
    mapGetters,
    mapActions
  } from 'vuex'
  export default{
    mixins: [getNextUrlMix],
    components: {
      PCard
    },
    created(){
      let {keywords} = this.$route.query
      if (keywords) this.initData(keywords)
    },
    computed: {
      ...mapGetters({
        searchIllust: 'searchIllust',
        bookmark: 'bookmark'
      }),
      bookmark: {
        get(){
          return this.$store.state.search.bookmark
        },
        set(val){
          this.$store.dispatch('setBookmark',val)
        }
      }

    },
    methods: {
      initData(keywords){
        if (!keywords) return
        this.$store.dispatch('setKeywords',keywords)
        this.getSearchIllust()
      },
      removeData(){
        this.setSearchIllust(null)
        this.setBookmark(0)
      },
      ...mapActions({
        getSearchIllust: 'getSearchIllust',
        setSearchIllust: 'setSearchIllust',
        setBookmark: 'setBookmark',
      }),
      getSearchNextIllust() {
        if (!this.searchIllust || !this.searchIllust.nextUrl) return
        this.getNextPage(this.searchIllust.nextUrl).then(({illusts,nextUrl}) => {
          this.setSearchIllust({
            illusts: [...this.searchIllust.illusts,...illusts],
            nextUrl
          })
          if (!nextUrl) return this.showNoPageMessage()
        }).catch(e => {
          this.showNoPageMessage(e && e.message)
        })
      }
    },
    beforeDestroy(){
      this.removeData()
    }
  }
</script>

<style lang="stylus" scoped>
  .column-search-result {
    ._image-items {
      margin: 10px 0 10px;
    }
    .image-item {
      padding: 10px 0;
      display: inline-block;
      position: relative;
      width: 50%;
      min-height: 360px;
      font-size: 12px;
      text-align: center;
      line-height: 1;
      vertical-align: top;
      color: #555;
      .image-container {
        width: 360px;
        height: 360px;
      }
    }
    ._no-item {
      margin: 250px 0;
      color: #000;
      font-size: 16px;
      line-height: 20px;
      text-align: center;
    }
  }

  .search-tip {
    text-align center
    min-height 720px
    color: #000;
    font-size: 16px;
    line-height: 20px;
    padding-top 250px
  }
</style>
