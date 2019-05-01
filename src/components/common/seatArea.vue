<template>
	<div>
		<nav class="navbar navbar-default navbar-fixed-top" style="top:0;">
			<div class="container" style="margin-top:15px;">
				<div class="row text-center">
					<router-link class="col-xs-1" style="" to="/arrangementList">
						<svg class="icon" aria-hidden="true">
							<use xlink:href="#icon-fanhui"></use>
						</svg>
					</router-link>
					<strong style="font-size: 16px;">重庆南岸区竖店电影城南坪店</strong>
				</div>
			</div>
		</nav>
		<div class="container" style="padding: 60px 15px 0;">
			<div class="row" id="seat_title">
				<div class="col-xs-12">复仇者联盟4：终局之战</div>
				<div class="col-xs-12">05-01&nbsp;09:30～12:31</div>
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
					<div class="col-xs-12" style="height: 50px;line-height: 50px;"><a href="#"><b>￥<span id="total_price">0</span></b>确认选座</a></div>
				</div>
			</div>
		</nav>
	</div>
</template>
<script>
    export default {
        name: "seatArea",
        mounted() {
            this.init();
        },
        methods: {
            init: function () {
                console.log('111');
                var price = 100; //电影票的单价
                var $cart = $('#seats_chose'), //座位区
                    $tickects_num = $('#tickects_num'), //票数
                    $total_price = $('#total_price'); //电影票总价格
                var sc = $('#seat_area').seatCharts({
                    map: [//座位结构图 c 代表座位; 下划线 "_" 代表过道
                        'cccccccccc',
                        'cccccccccc',
                        '__________',
                        'cccccccc__',
                        'cccccccc__',
                        'cccccccc__',
                        'cccccccc__',
                        'cccccccc__',
                        'cccccccccc',
                        'cc__cc__cc'
                    ],
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
                        if (this.status() === 'available') { //若为可选座状态，添加座位
                            $('<li>' + (this.settings.row + 1) + '排' + this.settings.label + '座</li>')
                                .attr('id', 'cart-item-' + this.settings.id)
                                .data('seatId', this.settings.id)
                                .appendTo($cart);
                            $tickects_num.text(sc.find('selected').length + 1); //统计选票数量
                            $total_price.text(getTotalPrice(sc) + price);//计算票价总金额
                            return 'selected';
                        } else if (this.status() === 'selected') { //若为选中状态
                            $tickects_num.text(sc.find('selected').length - 1);//更新票数量
                            $total_price.text(getTotalPrice(sc) - price);//更新票价总金额
                            $('#cart-item-' + this.settings.id).remove();//删除已预订座位
                            return 'available';
                        } else if (this.status() === 'unavailable') { //若为已售出状态
                            return 'unavailable';
                        } else {
                            return this.style();
                        }
                    }
                });
                //这里设置已售出的座位
                sc.get(['1_3', '1_4', '4_4', '4_5', '4_6', '4_7', '4_8']).status('unavailable');

                function getTotalPrice(sc) { //计算票价总额
                    var total = 0;
                    sc.find('selected').each(function () {
                        total += price;
                    });
                    return total;
                }
            }
        }
    }
</script>

<style scoped>

</style>
