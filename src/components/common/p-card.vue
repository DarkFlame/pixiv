<template>

</template>

<script>

  import {
    mapState,
    mapGetters,
    mapActions
  } from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        searchIllust: 'searchIllust'
      }),
      keywords: {
        get(){
          return this.$store.state.header.keywords
        },
        set(val){
          this.$store.dispatch('setKeywords',val)
        }
      }
    },
    methods: {
      ...mapActions({
        getSearchIllust:'getSearchIllust'
      })
    }
  }
</script>

<style lang="stylus">


</style>


