<template>
  <div>
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container" style="margin-top:15px;">
        <div class="row" style="padding-left: 15px;">
          <router-link to="/market">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-fanhui"></use>
            </svg>
          </router-link>
          <strong class="col-xs-4" id="title"
                  style="text-align: center;font-size: 16px;margin-left: 95px;">影城列表</strong>
          <a class="col-xs-3" style="padding-right: 0;">
            <!--<svg class="icon" aria-hidden="true">-->
            <!--<use xlink:href="#icon-fanhui"></use>-->
            <!--</svg>-->
            <span>重庆市</span>
          </a>
        </div>
      </div>
    </nav>
    <div class="container-fluid" style="padding: 60px 15px;">
      <div class="row">
        <!--<div style="padding: 0;">-->
        <ul class="col-xs-12 list-group my-list-group">
          <li class="list-group-item">
            <span>影院名称</span><br>
            <span>影院地址theaterAddress</span>
          </li>
          <li class="list-group-item">
            <span>影院名称</span><br>
            <span>影院地址theaterAddress</span>
          </li>
          <li class="list-group-item">
            <span>影院名称</span><br>
            <span>影院地址theaterAddress</span>
          </li>
          <li class="list-group-item">
            <span>影院名称</span><br>
            <span>影院地址theaterAddress</span>
          </li>
          <li class="list-group-item">
            <span>影院名称</span><br>
            <span>影院地址theaterAddress</span>
          </li>
          <li class="list-group-item">
            <span>影院名称</span><br>
            <span>影院地址theaterAddress</span>
          </li>
          <li class="list-group-item">
            <span>影院名称</span><br>
            <span>影院地址theaterAddress</span>
          </li>
        </ul>
        <!--</div>-->
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Theater"
  }
</script>

<style scoped>

</style>
