<template>
    <div>
      asdasd
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
