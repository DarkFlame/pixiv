<template>
  <div v-if="memberList">
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
  import {
    mapState,
    mapGetters,
    mapActions
  } from 'vuex'
  export default{
    beforeCreate(){
    },
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
      ...mapActions({
        'getMemberList': 'getMemberList'
      })
    }
  }
</script>

<style lang="stylus" scoped>

</style>
