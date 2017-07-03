<template>
  <div>
    <div class="re_wrapper" v-if="dayRank">
      <h1>日排行榜单</h1>
      <div class="re_container">
        <div class="re_card_container" v-for="item in dayRank.illusts" :key="item.key">
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
    <div  class="re_wrapper" v-if="weekRank">
      <h1>周排行榜单</h1>
      <div class="re_card_container" v-for="item in weekRank.illusts" :key="item.key">
        <p-card class="card"
                :pid="item.id"
                :pauthor="item.user.account"
                :pauthorId="item.user.id"
                :ptitle="item.title"
                :purl="item.imageUrls.squareMedium">
        </p-card>
      </div>
    </div>
    <div class="re_wrapper"  v-if="monthRank">
      <h1>月排行榜单</h1>
      <div class="re_card_container" v-for="item in monthRank.illusts" :key="item.key">
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
  import PHeader from '@/components/common/header'
  import PCard from '@/components/common/p-card'
  import {
    mapState,
    mapGetters,
    mapActions
  } from 'vuex'

  export default {
    name: 'home',
    data () {
      return {}
    },
    created(){
      this.initData()
    },
    components: {
      PHeader,
      PCard
    },
    computed: {
      ...mapGetters({
        dayRank: 'dayRank',
        weekRank: 'weekRank',
        monthRank: 'monthRank',
      })
    },
    methods: {
      initData(){
        this.getDayRank()
        this.getWeekRank()
        this.getMonthRank()
      },
      ...mapActions({
        getDayRank: 'getDayRank',
        getWeekRank: 'getWeekRank',
        getMonthRank: 'getMonthRank'
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*.re_wrapper {*/
    /*border-radius: 5px;*/
    /*background-color: #fff;*/
    /*border: 1px solid #d6dee5;*/
    /*margin: 10px 0;*/
    /*padding: 0*/

  /*}*/
  .re_wrapper h1{
    border-radius: 2px 2px 0 0;
    margin: 2px 2px 0;
    padding: 0 5px;
    line-height: 2;
    font-size: 12px;
    font-weight: bold;
    background-color: #eef0f3;
  }
</style>
