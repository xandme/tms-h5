<template>
  <div>
    <nav class="navbar navbar-fixed-top my-navbar" role="navigation" style="">
      <div class="container-fluid">
        <div class="navbar-header">
          <div class="row">
            <a class="col-xs-1 set" href="/tms/setting">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-shezhi"></use>
              </svg>
            </a>
            <strong class="col-xs-3" id="title-center">我的</strong>
            <a class="message">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-xiaoxi2"></use>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
    <div class="container-fluid" style="padding-bottom: 50px;">
      <div class="row my-head" style="height: 260px;">
        <div class="col-xs-12" style="margin-top: 80px;margin-bottom: 20px;">
          <div class="col-xs-4">
            <img class="img-circle" alt="" style="height: 80px" src="/img/img2.jpg">
          </div>
          <div class="col-xs-8" style="margin-top: 10px;padding: 0">
            <div class="col-xs-12">昵称user.nickname</div>
            <div class="col-xs-12"><a href="/tms/login">登录</a></div>
          </div>
        </div>
      </div>
      <div class="row text-center my-middle">
        <div class="col-xs-3">
          <a href="" style="color: black">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-order2"></use>
            </svg>
            <br><span>全部订单</span>
          </a>
        </div>
        <div class="col-xs-3">
          <a href="" style="color: black">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-fukuan2"></use>
            </svg>
            <br><span>待付款</span>
          </a>
        </div>
        <div class="col-xs-3">
          <a href="" style="color: black">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-shiyong2"></use>
            </svg>
            <br><span>待使用</span>
          </a>
        </div>
        <div class="col-xs-3">
          <a href="" style="color: black">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-evaluate2"></use>
            </svg>
            <br><span>待评价</span>
          </a>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 list-group my-list-group">
          <a class="list-group-item" href="/tms/member">
            <span>我的会员卡</span>
            <span class="text-right my-middle-list" style="">2&nbsp;&nbsp;></span>
          </a>
          <a class="list-group-item" href="/tms/coupon">
            <span>我的优惠券</span>
            <span class="text-right my-middle-list" style="">8&nbsp;&nbsp;></span>
          </a>
          <a class="list-group-item">
            <span>想看的电影</span>
            <span class="text-right my-middle-list" style="">4&nbsp;&nbsp;></span>
          </a>
          <a class="list-group-item">
            <span>看过的电影</span>
            <span class="text-right my-middle-list" style="">14&nbsp;&nbsp;></span>
          </a>
          <a class="list-group-item">
            <span>清理缓存</span>
            <span class="text-right my-middle-list" style="">&nbsp;&nbsp;></span>
          </a>
          <a class="list-group-item">
            <span>意见反馈</span>
            <span class="text-right my-middle-list" style="">&nbsp;&nbsp;></span>
          </a>
          <a class="list-group-item">
            <span>常见问题</span>
            <span class="text-right my-middle-list" style="">&nbsp;&nbsp;></span>
          </a>
          <a class="list-group-item">
            <span>关于我们</span>
            <span class="text-right my-middle-list" style="">&nbsp;&nbsp;></span>
          </a>
        </div>
      </div>
    </div>
    <nav class="navbar navbar-default navbar-fixed-bottom">
      <div class="container">
        <ul id="bottom-bar" class="nav navbar-inner navbar-nav text-center" style="margin: 0 -15px;">
          <li class="col-xs-4"><router-link to="/">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-home"></use>
            </svg>
            <br>首页</router-link></li>
          <li class="col-xs-4"><router-link to="/market">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-shangcheng"></use>
            </svg>
            <br>商城</router-link></li>
          <li class="col-xs-4"><router-link to="/personal">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-personal2"></use>
            </svg>
            <br>我的</router-link></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    name: "personal",
    mounted() {
      window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
      handleScroll(e) {
        console.log(111)
        if ($(".navbar").offset().top > 50) {
          $(".navbar-fixed-top").addClass("top-nav");
          //$(".navbar-fixed-top").style.border-bottom('1px solid');
          $("#title-center").show();
        } else {
          $(".navbar-fixed-top").removeClass("top-nav");
          $("#title-center").hide();
        }
      }
    }
  }
</script>

<style scoped>

</style>
