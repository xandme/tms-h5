<template>
  <div>
    <nav class="navbar navbar-fixed-top" role="navigation">
      <div id="home-head" class="container-fluid">
        <div class="row text-center">
          <div class="col-xs-3">
            <router-link to="/theater">{{ defaultTheater.theaterName }}▼</router-link>
          </div>
          <strong style="font-size: 16px;margin-left: -25px;">竖店影视</strong>
          <router-link style="float: right;margin-right: 20px;" to="/search">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-chazhao"></use>
            </svg>
          </router-link>
        </div>
        <div id="filmHead" class="row text-center" style="color: #0f0f0f;padding-bottom: 0;">
          <div class="col-xs-6" :class="current==0?'active-border':''" @click="handleTab(1,0)">正在热映</div>
          <div class="col-xs-6" :class="current==1?'active-border':''" @click="handleTab(0,1)">即将上映</div>
        </div>
      </div>
    </nav>
    <div id="filmBody" class="container-fluid" style="padding-top: 90px;padding-bottom: 50px;">
      <div class="row">
        <div id="home-film-list" class="col-xs-12 list-group my-list-group">
          <van-list v-model="list[0].loading" :finished="list[0].finished" finished-text="没有更多了" @load="onLoad(0)">
            <div v-for="item in list[0].items" :key="item.filmId">
              <div class="list-group-item row">
                <div class="col-xs-3" style="padding: 0;">
                  <img :src="item.url" style="height: 100px;width: 70px;">
                </div>
                <div class="col-xs-9" style="padding: 5px 15px 0 10px;">
                  <div class="row">
                    <div class="col-xs-12">
                      <strong class="">{{ item.filmName }}</strong>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-xs-9">
                      <div class="row film-info">
                        <div class="col-xs-12">评分：&nbsp;{{ item.filmAvgScore * 10 | numFilter}}</div>
                        <div class="col-xs-12 overflow" style="width: 175px;">导演：&nbsp;{{ item.director }}</div>
                        <div class="col-xs-12 overflow" style="width:175px;">主演：&nbsp;{{ item.mainActor }}</div>
                      </div>
                    </div>
                    <div class="col-xs-3" style="padding: 0;margin-top: 40px;">
                      <button type="button" class="buy-ticket" @click="handleBuy(item)">购票</button>
                    </div>
                  </div>
                </div>
              </div>
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
  import {getTheaterDefault} from "@/api/theater_info";


  export default {
    name: "index",
    data() {
      return {
        current: 0,
        list: [{
          items: [],
          loading: true,
          finished: false,
          listQuery: {
            page_no: 0,
            page_size: 10,
            page_total: undefined,
            total: undefined,
            status: 1,
            theater_id: ''
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
        }],
        defaultTheater: ''
      }
    },
    filters: {
      numFilter(value) {
      	//评分保留一位小数
        let realVal = parseFloat(value).toFixed(1);
        let res;
        var xsd = realVal.toString().split('.');
        if (xsd.length === 1) {
          res = realVal.toString() + '.0';
        } else {
          res = realVal;
        }
        return res

      }

    },
    created() {
      this.defaultTheater = this.$store.state.theater.info
      console.log("~!@$%^&")
      console.log(this.defaultTheater)
      if (!this.defaultTheater) {
        this.getDefaultTheater()
      }
    },
    mounted() {
      this.list[0].listQuery.theater_id = this.defaultTheater.theaterId
      this.onLoad(0)
    },
    methods: {
      getList(index) {
        let list = this.list[index];
        list.listQuery.page_no = list.listQuery.page_no + 1;
        fetchList(list.listQuery).then(response => {
            console.log(response);
            list.items = list.items.concat(response.extra.data);
            list.listQuery.page_total = response.extra.page_total;
            list.listQuery.total = response.extra.total;
            list.listQuery.page_no++;
            // 加载状态结束
            list.loading = false;
            // 数据全部加载完成
            if (list.listQuery.page_no >= list.listQuery.page_total) {
              list.finished = true;
            }
          }
        )
      },
      onLoad(index) {
        setTimeout(() => {
          this.getList(index)
        }, 1000)
      },
      handleTab(status, index) {
        this.resetList(index)
        this.list[0].listQuery.status = status
        this.current = index
        console.log(this.list[0])
        console.log(status, index)
        this.getList(0)
      },
      resetList(index) {
        this.list[0].items = []
        this.list[0].loading = true
        this.list[0].finished = false
        this.list[0].listQuery.page_no = 0
        console.log(this.list[0])
      },
      handleBuy(item) {
        if (item.filmStatus === 0) {
          this.$toast("影片暂未上映，敬请期待！")
        } else {
          this.$router.push({name: 'arrangementList', query: {filmid: item.filmId}})
        }
      },
      getDefaultTheater() {
        getTheaterDefault().then(response => {
          this.defaultTheater = response.extra
          this.$store.dispatch('GetTheater', this.defaultTheater)
        })
      }
    }
  }
</script>

<style scoped>

</style>
