<template>
  <div>
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container" style="margin-top:15px;">
        <div class="row">
          <!--<a class="col-xs-1" href="/tms/personal" style="padding-left: 15px;">-->
          <router-link to="/personal">
            <div class="col-xs-1" style="padding-left: 15px;">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-fanhui"></use>
              </svg>
            </div>
          </router-link>
          <!--</a>-->
          <strong class="col-xs-4" id="title" style="text-align: center;font-size: 16px;margin-left: 25%;">账号登录</strong>
        </div>
      </div>
    </nav>
    <div class="container-fluid" style="background-color: #f0f3f4;bottom: 0;height: 100%;padding-top: 113px;">
      <div class="row text-center" style="padding-bottom: 35px;">
        <div class="col-lg-offset-7 col-lg-3" style="">
          <img src="@/assets/img/logo.png" alt="" style="height: 130px; border-radius: 10px;">
        </div>
      </div>
      <div class="row" style="margin: 0;">
        <form name="form" class="form-validation col-lg-3 col-lg-offset-7">
          <div id="login-list" class="list-group">
            <div class="list-group-item">
              <input type="number" placeholder="请输入电话" class="form-control no-border" required>
            </div>
            <div class="list-group-item">
              <input type="password" placeholder="请输入密码" class="form-control no-border" required>
            </div>
          </div>
          <button id="login-btn" type="submit" class="btn btn-lg btn-block" onclick="" style="">登 录</button>
          <div class="text-center" style="padding: 2%;"><a href="#" style="color: black;">忘记密码</a></div>
          <div class="text-center" style="padding: 2%;"><a href="#" style="color: black;">
            <small>验证码登录</small>
          </a></div>
          <a class="btn btn-lg btn-default btn-block">注册一个账号</a>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "login"
  }
</script>

<style scoped>

</style>
