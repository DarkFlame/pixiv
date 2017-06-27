<template>
  <div class="layout-a" v-if="memberUser && memberUser.user">
    <div class="layout-column-1">
      <div class="ui-layout-west">
        <div class="_unit profile-unit">
          <router-link v-if="memberUser.user.id"
                       :to="'/member/' + $route.params.userid +  '/list'">
            <p-img
              :purl="memberUser.user.profileImageUrls.medium">
            </p-img>
            <h1 class="user">{{memberUser.user.name}}</h1>
          </router-link>
        </div>
      </div>
    </div>
    <div class="layout-column-2">
      <el-tabs v-model="memberActiveTab" type="card" @tab-click="memberRedirect">
        <el-tab-pane v-for="item in memberTabList" :label="item.name" :name="item.id"></el-tab-pane>
      </el-tabs>
      <router-view>
      </router-view>
    </div>
  </div>

</template>

<script>
  import {
    routerView,
    routerLink
  } from 'vue-router'
  //  import PCard from '@/components/common/p-card'
  import PImg from '@/components/common/p-img'
  import {
    mapState,
    mapGetters,
    mapActions
  } from 'vuex'
  export default{
    data(){
      return {}
    },
    beforeCreate(){
    },
    created(){
      this.getMemberUser(this.$route.params.userid)
    },
    components: {
      PImg
    },
    computed: {
      ...mapGetters({
        memberUser: 'memberUser',
        memberTabList: 'memberTabList',
        memberActiveTab: 'memberActiveTab',
      })
    },
    methods: {
      memberRedirect(){

      },
      ...mapActions({
        getMemberUser: 'getMemberUser'
      })
    }
  }
</script>

<style lang="stylus" scoped>
  .layout-a {
    width: 970px;
    margin: 0 auto;
    padding: 10px 0;
    .layout-column-2 {
      float: right;
      width: 784px;
    }
    .layout-column-1 {
      float: left;
      width: 176px;
      .ui-layout-west {
        float: left;
        width: 186px;
        ._unit {
          width: 176px;
          border-radius: 5px;
          position: relative;
          margin: 0 0 10px;
          background-color: #fff;
          border: 1px solid #d6dee5;

        }
        .profile-unit {
          text-align: center;
          background-color: #f2f4f6;
          .user {
            margin: 5px 5px 10px;
            font-size: 18px;
            font-weight: bold;
          }
        }
      }
    }
  }

  .layout-a:after {
    content ''
    clear both
    display table
  }
</style>
