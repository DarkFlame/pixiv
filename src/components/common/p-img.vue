<template>
  <div>
    <img v-bind="widthObj" v-bind:src="'/'+ purl"/>
  </div>

</template>

<script>

  export default {
    name: 'PImg',
    props: {
      purl: {
        type: String
      },
      type: {
        type: String
      }
    },
    data: function () {
      return {}
    },
    computed: {
      widthObj: function () {
        return this.type === 'small' ? {
          width: 150,
          height: 150
        } : {}
      }
    }
  }
</script>

<style lang="stylus">

</style>




