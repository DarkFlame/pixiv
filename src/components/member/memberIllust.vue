<template>
  <div class="" v-if="memberIllust">
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

    <section v-if="illustRelatedList && illustRelatedList.illusts" class="ill-recommend" >
      <div class="re_container">
        <h1>推荐</h1>
        <div class="re_card_container" v-for="item in illustRelatedList.illusts">
          <p-card class="card"
                  :pid="item.id"
                  :pauthor="item.user.name"
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
  import {
    mapState,
    mapGetters,
    mapActions
  } from 'vuex'
  export default{
    beforeCreate(){
    },
    created(){
      let pid = this.$route.params.pid
      this.getMemberIllust(pid)
      this.getIllustRelated(pid)
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
      ...mapActions({
        getMemberIllust: 'getMemberIllust',
        getIllustRelated: 'getIllustRelated',
        setMemberIllust: 'setMemberIllust',
      }),
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
      this.setMemberIllust(null)
    }

  }
</script>

<style lang="stylus" scoped>

  .ill-work {
    position relative
  }

    .ill-recommend{
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

</style>
