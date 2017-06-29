<template>

  <div class="re_container" v-if="memberList" v-p-scroll="getNextMemberList">
    <div class="re_card_container" v-for="item in memberList.illusts">
      <p-card class="card"
              :pid="item.id"
              :pauthor="item.user.name"
              :pauthorId="item.user.id"
              :ptitle="item.title"
              :purl="item.imageUrls.squareMedium">

      </p-card>
    </div>
  </div>

</template>

<script>
  import {
    routerView,
    routerLink
  } from 'vue-router'
  import PCard from '@/components/common/p-card'
  import PImg from '@/components/common/p-img'
  import getNextUrlMix from '@/mixins/getNextUrl'
  import {
    mapState,
    mapGetters,
    mapActions
  } from 'vuex'
  export default{
    mixins: [getNextUrlMix],
    created(){
      this.getMemberList(this.$route.params.userid)
    },
    components: {
      PCard,
      PImg
    },
    computed: {
      ...mapGetters({
        memberList: 'memberList'
      })
    },
    methods: {
      getNextMemberList(){
        if (!this.memberList || !this.memberList.nextUrl) return
        this.getNextPage(this.memberList.nextUrl).then(({illusts,nextUrl}) => {
          if (!nextUrl) return this.showNoPageMessage()
          this.$store.dispatch('setMemberList',{
            illusts: [...this.memberList.illusts,...illusts],
            nextUrl
          })
        }).catch(e => {
          this.showNoPageMessage()
        })
      },
      ...mapActions({
        'getMemberList': 'getMemberList',
        'setMemberList': 'setMemberList'
      })
    },
    beforeDestroy(){
      this.setMemberList(null)
    }
  }
</script>

<style lang="stylus" scoped>

</style>
