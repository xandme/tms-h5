<template>
  <div>
    <div class="row"
         style="background-color:white;position: fixed;z-index:1030;padding: 60px 15px 0;border-bottom:1px solid gray;width: 100%;">
      <div class="col-xs-12" style="">南岸区竖店电影城.<a href="/tms/theaterList">切换</a></div>
    </div>
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container" style="margin-top:15px;">
        <div class="row">
          <strong class="col-xs-3" id="title"
                  style="text-align: center;font-size: 20px;margin-left: 140px;">商城</strong>
        </div>
      </div>
    </nav>
    <div class="container-fluid" style="padding: 81px 15px 100px;">
      <div class="row">
        <div class="col-xs-3" style="padding-left: 0;position: fixed;">
          <ul class="nav nav-pills nav-stacked">
            <li role="presentation" class="color-gray"><a href="#package">套餐</a></li>
            <li role="presentation" class="color-gray"><a href="#drink">饮品</a></li>
            <li role="presentation" class="color-gray"><a href="#snake">小吃</a></li>
            <li role="presentation" class="color-gray"><a href="#glasses">3D眼镜</a></li>
          </ul>
        </div>
        <ul style="padding-left: 94px;" class="col-xs-12 nav" id="goods-list">
          <li id="package">
            <span style="font-size: 12px;">套餐</span>
          </li>
          <li class="row">
            <div class="col-xs-4">
              <img class="" alt="" style="height: 80px" src="/img/img2.jpg">
            </div>
            <div class="col-xs-8">
              <span>商品名称</span><br>
              <span style="font-size: 12px;">商品描述</span><br>
              <div style="color:red;padding-top: 13px;padding-left: 5px;width: 150px;">￥32
                <svg class="icon" aria-hidden="true" style="float: right;">
                  <use xlink:href="#icon-jiahao"></use>
                </svg>
              </div>
            </div>
          </li>
          <li class="row">
            <div class="col-xs-4">
              <img class="" alt="" style="height: 80px" src="/img/img2.jpg">
            </div>
            <div class="col-xs-8">
              123
            </div>
          </li>
          <li class="row">
            <div class="col-xs-4">
              <img class="" alt="" style="height: 80px" src="/img/img2.jpg">
            </div>
            <div class="col-xs-8">
              123
            </div>
          </li>
          <li class="row">
            <div class="col-xs-4">
              <img class="" alt="" style="height: 80px" src="/img/img2.jpg">
            </div>
            <div class="col-xs-8">
              123
            </div>
          </li>
          <li id="drink">
            <span style="font-size: 12px;">饮品</span>
          </li>
          <li class="row">
            <div class="col-xs-4">
              <img class="" alt="" style="height: 80px" src="/img/img2.jpg">
            </div>
            <div class="col-xs-8">
              123
            </div>
          </li>
          <li class="row">
            <div class="col-xs-4">
              <img class="" alt="" style="height: 80px" src="/img/img2.jpg">
            </div>
            <div class="col-xs-8">
              123
            </div>
          </li>
          <li id="snake">
            <span style="font-size: 12px;">小吃</span>
          </li>
          <li class="row">
            <div class="col-xs-4">
              <img class="" alt="" style="height: 80px" src="/img/img2.jpg">
            </div>
            <div class="col-xs-8">
              123
            </div>
          </li>
          <li class="row">
            <div class="col-xs-4">
              <img class="" alt="" style="height: 80px" src="/img/img2.jpg">
            </div>
            <div class="col-xs-8">
              123
            </div>
          </li>
          <li class="row">
            <div class="col-xs-4">
              <img class="" alt="" style="height: 80px" src="/img/img2.jpg">
            </div>
            <div class="col-xs-8">
              123
            </div>
          </li>
          <li id="glasses">
            <span style="font-size: 12px;">3D眼镜</span>
          </li>
          <li class="row">
            <div class="col-xs-4">
              <img class="" alt="" style="height: 80px" src="/img/img2.jpg">
            </div>
            <div class="col-xs-8">
              123
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!--购物车bar-->
    <nav class="navbar navbar-default navbar-fixed-bottom" style="padding-bottom: 60px;height: 100px;">
      <div class="container" style="background-color: #3c3c3c;height: 40px;">
        <ul id="shopping-cart" class="nav row navbar-inner navbar-nav" style="margin: 0 -15px;">
          <li class="col-xs-12" style="">
            <div class="col-xs-1 col-xs-offset-1 img-circle"
                 style="margin-top: 5px;background-color: white;padding-left: 4px;padding-top: 3px;">
              <a href="#">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-gouwuche"></use>
                </svg>
              </a>
            </div>
            <div class="col-xs-1" style="color: white;padding-top: 10px;">￥0</div>
            <div class="col-xs-5 col-xs-offset-4 text-center"
                 style="background-color: #e38d13;height: 40px;float: right;margin-right: -15px;">
              <div style="padding-top: 10px;">结算(0)</div>
              <!--<button style="border-radius: 10px;border: 0;background-color: #e38d13">结&nbsp;&nbsp;&nbsp;&nbsp;算</button>-->
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <nav class="navbar navbar-default navbar-fixed-bottom">
      <div class="container">
        <ul id="bottom-bar" class="nav navbar-inner navbar-nav text-center" style="margin: 0 -15px;">
          <li class="col-xs-4">
            <router-link to="/">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-home"></use>
              </svg>
              <br>首页
            </router-link>
          </li>
          <li class="col-xs-4">
            <router-link to="/market">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-shangcheng-copy"></use>
              </svg>
              <br>商城
            </router-link>
          </li>
          <li class="col-xs-4">
            <router-link to="/personal">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-personal"></use>
              </svg>
              <br>我的
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    name: "market"
  }
</script>

<style scoped>

</style>
