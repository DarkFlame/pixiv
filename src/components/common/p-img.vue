<template>
  <div>
    <img v-bind:src="'/'+ purl"/>
  </div>

</template>

<script>

  export default {
    name: 'PImg',
    props: {
      purl: {
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




