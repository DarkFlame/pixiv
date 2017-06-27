<template>
  <div>
    <p-img :purl="purl"></p-img>
    <router-link v-if="pid && pauthorId" :to="'/member/' + pauthorId +  '/Illust/'+ pid">
      <h1 class="title" :title="ptitle">{{ptitle}}</h1>
    </router-link>
    <router-link v-if="pauthor" :to="'/member/' + pauthorId + '/list'">
      <h1 class="title" :title="pauthor">{{pauthor}}</h1>
    </router-link>
  </div>

</template>

<script>

  import {
    routerView,
    routerLink
  } from 'vue-router'
  import PImg from '@/components/common/p-img'
  export default {
    name: 'PCard',
    components: {
      PImg
    },
    props: {
      purl: {
        type: String
      },
      pauthor: {
        type: String
      },
      pauthorId: {
        type: [String,Number]
      },
      pid: {
        type: [String,Number]
      },
      ptitle: {
        type: String
      }
    },
    data: function () {
      return {}
    }
  }
</script>

<style lang="stylus">

</style>




