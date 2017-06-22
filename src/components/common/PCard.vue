<template>
  <div>
    <img v-bind:src="'/'+ purl"/>
    <router-link v-if="ptitle" :to="'/memberIllust/'+pid">
      <h1 class="title" :title="ptitle">{{ptitle}}</h1>
    </router-link>
    <router-link v-if="pauthor" to="/">
      <h1 class="title" :title="pauthor">{{pauthor}}</h1>
    </router-link>
  </div>

</template>

<script>

  import {
    routerView,
    routerLink
  } from 'vue-router'
  export default {
    name: 'PCard',
    props: {
      purl: {
        type: String
      },
      pauthor: {
        type: String
      },
      pauthorId: {
        type: Number
      },
      pid: {
        type: String
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




