<template>
  <div v-if="memberIllust">
    <div>
      <div class="ill-work">
        <div class="ill-thumbnail">
          <!--<el-tooltip effect="dark" content="点击下载图片" placement="right-start">-->
          <p-img
            :purl="memberIllust.imageUrls.large">
          </p-img>
          <!--</el-tooltip>-->
        </div>
      </div>
      <a class="ill-download" @click="downloadImgById(memberIllust.id)">
        下载原图
      </a>
    </div>

    <section v-if="illustRelatedList && illustRelatedList.illusts && illustRelatedList.illusts.length>0"
             v-p-scroll="getNextIllustRelatedList" class="ill-recommend">
      <div class="re_container">
        <h1>相关推荐</h1>
        <div class="re_card_container" v-for="item in illustRelatedList.illusts">
          <p-card class="card"
                  :pid="item.id"
                  :pauthor="item.user.account"
                  :pauthorId="item.user.id"
                  :ptitle="item.title"
                  :purl="item.imageUrls.squareMedium">
          </p-card>
        </div>
      </div>

    </section>

  </div>


</template>

<script>
  import {
    routerView,
    routerLink
  } from 'vue-router'
  import PCard from '@/components/common/p-card'
  import PImg from '@/components/common/p-img'
  import mime from 'mime-types'
  import getNextUrlMix from '@/mixins/getNextUrl'
  import {
    mapState,
    mapGetters,
    mapActions
  } from 'vuex'
  export default{
    mixins: [getNextUrlMix],
    created(){
      this.initData(this.$route)
    },
    beforeRouteUpdate(to,from,next){
      this.initData(to)
      next()
    },
    components: {
      PCard,
      PImg
    },
    computed: {
      ...mapGetters({
        memberIllust: 'memberIllust',
        illustRelatedList: 'illustRelatedList',
      })
    },
    methods: {
      initData(to){
        let pid = to.params.pid
        this.getMemberIllust(pid).then((data) => {
          this.$store.dispatch('setMemberTags',data && data.tags)
        })
        this.getIllustRelated(pid)
      },
      removeData(){
        this.setMemberIllust(null)
        this.setIllustRelated(null)
      },
      ...mapActions({
        getMemberIllust: 'getMemberIllust',
        getIllustRelated: 'getIllustRelated',
        setMemberIllust: 'setMemberIllust',
        setIllustRelated: 'setIllustRelated',
      }),
      getNextIllustRelatedList(){
        if (!this.illustRelatedList || !this.illustRelatedList.nextUrl) return
        this.getNextPage(this.illustRelatedList.nextUrl).then(({illusts,nextUrl}) => {
          this.setIllustRelated({
            illusts: [...this.illustRelatedList.illusts,...illusts],
            nextUrl
          })
          if (!nextUrl) return this.showNoPageMessage()
        }).catch(e => {
          this.showNoPageMessage(e && e.message)
        })
      },
      downloadImgById(){
        let pid = this.$route.params.pid
        this.$store.dispatch('downloadImgById',pid).then((res) => {
          let data = res.data
          let link = document.createElement('a')
          link.href = window.URL.createObjectURL(data)
          link.download = `${pid}.${mime.extension(data.type)}`
          link.click()
        })
      }
    },
    beforeDestroy(){
      this.removeData()
    }

  }
</script>

<style lang="stylus" scoped>

  .ill-work {
    position relative
  }

  .ill-recommend {
    padding 100px 0 0 0
  }

  .ill-thumbnail:before {
    background: url(../../assets/thumbnail-depth-large.png) repeat-x 0 0;
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 8px;
  }

  .ill-thumbnail {
    display: inline-block;
    position: relative;
    -webkit-box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    padding: 0 0 4px 0;
  }

  .ill-download {
    display: block;
    margin: 9px auto 16px;
    width: 240px;
    line-height: 40px;
    border-radius: 4px;
    font-size: 14px;
    background-color: #009cff;
    color: #fff;
    transition: background-color 0.2s;
    cursor: pointer
  }

  .ill-download:hover {
    background-color: #008fea;
    text-decoration: none;
  }
  .re_container h1{
    border-radius: 2px 2px 0 0;
    margin: 2px 2px 0;
    padding: 0 5px;
    line-height: 2;
    font-size: 16px;
    font-weight: bold;
    background-color: #eef0f3;
  }

</style>
