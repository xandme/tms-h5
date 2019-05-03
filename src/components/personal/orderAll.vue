<template>
  <div>
    <nav class="navbar navbar-fixed-top" role="navigation">
      <div id="order-head" class="container-fluid" style="background-color: #e6e6e6;">
        <div class="row text-center">
          <router-link class="col-xs-1" style="padding-left: 15px;" to="/personal">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-fanhui"></use>
            </svg>
          </router-link>
          <strong id="order-title" style="font-size: 16px;">我的订单</strong>
          <router-link style="float: right;margin-right: 20px;" to="/search">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-chazhao2"></use>
            </svg>
          </router-link>
        </div>
        <div id="orderHead" class="row text-center" style="color: black;padding-bottom: 0;">
          <router-link to="/order/all" class="col-xs-3 active-border">全部订单</router-link>
          <router-link to="/order/pay" class="col-xs-3">待付款</router-link>
          <router-link to="/order/use" class="col-xs-3">待使用</router-link>
          <router-link to="/order/evaluate" class="col-xs-3">待评价</router-link>
        </div>
      </div>
    </nav>
    <div class="container-fluid" style="padding: 90px 15px 0;min-height: 550px;background-color: #e6e6e6;">
      <div class="row" style="min-height: inherit;">
        <div class="col-xs-12 list-group" style="padding: 0 0 30px;margin: 0;min-height: inherit;">
          <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
            <div v-for="item in list" :key="item.filmId" class="list-group-item"
                 style="padding: 10px 15px;margin: 15px;border-radius: 10px;">
              <div class="row" style="font-size: 13px;">
                <div class="col-xs-8">影院名称</div>
                <div class="" style="float: right;margin-right: 15px;">订单状态</div>
              </div>
              <div class="row"
                   style="margin: 2px;border-bottom: 1px solid #e6dfdf;border-top: 1px solid #e6dfdf;padding: 15px 0;">
                <div class="col-xs-3" style="padding: 0;">
                  <img alt="" src="../../assets/img/img3.jpg" style="height: 80px;width: 56px;">
                </div>
                <div class="col-xs-9" id="order-info" style="padding: 0;">
                  <div class="row">
                    <div class="col-xs-12">反贪风暴4&nbsp;&nbsp;2张</div>
                  </div>
                  <div class="row">
                    <div class="col-xs-12" style="font-size: 13px;">2019年4月24日00:10</div>
                  </div>
                  <div class="row">
                    <div class="col-xs-12" style="font-size: 13px;">1号厅</div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-xs-12" style="font-size: 13px;">订单总价：￥71.6</div>
              </div>
            </div>
          </van-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {fetchfilmOrderList} from "@/api/film_info"

  export default {
    name: "orderAll",
    data() {
      return {
        list: [],
        loading: false,
        finished: false,
        listQuery: {
          page_no: 0,
          page_size: 10,
          page_total: undefined,
          total: undefined,
          type: ""
        },
      }
    },
    created() {
      this.getList()
    },
    methods: {
      getList() {
        const _this = this
        this.listQuery.page_no = this.listQuery.page_no + 1
        fetchfilmOrderList(this.listQuery).then(response => {
            console.log(response)
            _this.list = _this.list.concat(response.extra.data)
            _this.listQuery.page_total = response.extra.page_total
            _this.listQuery.total = response.extra.total
            _this.listQuery.page_no++
            // 加载状态结束
            _this.loading = false
            // 数据全部加载完成
            if (_this.listQuery.page_no >= _this.listQuery.page_total) {
              _this.finished = true
            }
          }
        )
        _this.loadingShow = false
      },
      onLoad() {
        setTimeout(() => {
          this.getList()
        }, 1000)
      }
    }
  }
</script>

<style scoped>

</style>
