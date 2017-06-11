<template>
    <div >
      <h1 v-for="item in recommendList">
        <img v-bind:src="'/'+ item.imageUrls.large"/>
      </h1>
    </div>


</template>

<script>
    import {
        routerView,
        routerLink
    } from 'vue-router'
    import {
        mapState,
        mapGetters,
        mapActions
    } from 'vuex'
    export default{
        created(){
            this.getRecommendList()
        },
        data(){
            return {}
        },
        computed: {
            ...mapGetters({
              recommendList : 'recommendList'
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
