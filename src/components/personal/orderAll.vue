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
          <div class="col-xs-3" :class="current===0?'active-border':''"
                       @click="handleActiveTab(0)">全部订单
          </div>
          <div class="col-xs-3" :class="current===1?'active-border':''"
                       @click="handleActiveTab(1)">待付款
          </div>
          <div class="col-xs-3" :class="current===2?'active-border':''"
                       @click="handleActiveTab(2)">待使用
          </div>
          <div class="col-xs-3" :class="current===3?'active-border':''"
                       @click="handleActiveTab(3)">待评价
          </div>
        </div>
      </div>
    </nav>
    <div class="container-fluid" style="padding: 90px 15px 0;min-height: 550px;background-color: #e6e6e6;">
      <div class="row" style="min-height: inherit;">
        <div class="col-xs-12 list-group" style="padding: 0 0 30px;margin: 0;min-height: inherit;">
          <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
            <div v-for="(item,index) in list" :key="index" class="list-group-item"
                 style="padding: 10px 15px;margin: 15px;border-radius: 10px;">
              <div class="row" style="font-size: 13px;">
                <div class="col-xs-8">{{ item.theaterDescription }}</div>
                <div class="" style="float: right;margin-right: 15px;">{{ item.orderStatus | statusFilter }}</div>
              </div>
              <div class="row"
                   style="margin: 2px;border-bottom: 1px solid #e6dfdf;border-top: 1px solid #e6dfdf;padding: 15px 0;">
                <div class="col-xs-3" style="padding: 0;">
                  <img alt="" :src="item.url" style="height: 80px;width: 56px;">
                </div>
                <div class="col-xs-9" id="order-info" style="padding: 0;">
                  <div class="row">
                    <div class="col-xs-12">{{ item.filmName }}&nbsp;&nbsp;{{ item.ticketQuantity }}张</div>
                  </div>
                  <div class="row">
                    <div class="col-xs-12" style="font-size: 13px;">{{ item.date }} {{ item.time }}</div>
                  </div>
                  <div class="row">
                    <div class="col-xs-12" style="font-size: 13px;">{{ item.filmHallName }}</div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-xs-12" style="font-size: 13px;">订单总价：￥{{ item.orderAmount }}</div>
              </div>
            </div>
          </van-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {fetchfilmOrderList} from "@/api/order_info"

  export default {
    name: "orderAll",
    data() {
      return {
        current: 0,
        list: [],
        loading: false,
        finished: false,
        listQuery: {
          page_no: 0,
          page_size: 10,
          page_total: undefined,
          total: undefined,
          status: null
        },
        status: [
          {
            code: 0,
            desc: '未付款'
          }, {
            code: 1,
            desc: '已失效'
          }, {
            code: 2,
            desc: '待使用'
          }, {
            code: 3,
            desc: '待评价'
          }
        ]
      }
    },
    filters: {
      statusFilter(value) {
        if (value === 0) {
          return '未付款'
        } else if (value === 1) {
          return '已失效'
        } else if (value === 2) {
          return '待使用'
        } else if (value === 3) {
          return '待评价'
        } else {
          return value
        }
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
      },
      onLoad() {
        setTimeout(() => {
          this.getList()
        }, 1000)
      },
      handleActiveTab(index) {
        this.current = index
        let s = undefined
        if (index === 1) {
          s = 0
        } else if (index === 2) {
          s = 2
        } else if (index === 3) {
          s = 3
        }
        this.resetList(s)
        this.getList()
      },
      resetList(status) {
        this.list = []
        this.loading = true
        this.finished = false
        this.listQuery.page_no = 0
        this.listQuery.status = status
      }
    }
  }
</script>

<style scoped>

</style>
