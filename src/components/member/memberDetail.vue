<template>
  <div>
    <p class="worksListOthersTitle">个人资料</p>
    <table class="ws_table">
      <tbody>
      <tr>
        <td class="td1">昵称</td>
        <td class="td2">
          {{memberUser.user.name}}


        </td>
      </tr>
      <tr>
        <td class="td1">个人主页</td>
        <td class="td2">
          <a target="_blank" :href="memberUser.profile.webpage">
            {{memberUser.profile.webpage}}
</a>
        </td>
      </tr>

      <tr class="profile-comment">
        <td class="td1">自我介绍</td>
        <td class="td2">
          {{memberUser.user.comment}}

        </td>
      </tr>
      </tbody>
    </table>
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

    components: {
      PImg
    },
    computed: {
      ...mapGetters({
        memberUser: 'memberUser'
      })
    },
    methods: {},
    beforeDestroy(){
    }
  }
</script>

<style lang="stylus" scoped>
  .ws_table {
    .td1 {
      background: #f2f4f6;
      border-bottom: 1px solid #d6dee5;
      width: 140px;
    }

    .td2 {
      width: calc(100% - 140px);
      border-bottom: 1px solid #d6dee5;
    }
    border-left: 1px solid #d6dee5;
    border-right: 1px solid #d6dee5;
    border-top: 1px solid #d6dee5;
    margin: 15px 5px 0px 5px;
    word-break: break-all;
  }

  .worksListOthersTitle {
    background: #f2f4f6;
    font-size: 14px;
    font-weight: bold;
    padding: 5px 10px;
  }
</style>
