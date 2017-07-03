<template>
  <div>
    <div v-if="dayRank">
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
    <div  v-if="weekRank">
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
    <div  v-if="monthRank">
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
    computed:{
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
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
