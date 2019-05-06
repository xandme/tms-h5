<template>
  <div>
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container" style="margin-top:15px;">
        <div class="row" style="padding: 10px;margin-top: -15px;">
          <div class="input-group">
				<span class="input-group-addon" id="search-input" style="">
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-chazhao"></use>
					</svg>
				</span>
            <input type="text" class="form-control" placeholder="搜影片" aria-describedby="search-input" id="sec"
                   style="border-left: none;height: 35px;" @keyup.enter="submit">
            <span class="input-group-addon">
                <router-link to="/">
                  <span style="padding: 0;color: black;"><span>取消</span></span>
                </router-link>
            </span>
          </div>
        </div>
      </div>
    </nav>
    <div class="container-fluid" style="padding: 56px 15px;">
      <div class="row" v-show="current==0">
        <div class="col-xs-12 list-group my-list-group" style="padding: 0;">
          <div class="list-group-item">
            <span>搜索记录</span>
            <div class="text-right my-middle-list" style="" @click="clearHist">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-shanchu"></use>
              </svg>
              <span style="">清除记录&nbsp;&nbsp;</span>
            </div>
          </div>
          <ul class="history">
            <li class="list-group-item" v-for="(item,index) in menuHistory" :key="index" @click="clickHist(item)">{{
              item }}
            </li>
          </ul>
        </div>
      </div>
      <div class="row" v-show="current==1">
        <div id="home-film-list" class="col-xs-12 list-group my-list-group">
          <van-list v-model="list.loading" :finished="list.finished" finished-text="没有更多了" @load="onLoad()">
            <div v-for="item in list.items" :key="item.filmId">
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
                        <div class="col-xs-12">评分：&nbsp;{{ item.filmAvgScore * 10 }}</div>
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
  </div>
</template>

<script>
  import {fetchList} from "@/api/film_info"

  export default {
    name: "Search",
    data() {
      return {
        itemName: '',
        menuHistory: '',
        current: 0,
        list: {
          items: [],
          loading: false,
          finished: false,
          listQuery: {
            page_no: 0,
            page_size: 10,
            page_total: undefined,
            total: undefined,
            key: ''
          }
        }
      }
    },
    created() {
      console.log(1111111111111111);
      this.initLocalStorageArg("hi_001");
      console.log(this.itemName);
    },
    methods: {
      initLocalStorageArg(menucode) {
        $('.history>li').on('click', function () {
          var div = $(this).text();
          $('#sec').val(div);
        });
        this.itemName = "hist_" + menucode;
        this.initlocalStorage();
        // this.showHistDom();
      },
      initlocalStorage() {
        var localStorageobj = localStorage.getItem(this.itemName);
        if (localStorageobj) {
          console.log("???")
          console.log(localStorageobj)
        } else {
          localStorage.setItem(this.itemName, "[]");
          localStorageobj = localStorage.getItem(this.itemName);
        }
        this.menuHistory = JSON.parse(localStorageobj);
      },
      recordHist() {
        this.initlocalStorage();
        var value = $("#sec").val();
        if (!value) { //这里判断输入的value是否合法，也可以用自己的判断方式
          this.$toast.fail("你未输入搜索内容");
          return false;
        }

        //输入的内容localStorage有记录
        const _this = this
        if ($.inArray(value, _this.menuHistory) >= 0) {
          var keyval = Object.keys(_this.menuHistory).filter(function (x) {
            return _this.menuHistory[x] == value
          }).toString();
          _this.menuHistory.splice(Number(keyval), 1); //splice(index,1):index代表value值在数组中对应到下标，1：表示删除
        } else {
          if (_this.menuHistory.length > 9) {
            _this.menuHistory.pop();
          } else {
          }
        }
        _this.menuHistory.unshift(value);
        localStorage.removeItem(_this.itemName);
        localStorage.setItem(_this.itemName, JSON.stringify(_this.menuHistory)); // 因为localStorage的value不能直接放数组，所以转换程json串后，再set
        // this.showHistDom();
      },
      clearHist() {
        localStorage.setItem(this.itemName, JSON.stringify([]));
        this.initlocalStorage();
        // this.showHistDom();
      },
      submit() {
        this.recordHist()
        this.list.listQuery.key = $("#sec").val()
        this.current = 1
        this.resetList()
        this.getSearchList()
      },
      clickHist(v) {
        $('#sec').val(v)
        this.list.listQuery.key = v
        this.current = 1
        this.resetList()
        this.getSearchList()
      },
      getSearchList() {
        let list = this.list
        list.listQuery.page_no = list.listQuery.page_no + 1
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
        })
      },
      onLoad() {
        setTimeout(() => {
          this.getSearchList()
        }, 1000)
      },
      resetList() {
        this.list.items = []
        this.list.loading = true
        this.list.finished = false
        this.list.listQuery.page_no = 0
      },
      handleBuy(item) {
        if (item.filmStatus === 0) {
          this.$toast("影片暂未上映，敬请期待！")
        } else {
          this.$router.push({name: 'arrangementList', query: {filmid: item.filmId}})
        }
      }
    }
  }
</script>

<style scoped>

</style>
