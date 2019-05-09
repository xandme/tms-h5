<template>
  <div>
    <div class="row"
         style="background-color:white;position: fixed;z-index:1030;padding: 60px 15px 0;border-bottom:1px solid gray;width: 100%;">
      <div class="col-xs-12" style="">{{ defaultTheater.theaterName }}
        <router-link to="/theater">切换</router-link>
      </div>
    </div>
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container" style="margin-top:15px;">
        <div class="row text-center">
          <strong id="title" style="font-size: 20px;">商城</strong>
        </div>
      </div>
    </nav>
    <div class="container-fluid" style="padding: 81px 15px 100px;">
      <div class="row">
        <div class="col-xs-3" style="padding-left: 0;position: fixed;z-index: 100">
          <ul id="market_nav" class="nav nav-pills nav-stacked">
            <li role="presentation" class="color-gray" @click="getListByType(1)">套餐</li>
            <li role="presentation" class="color-gray" @click="getListByType(2)">饮品</li>
            <li role="presentation" class="color-gray" @click="getListByType(3)">小吃</li>
            <li role="presentation" class="color-gray" @click="getListByType(4)">3D眼镜</li>
          </ul>
        </div>
        <ul style="padding-left: 94px;" class="col-xs-12 nav" id="goods-list">
          <li id="package">
            <span style="font-size: 12px;" v-text="typeName"></span>
          </li>
          <!--<li class="row">
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
          </li>-->
          <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
            <li class="row" v-for="item in list" :key="item.filmId">
              <div class="col-xs-4">
                <img class="" alt="" style="height: 80px;width: 80px;" :src="item.goodsPictureURL">
              </div>
              <div class="col-xs-8">
                <span>{{ item.goodsName }}</span><br>
                <span style="font-size: 12px;">{{ item.goodsDescription }}</span><br>
                <div style="color:red;padding-top: 13px;padding-left: 5px;width: 150px;">￥{{ item.goodsPrice }}
                  <svg class="icon" aria-hidden="true" style="float: right;" @click="addCart(item)">
                    <use xlink:href="#icon-jiahao"></use>
                  </svg>
                </div>
              </div>
            </li>
          </van-list>
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
            <div class="col-xs-1" style="color: white;padding-top: 10px;">￥{{ totalPrice }}</div>
            <div class="col-xs-5 col-xs-offset-4 text-center"
                 style="background-color: #e38d13;height: 40px;float: right;margin-right: -15px;">
              <div style="padding-top: 10px;" @click="handleCheckout">结算({{ totalNum }})</div>
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
  import {fetchList, checkOut} from "@/api/goods_info"

  export default {
    name: "market",
    data() {
      return {
        list: [],
        loadingShow: true,
        typeName: '套餐',

        loading: false,
        finished: false,
        listQuery: {
          page_no: 0,
          page_size: 10,
          page_total: undefined,
          total: undefined,
          type: ""
        },
        cartList: [],
        cart: {
          list: [],
          totalPrice: 0
        },
        defaultTheater: ''
      }
    },
    computed: {
      totalPrice() {
        let totalPrice = 0
        for (let i = 0; i < this.cart.list.length; i++) {
          let item = this.cart.list[i]
          console.log(item)
          totalPrice += item.goodsPrice * item.quantity
        }
        return totalPrice
      },
      totalNum() {
        return this.cart.list.length
      }
    },
    created(){
      this.defaultTheater = this.$store.state.theater.info
    },
    methods: {
      getList() {
        const _this = this
        this.listQuery.page_no = this.listQuery.page_no + 1
        fetchList(this.listQuery).then(response => {
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
      },
      getListByType(type) {
        console.log(">>>>>>>>>")
        if (type === 1) {
          this.typeName = "套餐"
        } else if (type === 2) {
          this.typeName = "饮品"
        } else if (type === 3) {
          this.typeName = "小吃"
        } else if (type === 4) {
          this.typeName = "3D眼镜"
        }
        this.listQuery.type = type
        this.listQuery.page_no = 0
        this.list = []
        this.getList()
      },
      addCart(row) {
        row.quantity = 1
        this.cart.list.push(row)
      },
      handleCheckout() {
        this.cart.totalPrice = this.totalPrice
        checkOut(this.cart).then(response => {
          this.$toast.success('结算成功')
          this.$router.push('/personal')
        })
      }
    }
  }
</script>

<style scoped>

</style>
