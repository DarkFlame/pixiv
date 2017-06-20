<template>
  <img v-bind:src="'/'+ url"/>

</template>

<script>


  export default {
    name: 'PCard',
    props: {
      url: {
        type: String
      },
    },
    data: function () {
      return {}
    }
  }
</script>

<style lang="stylus">

</style>




