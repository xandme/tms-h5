<template>
  <div>
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container" style="margin-top:15px;">
        <div class="row">
          <router-link to="personal">
          <div class="col-xs-1" style="padding-left: 15px;">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-fanhui"></use>
            </svg>
          </div>
          </router-link>
          <strong class="col-xs-3" id="title" style="text-align: center;font-size: 16px;margin-left: 110px;">设置</strong>
        </div>
      </div>
    </nav>
    <div class="container-fluid" style="padding: 60px 15px;">
      <div class="row">
        <div class="col-xs-12 list-group my-list-group" style="padding: 0;">
          <router-link to="/person/info">
          <div class="row list-group-item" style="margin-right: 0;">
            <div class="col-xs-4">
              <img class="img-circle" alt="" style="height: 80px" src="../../../static/img/img2.jpg">
            </div>
            <div class="col-xs-8" style="margin-top: 30px;padding: 0">
              <div class="col-xs-10">昵称user.nickname</div>
              <span class="text-right my-middle-list" style="">></span>
            </div>
          </div>
          </router-link>
          <a class="list-group-item">
            <span>我的优惠券</span>
            <span class="text-right my-middle-list" style="">8&nbsp;&nbsp;></span>
          </a>
          <a class="list-group-item"></a>
          <a class="list-group-item">
            <span>关于我们</span>
            <span class="text-right my-middle-list" style="">&nbsp;&nbsp;></span>
          </a>
        </div>
      </div>
    </div>
    <nav class="navbar navbar-default navbar-fixed-bottom">
      <div class="container">
        <ul class="nav navbar-inner navbar-nav text-center">
          <li class="col-xs-12"><a href="/tms/index">退出登录</a></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    name: "setting"
  }
</script>

<style scoped>

</style>
