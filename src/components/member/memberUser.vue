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
      <el-tabs class="no-bottom-border"
               v-model="memberActiveTab"
               type="border-card"
               @tab-click="memberRedirect"
      >
        <el-tab-pane v-for="({id,name},index) in memberTabList"
                     :key="id"
                     :name="id">
          <span slot="label"><i class="el-icon-date"></i>{{name}}</span>
        </el-tab-pane>

      </el-tabs>
      <div class="ill-container">
        <router-view>
        </router-view>
      </div>

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
      return {
        memberActiveTab: ''
      }
    },
    beforeRouteUpdate(to,from,next){
      this.initData(to)
      next()
    },
    watch: {
      '$route'(to,from) {
        //监听路由 设置tab的memberActiveTab值
        this.setMemberActiveTab(to)
      }
    },
    created(){
      this.initData(this.$route)
    },
    components: {
      PImg
    },
    computed: {
      ...mapGetters({
        memberUser: 'memberUser',
        memberTabList: 'memberTabList'
      })
    },
    methods: {
      initData(to){
        //初始化左侧用户信息 和 tab
        this.getMemberUser(to.params.userid)
        this.setMemberActiveTab(to)
      },
      removeData(){
        this.setMemberUser(null)
      },
      setMemberActiveTab(currentRoute){
        this.memberActiveTab = currentRoute.meta && currentRoute.meta.activeTab
      },
      memberRedirect(){
        let userid = this.$route.params.userid
        let item = this.memberTabList.find(({id}) => id === this.memberActiveTab)
        this.$router.push(item.getUrl(userid))
      },
      ...mapActions({
        getMemberUser: 'getMemberUser',
        setMemberUser: 'setMemberUser'
      })
    },
    beforeDestroy(){
        this.removeData()
    }
  }
</script>

<style lang="stylus" scoped>
  .ill-container {
    min-height 960px
    padding 50px 0 0 0
    text-align center
    background #fff
    border 1px solid #d1dbe5
    border-top none
    box-shadow 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04)
  }

  .no-bottom-border {
    border-bottom none
  }

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
