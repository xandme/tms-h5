<template>
  <div>
    <nav class="navbar navbar-fixed-top" role="navigation">
      <div id="home-head" class="container-fluid">
        <div class="row text-center">
          <div class="col-xs-3">
            <a href="#">重庆▼</a>
          </div>
          <div id="home-btn-group" class="col-xs-6 btn-group" role="group" aria-label="head">
            <button type="button" id="btnFilm" class="btn btn-default active" style="left: 5%;" @click="clickFilm">
              电影
            </button>
            <button type="button" id="btnTheater" class="btn btn-default" style="left: 5%;" @click="clickTheater">
              影院
            </button>
          </div>
          <div class="col-xs-3">
            <router-link to="/search">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-chazhao"></use>
              </svg>
            </router-link>
          </div>
        </div>
        <div id="filmHead" class="row text-center" style="color: #0f0f0f;padding-bottom: 0;">
          <div class="col-xs-6 active-border" style="padding-bottom: 10px;color: #8d37e9;">正在热映</div>
          <div class="col-xs-6">即将上映</div>
          <div></div>
        </div>
        <div id="theaterHead" class="row text-center" style="color: #0f0f0f;display: none;">
          <div class="col-xs-6" style="padding-bottom: 10px;">全城
            <small>▼</small>
          </div>
          <div class="col-xs-6">价格
            <small>▼</small>
          </div>
          <div></div>
        </div>
      </div>
    </nav>
    <div id="filmBody" class="container-fluid" style="padding-top: 27px;padding-bottom: 50px;">
      <!--<div class="row">-->
      <!--<div class="col-xs-12">图片轮播</div>-->
      <!--</div>-->
      <div class="row">
        <div id="home-film-list" class="col-xs-12 list-group my-list-group">
          <a class="list-group-item row">
            <div class="col-xs-3" style="padding: 0;">
              <img src="/img/img3.jpg" style="height: 100px;width: 70px;">
            </div>
            <div class="col-xs-9">
              <div class="row">
                <div class="col-xs-12">
                  <strong class="">反贪风暴4</strong>
                  <!--<span class="">电影名称</span>-->
                </div>
              </div>
              <div class="row">
                <div class="col-xs-9">
                  <div class="row">
                    <div class="col-xs-12">评分&nbsp;8.8</div>
                    <div class="col-xs-12">导演:&nbsp;林德禄</div>
                    <div class="col-xs-12 overflow" style="width:181px;">主演:&nbsp;古天乐&nbsp;郑嘉颖&nbsp;林峯</div>
                  </div>
                </div>
                <div class="col-xs-3" style="padding: 0;">
                  <button type="button" class="buy-ticket"><span>购票</span></button>
                </div>
              </div>
            </div>
          </a>
          <a class="list-group-item row">
            <div class="col-xs-3" style="padding: 0;">
              <img src="/img/img2.jpg" style="height: 100px;width: 70px;">
            </div>
            <div class="col-xs-9">
              <div class="row">
                <div class="col-xs-12">
                  <strong class="">电影名称</strong>
                  <!--<span class="">电影名称</span>-->
                </div>
              </div>
              <div class="row">
                <div class="col-xs-9">
                  <div class="row">
                    <div class="col-xs-12">评分&nbsp;8.8</div>
                    <div class="col-xs-12">导演:&nbsp;去去去</div>
                    <div class="col-xs-12">主演:&nbsp;去去去&nbsp;哇哇哇</div>
                  </div>
                </div>
                <div class="col-xs-3" style="padding: 0;">
                  <button type="button" class="buy-ticket"><span>购票</span></button>
                </div>
              </div>
            </div>
          </a>
          <a class="list-group-item row">
            <div class="col-xs-3" style="padding: 0;">
              <img src="/img/img2.jpg" style="height: 100px;width: 70px;">
            </div>
            <div class="col-xs-9">
              <div class="row">
                <div class="col-xs-12">
                  <strong class="">电影名称</strong>
                  <!--<span class="">电影名称</span>-->
                </div>
              </div>
              <div class="row">
                <div class="col-xs-9">
                  <div class="row">
                    <div class="col-xs-12">评分&nbsp;8.8</div>
                    <div class="col-xs-12">导演:&nbsp;去去去</div>
                    <div class="col-xs-12">主演:&nbsp;去去去&nbsp;哇哇哇</div>
                  </div>
                </div>
                <div class="col-xs-3" style="padding: 0;">
                  <button type="button" class="buy-ticket"><span>购票</span></button>
                </div>
              </div>
            </div>
          </a>
          <a class="list-group-item row">
            <div class="col-xs-3" style="padding: 0;">
              <img src="/img/img2.jpg" style="height: 100px;width: 70px;">
            </div>
            <div class="col-xs-9">
              <div class="row">
                <div class="col-xs-12">
                  <strong class="">电影名称</strong>
                  <!--<span class="">电影名称</span>-->
                </div>
              </div>
              <div class="row">
                <div class="col-xs-9">
                  <div class="row">
                    <div class="col-xs-12">评分&nbsp;8.8</div>
                    <div class="col-xs-12">导演:&nbsp;去去去</div>
                    <div class="col-xs-12">主演:&nbsp;去去去&nbsp;哇哇哇</div>
                  </div>
                </div>
                <div class="col-xs-3" style="padding: 0;">
                  <button type="button" class="buy-ticket"><span>购票</span></button>
                </div>
              </div>
            </div>
          </a>
          <a class="list-group-item row">
            <div class="col-xs-3" style="padding: 0;">
              <img src="/img/img2.jpg" style="height: 100px;width: 70px;">
            </div>
            <div class="col-xs-9">
              <div class="row">
                <div class="col-xs-12">
                  <strong class="">电影名称</strong>
                  <!--<span class="">电影名称</span>-->
                </div>
              </div>
              <div class="row">
                <div class="col-xs-9">
                  <div class="row">
                    <div class="col-xs-12">评分&nbsp;8.8</div>
                    <div class="col-xs-12">导演:&nbsp;去去去</div>
                    <div class="col-xs-12">主演:&nbsp;去去去&nbsp;哇哇哇</div>
                  </div>
                </div>
                <div class="col-xs-3" style="padding: 0;">
                  <button type="button" class="buy-ticket"><span>购票</span></button>
                </div>
              </div>
            </div>
          </a>
          <a class="list-group-item row">
            <div class="col-xs-3" style="padding: 0;">
              <img src="/img/img2.jpg" style="height: 100px;width: 70px;">
            </div>
            <div class="col-xs-9">
              <div class="row">
                <div class="col-xs-12">
                  <strong class="">电影名称</strong>
                  <!--<span class="">电影名称</span>-->
                </div>
              </div>
              <div class="row">
                <div class="col-xs-9">
                  <div class="row">
                    <div class="col-xs-12">评分&nbsp;8.8</div>
                    <div class="col-xs-12">导演:&nbsp;去去去</div>
                    <div class="col-xs-12">主演:&nbsp;去去去&nbsp;哇哇哇</div>
                  </div>
                </div>
                <div class="col-xs-3" style="padding: 0;">
                  <button type="button" class="buy-ticket"><span>购票</span></button>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <!--<div class="row">-->
      <!--<div class="col-xs-12 text-center">-->
      <!--<div class="col-xs-4">热映影片</div>-->
      <!--<div class="col-xs-4 my-middle-list">全部32部&nbsp;&nbsp;></div>-->
      <!--</div>-->
      <!--</div>-->
      <!--<div class="row">-->
      <!--<div class="col-xs-12">-->
      <!--<a style="height: 100px;width:50px;color:#555;">-->
      <!--<img alt="" src="">-->
      <!--<span>电影名称</span>-->
      <!--<button>购买</button>-->
      <!--</a>-->
      <!--</div>-->
      <!--</div>-->
    </div>
    <div id="theaterBody" class="container-fluid" style="padding-top: 88px;padding-bottom: 50px;display: none;">
      <div class="row">
        <div id="home-theater-list" class="col-xs-12 list-group my-list-group">
          <a class="list-group-item row">
            <div class="col-xs-12">竖店影院重庆南坪万达店</div>
            <div class="col-xs-12" style="font-size: 11px;">重庆市南岸区南坪万达广场5楼</div>
            <div class="col-xs-12">023-61526548</div>
            <div class="col-xs-12">收藏标记</div>
          </a>
          <a class="list-group-item row">
            <div class="col-xs-12">影院名称</div>
            <div class="col-xs-12">影院地址</div>
            <div class="col-xs-12">联系电话</div>
            <div class="col-xs-12">收藏标记</div>
          </a>
        </div>
      </div>
    </div>
    <nav class="navbar navbar-default navbar-fixed-bottom">
      <div class="container">
        <ul id="bottom-bar" class="nav navbar-inner navbar-nav text-center" style="margin: 0 -15px;">
          <li class="col-xs-4">
            <router-link to="/">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-home-copy"></use>
              </svg>
              <br>首页
            </router-link>
          </li>
          <li class="col-xs-4">
            <router-link to="/market">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-shangcheng"></use>
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
    name: "index",
    methods: {
      clickTheater() {
        var btnFilm = $("#btnFilm");
        var btnTheater = $("#btnTheater");
        if (btnFilm.hasClass("active")) {
          btnFilm.removeClass("active");
          btnTheater.addClass("active");
          $("#filmHead").hide();
          $("#filmBody").hide();
          $("#theaterHead").show();
          $("#theaterBody").show();
        }
      },
      clickFilm() {
        var btnFilm = $("#btnFilm");
        var btnTheater = $("#btnTheater");
        if (btnTheater.hasClass("active")) {
          btnTheater.removeClass("active");
          btnFilm.addClass("active");
          $("#theaterHead").hide();
          $("#theaterBody").hide();
          $("#filmHead").show();
          $("#filmBody").show();
        }
      }
    }
  }
</script>

<style scoped>

</style>
