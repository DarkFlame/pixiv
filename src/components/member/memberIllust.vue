<template>
  <div v-if="memberIllust">
    <p-card class="card"
            :pid="memberIllust.id"
            :pauthor="memberIllust.user.account"
            :pauthorId="memberIllust.user.id"
            :ptitle="memberIllust.title"
            :purl="memberIllust.metaSinglePage.originalImageUrl">
    </p-card>
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
      this.getMemberIllust(this.$route.params.pid)
    },
    components: {
      PCard,
      PImg
    },
    computed: {
      ...mapGetters({
        memberIllust: 'memberIllust',
      })
    },
    methods: {
      ...mapActions({
        getMemberIllust: 'getMemberIllust',
        setMemberIllust: 'setMemberIllust',
      })
    },
    beforeDestroy(){
      this.setMemberIllust(null)
    }

  }
</script>

<style lang="stylus" scoped>


</style>
