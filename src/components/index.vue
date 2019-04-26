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
          <div class="film-hot-tab col-xs-6 active-border" @click="cutTab">正在热映</div>
          <div class="film-coming-tab col-xs-6" @click="cutTab">即将上映</div>
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
    <div id="filmBody" class="container-fluid" style="padding-top: 90px;padding-bottom: 50px;">
      <div class="row">
        <div id="home-film-list" class="col-xs-12 list-group my-list-group">
          <van-list v-model="list[0].loading" :finished="list[0].finished" finished-text="没有更多了" @load="onLoad(0)">
            <div v-for="item in list[0].items" :key="item.filmId">
              <a class="list-group-item row">
                <div class="col-xs-3" style="padding: 0;">
                  <img :src="item.url" style="height: 100px;width: 70px;">
                </div>
                <div class="col-xs-9">
                  <div class="row">
                    <div class="col-xs-12">
                      <strong class="">{{ item.filmName }}</strong>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-xs-9">
                      <div class="row film-info">
                        <div class="col-xs-12">评分：&nbsp;{{ item.filmAvgScore * 10 }}</div>
                        <div class="col-xs-12 overflow" style="width: 175px;">导演：&nbsp;{{ item.director }}</div>
                        <div class="col-xs-12 overflow" style="width:175px;">主演：&nbsp;{{ item.mainActor }}</div>
                      </div>
                    </div>
                    <div class="col-xs-3" style="padding: 0;">
                      <button type="button" class="buy-ticket" @click="toTheater"><span>购票</span></button>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </van-list>
        </div>

        <div id="coming-film-list" class="col-xs-12 list-group my-list-group" style="display: none">
          <van-list v-model="list[1].loading" :finished="list[1].finished" finished-text="没有更多了" @load="onLoad(1)">
            <div v-for="item in list[1].items" :key="item.filmId">
              <a class="list-group-item row">
                <div class="col-xs-3" style="padding: 0;">
                  <img :src="item.url" style="height: 100px;width: 70px;">
                </div>
                <div class="col-xs-9">
                  <div class="row">
                    <div class="col-xs-12">
                      <strong class="">{{ item.filmName }}</strong>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-xs-9">
                      <div class="row">
                        <div class="col-xs-12">评分：&nbsp;{{ item.filmAvgScore * 10 | numFilter }}</div>
                        <div class="col-xs-12 overflow" style="width:181px;">导演：&nbsp;{{ item.director }}</div>
                        <div class="col-xs-12 overflow" style="width:181px;">主演：&nbsp;{{ item.mainActor }}</div>
                      </div>
                    </div>
                    <div class="col-xs-3" style="padding: 0;">
                      <button type="button" class="buy-ticket"><span>购票</span></button>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </van-list>
        </div>
      </div>
    </div>
    <div id="theaterBody" class="container-fluid" style="padding-top: 27px;padding-bottom: 50px;display: none;">
      <div class="row">
        <div id="home-theater-list" class="col-xs-12 list-group my-list-group">
          <van-list v-model="list[2].loading" :finished="list[2].finished" finished-text="没有更多了" @load="onLoad(2)">
            <div v-for="item in list[2].items" :key="item.theaterId">
              <a class="list-group-item row">
                <div class="col-xs-12">{{ item.theaterName }}</div>
                <div class="col-xs-12" style="font-size: 11px;">{{ item.theaterAddress }}</div>
                <div class="col-xs-12">{{ item.phoneNumber }}</div>
                <div class="col-xs-12">收藏标记</div>
              </a>
            </div>
          </van-list>
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
  import {fetchList} from "@/api/film_info"
  import {fetchList as fetchTheaterList} from "@/api/theater_info"

  export default {
    name: "index",
    data() {
      return {
        list: [{
          items: [],
          loading: false,
          finished: false,
          listQuery: {
            page_no: 0,
            page_size: 10,
            page_total: undefined,
            total: undefined
          }
        }, {
          items: [],
          loading: false,
          finished: false,
          listQuery: {
            page_no: 0,
            page_size: 10,
            page_total: undefined,
            total: undefined,
            status: 0
          }
        }, {
          items: [],
          loading: false,
          finished: false,
          listQuery: {
            page_no: 0,
            page_size: 10,
            page_total: undefined,
            total: undefined
          }
        }]
      }
    },
    filters: {
      numFilter(value) {

        // 截取当前数据到小数点后两位
        let realVal = parseFloat(value).toFixed(1);
        let res;
        var xsd = realVal.toString().split('.');
        if (xsd.length === 1) {
          console.log('一位');
          res = realVal.toString() + '.0';
        } else {
          console.log('两位');
          res = realVal;
        }
        return res

      }

    },
    methods: {
      cutTab() {
        const index = 2
        if (index == 2) {
          $('#coming-film-list').show()
          $('#home-film-list').hide()
          $('.film-hot-tab').removeClass('active-border')
          $('.film-coming-tab').addClass('active-border')
        } else if (index == 1) {
          $('#coming-film-list').hide()
          $('#home-film-list').show()
          $('.film-coming-tab').removeClass('active-border')
          $('.film-hot-tab').addClass('active-border')
        }
      },
      toTheater() {
        this.$router.push('/theaterList')
      },
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
        console.log("1111111111")
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
      },
      cutTab() {

      },
      getList(index) {
        const list = this.list[index]
        list.listQuery.page_no = list.listQuery.page_no + 1
        if (index !== 2) {
          fetchList(list.listQuery).then(response => {
              console.log(response)
              list.items = list.items.concat(response.extra.data)
              list.listQuery.page_total = response.extra.page_total
              list.listQuery.total = response.extra.total
              list.listQuery.page_no++
              // 加载状态结束
              list.loading = false
              // 数据全部加载完成
              if (list.listQuery.page_no >= list.listQuery.page_total) {
                list.finished = true
              }
            }
          )
        } else {
          fetchTheaterList(list.listQuery).then(response => {
              console.log(response)
              list.items = list.items.concat(response.extra.data)
              list.listQuery.page_total = response.extra.page_total
              list.listQuery.total = response.extra.total
              list.listQuery.page_no++
              // 加载状态结束
              list.loading = false
              // 数据全部加载完成
              if (list.listQuery.page_no >= list.listQuery.page_total) {
                list.finished = true
              }
            }
          )
        }
      },
      onLoad(index) {
        setTimeout(() => {
          this.getList(index)
        }, 1000)
      },
      cutTab(index) {

      }
    }
  }
</script>

<style scoped>

</style>
