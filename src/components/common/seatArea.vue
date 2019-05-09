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
          <strong style="font-size: 16px;">重庆南岸区竖店电影城南坪店</strong>
        </div>
      </div>
    </nav>
    <div class="container" style="padding: 60px 15px 0;">
      <div class="row" id="seat_title">
        <div class="col-xs-12">{{ film.filmName }}</div>
        <div class="col-xs-12">{{ arrangement.date }}&nbsp;{{ arrangement.time }}～{{ arrangement.offTime }}</div>
      </div>
      <!--各种座位的意义-->
      <div class="row">
        <div class="col-xs-12 text-center" id="legend"></div>
      </div>
      <div class="demo clearfix" style="margin: 0 -15px;">
        <!--座位列表-->
        <div id="seat_area">
          <div class="front">屏幕</div>
        </div>
      </div>
      <div class="row">
        <!--展示选择的座位-->
        <ul id="seats_chose"></ul>
      </div>
    </div>
    <nav class="navbar navbar-default navbar-fixed-bottom">
      <div class="container">
        <div class="row text-center">
          <div class="col-xs-12" style="height: 50px;line-height: 50px;" @click="handleConfirm">
						<b>￥<span id="total_price">{{ computeTicketPrice }}</span></b>确认选座
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
  import {getArrangementHallSeat, getArrangementDetail} from "@/api/theater_info";
  import {confirmSeatSelected} from "@/api/order_info";
  import {getFilmDetail} from "@/api/film_info";

  export default {
    name: "seatArea",
    data() {
      return {
        aid: undefined,
        hid: undefined,
        film: '',
        arrangement: '',
        price: 0,
        list: [],
        unList: [],
        form: {
          selectedList: [],
          arrangementId: undefined,
          hallId: undefined,
          totalAmount: 0,
          price: 0
        },
        quantity: 0
      }
    },
    computed: {
      computeTicketPrice(){
        return this.price*this.quantity
      }
    },
    created() {
      this.aid = this.$route.query.arrangementId
      this.hid = this.$route.query.hallId
      this.filmId = this.$route.query.filmId;
      this.getList()
      this.getFilm(this.filmId)
      this.getArrangement(this.aid)
    },
    methods: {
      init() {
        console.log('111');
        console.log(this.list);
        const _this = this
        var price = this.price; //电影票的单价
        var $cart = $('#seats_chose'), //座位区
          $tickects_num = $('#tickects_num'), //票数
          $total_price = $('#total_price'); //电影票总价格
        var sc = $('#seat_area').seatCharts({
          // map: [//座位结构图 c 代表座位; 下划线 "_" 代表过道
          //   'cccccccccc',
          //   'cccccccccc',
          //   '__________',
          //   'cccccccc__',
          //   'cccccccc__',
          //   'cccccccc__',
          //   'cccccccc__',
          //   'cccccccc__',
          //   'cccccccccc',
          //   'ccc_______'
          // ],
          map: this.list,
          naming: {//设置行列等信息
            top: false, //不显示顶部横坐标（行）
            getLabel: function (character, row, column) { //返回座位信息
              return column;
            }
          },
          legend: {//定义图例
            node: $('#legend'),
            items: [
              ['c', 'available', '可选座'],
              ['c', 'unavailable', '已售出'],
              ['c', 'selected', '已选择'],
            ]
          },
          click: function () {
            console.log(_this.form.selectedList)
            if (this.status() === 'available') { //若为可选座状态，添加座位
              _this.form.selectedList.push((this.settings.row + 1) + '_' + this.settings.label)
              $('<li>' + (this.settings.row + 1) + '排' + this.settings.label + '座</li>')
                .attr('id', 'cart-item-' + this.settings.id)
                .data('seatId', this.settings.id)
                .appendTo($cart);
              $tickects_num.text(sc.find('selected').length + 1); //统计选票数量
              $total_price.text(getTotalPrice(sc) + price);//计算票价总金额
              _this.quantity++
              return 'selected';
            } else if (this.status() === 'selected') { //若为选中状态
              $tickects_num.text(sc.find('selected').length - 1);//更新票数量
              $total_price.text(getTotalPrice(sc) - price);//更新票价总金额
              $('#cart-item-' + this.settings.id).remove();//删除已预订座位
              _this.removeSelectedSeat(this.settings.id)
              _this.quantity--
              return 'available';
            } else if (this.status() === 'unavailable') { //若为已售出状态
              return 'unavailable';
            } else {
              return this.style();
            }
          }
        });
        //这里设置已售出的座位
        sc.get(this.unList).status('unavailable');

        console.log(sc)

        function getTotalPrice(sc) { //计算票价总额
          var total = 0;
          sc.find('selected').each(function () {
            total += price;
          });
          _this.form.totalAmount = total
          return total;
        }
      },
      getList() {
        getArrangementHallSeat(this.aid, this.hid).then(response => {
          this.list = response.extra.seatList //全部座位
          this.unList = response.extra.unavailableSeatList //已售出或损坏座位
          console.log(this.list)
          this.init()
        })
      },
      handleBack() {
        this.$router.go(-1)
      },
      removeSelectedSeat(seatId) {
        for (let index in this.form.selectedList) {
          if (this.form.selectedList[index] === seatId) {
            this.form.selectedList.splice(index)
          }
        }
      },
      handleConfirm() {
        this.form.arrangementId = this.aid;
        this.form.hallId = this.hid;
        console.log(this.form.selectedList)
        if (this.form.selectedList.length < 1) {
          this.$toast('您还未选择座位！')
        } else {
          this.form.totalAmount = this.computeTicketPrice
          this.form.price = this.price
          confirmSeatSelected(this.form).then(response => {
            // this.$toast.success('订单已生成！')
							console.log(response);
							const oid = response.extra
							//此处传订单编号
            this.$router.push({name: 'payment', query: {filmOrderId: oid,arrangementId: this.aid,hallId:this.hid,filmId:this.filmId}})
          })
          console.log(this.form)
        }
      },
      getFilm(id) {
        getFilmDetail(id).then(response => {
          this.film = response.extra
        })
      },
      getArrangement(id) {
        getArrangementDetail(id).then(response => {
          this.arrangement = response.extra
          this.price = this.arrangement.price
        })
      }
    }
  }
</script>

<style scoped>

</style>
