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
					<a style="margin-right: 20px;float: right;" @click="favorite">
						<svg class="icon" aria-hidden="true">
							<use xlink:href="#icon-shoucang2" id="favor"></use>
						</svg>
					</a>
				</div>
			</div>
		</nav>
		<div class="container-fluid" style="padding: 60px 15px 0;min-height: 640px;">
			<!--显示影院信息-->
			<div class="row" style="padding: 10px 45px;background-color: rgba(113,85,197,0.64);">
				<div class="col-xs-3" style="padding: 0;">
					<img :src="film.url" alt="" style="height: 100px;width: 70px;">
				</div>
				<div class="col-xs-8 col-xs-offset-1" style="padding: 5px 15px 0 10px;">
					<div class="row">
						<div class="col-xs-12">
							<strong class="">{{ film.filmName }}</strong>
						</div>
					</div>
					<div class="row">
						<div class="col-xs-12">
							<div class="row film-info">
								<div class="col-xs-12">{{ theater.theaterName }}</div>
								<div class="col-xs-12">{{ arrangement.time }}</div>
								<div class="col-xs-12">{{ arrangement.film_hall_number }}号厅</div>
								<div class="col-xs-12">1排1座&nbsp;1排2座&nbsp;</div>
								<div class="col-xs-12">小计￥{{ filmOrder.order_amount }}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
    import {getTheaterDetail, getArrangementDetail} from "@/api/theater_info";
    import {getFilmDetail} from "@/api/film_info";
    import {getOrderDetail} from "@/api/order_info";
    export default {
        name: "payment",
        data() {
            return {
                aid: undefined,
                hid: undefined,
                film: '',
                theater: '',
                arrangement: '',
								filmOrder: ''
            }
        },
        created() {
            this.aid = this.$route.query.arrangementId;
            this.hid = this.$route.query.hallId;
            this.filmId = this.$route.query.filmId;
            this.orderId = this.$route.query.filmOrderId;
            // this.getList();
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
            handleBack() {
                this.$router.go(-1)
            }
				}
    }
</script>

<style scoped>

</style>
