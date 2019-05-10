<template>
  <div>
    <nav class="navbar navbar-default navbar-fixed-top" style="top:0;">
      <div class="container" style="margin-top:15px;">
        <div class="row text-center">
          <div class="col-xs-1" @click="handleBack">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-fanhui"></use>
            </svg>
          </div>
          <strong style="font-size: 16px;">确认订单</strong>
        </div>
      </div>
    </nav>
    <div class="container-fluid" style="padding: 50px 15px 0;min-height: 640px;">
      <!--显示影院信息-->
      <div class="row" style="padding: 10px 25px;background-color: rgba(113,85,197,0.64);">
        <div class="col-xs-3" style="padding: 0;">
          <img :src="film.url" alt="" style="height: 100px;width: 70px;">
        </div>
        <div class="col-xs-8 col-xs-offset-1" style="padding: 5px 15px 0 10px;">
          <div class="row">
            <div class="col-xs-12">
              <strong class="">{{ film.filmName }}1</strong>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12">
              <div class="row pay-info">
                <div class="col-xs-12">{{ theater.theaterName }}</div>
                <div class="col-xs-12">{{ arrangement.time }}</div>
                <div class="col-xs-12">{{ arrangement.filmHallNumber }}号厅</div>
                <div class="col-xs-12"><span v-for="(item,index) in filmOrder.detailList"> {{ item.seatRow }}排{{ item.seatColumn }}排</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style="padding:5px;float: right;font-size: 13px;">总计
          <span style="color: red;"> ￥{{ filmOrder.orderAmount }}</span>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 list-group" style="padding: 0 0 30px;margin: 0;">
          <div class="list-group-item" style="padding: 15px 45px;border: none;"
               v-for="(item,index) in memberList" :key="index">
            <div class="row" :class="item.memberTypeId==1?'member-1':(item.memberTypeId==2?'member-2':'member-3')">
              <div class="col-xs-7 member-name-2"><strong style="font-family: 'Bodoni MT'"
                                                          v-text="item.memberTypeId==1?'黄金卡':(item.memberTypeId==2?'白金卡':'钻石卡')"></strong>
              </div>
              <div class="col-xs-4">
                <svg class="icon" aria-hidden="true" style="font-size: 30px;height:100px;width:100px;size: 80px;">
                  <use xlink:href="#icon-huangjinhuiyuan" v-if="item.memberTypeId==1"></use>
                  <use xlink:href="#icon-baijin1" v-else-if="item.memberTypeId==2"></use>
                  <use xlink:href="#icon-zuanshihuiyuan" v-else="item.memberTypeId==3"></use>
                </svg>
              </div>
              <div class="col-xs-7">No.{{ item.memberId }}</div>
              <div class="col-xs-5">卡余额:￥{{ item.balance }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <nav class="navbar navbar-default navbar-fixed-bottom" style="min-height: 30px;">
      <div class="container">
        <ul id="pay_btn" class="nav navbar-inner navbar-nav text-center" style="margin: 0 -15px;">
          <li class="col-xs-6">
            <div @click="deleteOrder">取消订单</div>
          </li>
          <li class="col-xs-6">
            <div @click="confirmOrder">确认付款</div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
  import {getTheaterDetail, getArrangementDetail} from "@/api/theater_info";
  import {getFilmDetail} from "@/api/film_info";
  import {getOrderDetail, confirmOrder as submitOrder} from "@/api/order_info";
  import {fetchList} from "@/api/member_info";

  export default {
    name: "payment",
    data() {
      return {
        aid: undefined,
        hid: undefined,
        film: '',
        theater: '',
        arrangement: '',
        filmOrder: '',
        memberList: [],
        member: ''
      }
    },
    created() {
      this.aid = this.$route.query.arrangementId;
      this.hid = this.$route.query.hallId;
      this.filmId = this.$route.query.filmId;
      this.orderId = this.$route.query.filmOrderId;
      this.getMemberList();
      this.getFilm(this.filmId);
      this.getArrangement(this.aid);
      this.getOrderInfo(this.orderId);
    },
    methods: {
      getFilm(id) {
        getFilmDetail(id).then(response => {
          this.film = response.extra;
        })
      },
      getArrangement(id) {
        getArrangementDetail(id).then(response => {
          this.arrangement = response.extra
        })
      },
      getTheater(id) {
        getTheaterDetail(id).then(response => {
          this.theater = response.extra
        })
      },
      getOrderInfo(id) {
        getOrderDetail(id).then(response => {
          this.filmOrder = response.extra
        })
      },
      getMemberList() {
        fetchList().then(response => {
          console.log(response)
          this.memberList = response.extra
        })
      },
      deleteOrder() {
        //将订单状态改为已取消（已失效），然后if(order_status!=0&&order_status!=1)时，退回卡余额(退不退余额不重要，主要是没记录用哪种卡付款)，
        this.$dialog.confirm({
          title: '提示',
          message: '确认取消订单？'
        }).then(() => {
          console.log("跳转到登陆页面")
          this.$router.push('/personal');
        }).catch(() => {
          // on cancel
        });
      },
      handleBack() {
        this.$router.go(-1)
      },
      confirmOrder() {
        this.$dialog.confirm({
          title: '提示',
          message: '确认付款？'
        }).then(() => {
          submitOrder(this.orderId).then(res => {
            this.$toast.success("付款成功")
            this.$router.push('/personal');
          })
        }).catch(() => {
          // on cancel
        });
      }
    }
  }
</script>

<style scoped>

</style>
