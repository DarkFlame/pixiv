<template>
  <div>
    <p-card class="card" :pid="memberIllust.id" :pauthor="memberIllust.user.account"
           :pauthorId="memberIllust.user.id" :ptitle="memberIllust.title"
           :purl="memberIllust.metaSinglePage.originalImageUrl"></p-card>
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
    created(){
      this.getMemberIllust(this.$route.params.pid)
    },
    components: {
      PCard
    },
    computed: {
      ...mapGetters({
        memberIllust: 'memberIllust',
      })
    },
    methods: {
      ...mapActions({
        getMemberIllust: 'getMemberIllust'
      })
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
