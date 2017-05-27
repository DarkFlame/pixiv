<template>
  <div>
    <section class="column-search-result">
      <ul class="_image-items autopagerize_page_element">
        <li v-for="item in searchIllust.illusts" class="image-item">
          <img class="image-container" :src="'/' + item.imageUrls.squareMedium">
        </li>
      </ul>
    </section>
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
    computed: {
      ...mapGetters({
        searchIllust: 'searchIllust'
      })
    }
  }
</script>

<style lang="stylus" scoped>
  .column-search-result {
    ._image-items {
      margin: 10px 0 10px;
    }
    .image-item {
      padding: 10px 0;
      display: inline-block;
      position: relative;
      width: 50%;
      min-height: 360px;
      font-size: 12px;
      text-align: center;
      line-height: 1;
      vertical-align: top;
      color: #555;
      .image-container{
        width: 360px;
        height: 360px;
      }
    }
  }
</style>
