<template>
  <div>
    <el-date-picker
      v-model="recommendDate"
      align="left"
      type="date"
      placeholder="选择日期"
      :picker-options="recommendDateOptions">
    </el-date-picker>
    <div class="re_container">
      <div class="re_card_container" v-for="item in recommendList">
        <p-card class="card" :pid="item.id" :pauthor="item.user.name" :pauthorId="item.user.id" :ptitle="item.title"
               :purl="item.imageUrls.squareMedium"></p-card>
      </div>
    </div>

  </div>


</template>

<script>
  import {
    routerView,
    routerLink
  } from 'vue-router'
  import Vue from 'vue'
  import {
    mapState,
    mapGetters,
    mapActions
  } from 'vuex'
  import PCard from '@/components/common/p-card'

  export default{
    created(){
      this.getRecommendList()
    },
    components: {
      PCard
    },
    data(){
      return {
        recommendDateOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick',new Date());
            }
          },{
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick',date);
            }
          },{
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick',date);
            }
          }]
        }
      }
    },
    computed: {
      recommendDate: {
        get(){
          return this.$store.state.recommend.recommendDate
        },
        set(val){
          this.$store.dispatch('setRecommendDate',val)
        }
      },
      ...mapGetters({
        recommendList: 'recommendList',
      }),
    },
    methods: {
      ...mapActions({
        getRecommendList: 'getRecommendList'
      }),
    }
  }
</script>
<style lang="stylus" scoped>
  .re_container
    padding 10px 0
  .re_card_container {
    position relative
    .card {
      width 50%
      float left
    }
  }

  .date-link {
    padding 10px 0
    a {
      font-size .9rem
    }
  }

  .date-after {
    float right
  }

  .fetch-day {
    display block
    margin 10px 0
    cursor pointer
    font-size 14px
  }
</style>
