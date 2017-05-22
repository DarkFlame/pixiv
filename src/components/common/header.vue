<template>
  <header class="_global-header">
    <div class="layout-wrapper">
      <h1 class="title header-logo">
        <router-link to="/" class="_icon sprites-logo">pixiv</router-link>
      </h1>
      <nav class="navigation-list">
        <ul>
          <li class="home"><a href="/" class="current"><i class="_icon sprites-home"></i>首页</a></li>
        </ul>
      </nav>


      <nav class="category-list ">
        <ul>
          <li><a href="/novel" class="header-novel js-click-trackable-later" data-click-category="header-menu-ref"
                 data-click-action="novel" data-click-label="/index.php"><i class="_icon sprites-novel"></i>小说</a></li>
          <li><a href="https://www.pixiv.net/event.php" class="header-event js-click-trackable-later"
                 data-click-category="header-menu-ref" data-click-action="event" data-click-label="/index.php"><i
            class="_icon sprites-event"></i>活动</a></li>

        </ul>
      </nav>
      <form id="suggest-container" autocomplete="off" method="get" class="ui-search" action="/search.php">
        <input type="hidden" name="s_mode" value="s_tag">
        <div class="container"><input type="text" id="suggest-input" name="word" value="" placeholder="搜索"></div>
      </form>
    </div>
  </header>
</template>

<script>
  export default {}
</script>
<style lang="stylus">
  ._global-header {
    background-color: #fff;
    border-bottom: 1px solid #d6dee5;

    .layout-wrapper {
      position: relative;
      width: 970px;
      height: 115px;
      margin: 0 auto;
    }

    .navigation-list {
      position: absolute;
      left: 8px;
      bottom: 13px;
      font-size: 14px;
      line-height: 20px;

      li {
        display: inline-block;
        position: relative;
        padding-left: 24px;
        margin-right: 16px;
      }

    }

  }
</style>


