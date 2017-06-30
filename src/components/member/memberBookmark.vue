<template>
  <div>
    <h1 class="column-title">{{memberUser.user.account}}的收藏</h1>
    <div class="re_container" v-if="memberBookmarkList" v-p-scroll="getNextBookmarkList">
      <div class="re_card_container" v-for="item in memberBookmarkList.illusts">
        <p-card class="card"
                :pid="item.id"
                :pauthor="item.user.account"
                :pauthorId="item.user.id"
                :ptitle="item.title"
                :purl="item.imageUrls.squareMedium">

        </p-card>
      </div>
    </div>
  </div>


</template>

<script>
  import {
    routerView,
    routerLink
  } from 'vue-router'
  //  import PCard from '@/components/common/p-card'
  import PCard from '@/components/common/p-card'
  import getNextUrlMix from '@/mixins/getNextUrl'
  import {
    mapState,
    mapGetters,
    mapActions
  } from 'vuex'
  export default{
    mixins: [getNextUrlMix],
    data(){
      return {}
    },
    created(){
        this.initData(this.$route)
    },
    components: {
      PCard,
    },
    computed: {
      ...mapGetters({
        memberBookmarkList: 'memberBookmarkList',
        memberUser: 'memberUser'
      })
    },
    methods: {
      getNextBookmarkList(){
        if (!this.memberBookmarkList || !this.memberBookmarkList.nextUrl) return
        this.getNextPage(this.memberBookmarkList.nextUrl).then(({illusts,nextUrl}) => {
          this.setMemberBookmarkList({
            illusts: [...this.memberBookmarkList.illusts,...illusts],
            nextUrl
          })
          if (!nextUrl) return this.showNoPageMessage()
        }).catch(e => {
          this.showNoPageMessage(e && e.message)
        })
      },
      initData(to){
        let userid = to.params.userid
        this.getMemberBookmarkList(userid)
      },
      ...mapActions({
        'getMemberBookmarkList': 'getMemberBookmarkList',
        'setMemberBookmarkList': 'setMemberBookmarkList'
      })
    },
    beforeDestroy(){
    }
  }
</script>

<style lang="stylus" scoped>
  .column-title {
    display: inline-block;
    margin: 10px 0 10px 18px;
    font-size: 20px;
    line-height: 1;
    font-weight: bold;
    vertical-align: middle;
  }
</style>
