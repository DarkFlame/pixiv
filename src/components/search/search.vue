<template>
  <div>
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
    <section v-if="searchIllust" class="column-search-result" v-p-scroll="getSearchNextIllust">
      <div class="re_container">
        <div class="re_card_container" v-for="item in searchIllust.illusts">
          <p-card class="card"
                  :pid="item.id"
                  :pauthor="item.user.name"
                  :pauthorId="item.user.id"
                  :ptitle="item.title"
                  :purl="item.imageUrls.squareMedium">

          </p-card>
        </div>
      </div>

      <div v-if="!searchIllust.illusts" class="_no-item">未找到任何相关结果</div>
    </section>

  </div>
</template>

<script>
  import {
    routerView,
    routerLink
  } from 'vue-router'
  import PCard from '@/components/common/p-card'
  import {
    mapState,
    mapGetters,
    mapActions
  } from 'vuex'
  export default{
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
      },
      ...mapActions({
        getSearchIllust: 'getSearchIllust',
        setSearchIllust: 'setSearchIllust',
      }),
      getSearchNextIllust() {
        this.$store.dispatch('getSearchNextIllust').then(res => {
          if (res && !res.nextUrl) this.$message({
            message: '已经显示全部图片',
            duration: 4000
          })
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
</style>
