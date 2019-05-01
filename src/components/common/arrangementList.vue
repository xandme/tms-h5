<template>
	<div>
		<nav class="navbar navbar-default navbar-fixed-top" style="top:0;">
			<div class="container" style="margin-top:15px;">
				<div class="row text-center">
					<router-link class="col-xs-1" style="" to="/">
						<svg class="icon" aria-hidden="true">
							<use xlink:href="#icon-fanhui"></use>
						</svg>
					</router-link>
					<strong style="font-size: 16px;">重庆南岸区竖店电影城南坪店</strong>
					<router-link style="margin-right: 20px;float: right;" to="/setting">
						<svg class="icon" aria-hidden="true">
							<use xlink:href="#icon-shoucang2"></use>
						</svg>
					</router-link>
				</div>
			</div>
		</nav>
		<div class="container-fluid" style="padding: 60px 15px 0;min-height: 640px;">
			<div class="row" style="padding: 10px 0;min-height: 70px;">
				<div class="col-xs-12" style="padding: 3px 15px;">重庆南岸区竖店电影城南坪店</div>
				<div class="col-xs-12" style="padding: 4px 15px;font-size: 12px;color: #c1c1c1;">南岸区南坪惠工路13号5楼（元旦购物广场）</div>
			</div>
			<div class="row" style="padding: 10px 45px;background-color: rgba(113,85,197,0.64);">
				<div class="col-xs-3" style="padding: 0;">
					<img src="../../assets/img/img3.jpg" alt="" style="height: 80px;width: 56px;">
				</div>
				<div class="col-xs-8 col-xs-offset-1" style="padding: 5px 15px 0 10px;">
					<div class="row">
						<div class="col-xs-12">
							<strong class="">复仇者联盟4：终局之战</strong>
						</div>
					</div>
					<div class="row">
						<div class="col-xs-12">
							<div class="row film-info">
								<div class="col-xs-12">评分：&nbsp;9.0</div>
								<div class="col-xs-12">181分钟&nbsp;|&nbsp;动作&nbsp;|&nbsp;2019-04-24</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div id="date-list" class="row row-horizon list-group">
				<a class="col-xs-3 list-group-item active-date-list">5月1日</a>
				<a class="col-xs-3 list-group-item">5月2日</a>
				<a class="col-xs-3 list-group-item">5月3日</a>
				<a class="col-xs-3 list-group-item">5月4日</a>
				<a class="col-xs-3 list-group-item">5月5日</a>
				<a class="col-xs-3 list-group-item">5月6日</a>
			</div>
			<div class="row">
				<div id="arr-list" class="col-xs-12 list-group" style="padding: 0;margin: 0;bottom: 0;">
					<a href="#" class="row list-group-item">
						<div class="col-xs-2" style="padding-right: 0;width: 75px;">
							<div style="font-size: 16px;">09:30</div>
							<div style="font-size: 12px;color: #c1c1c1;">12:31散场</div>
						</div>
						<div class="col-xs-3 text-center">
							<div style="font-size: 12px;padding: 2px 0;">英语</div>
							<div style="font-size: 12px;color: #c1c1c1;">1号厅</div>
						</div>
						<div class="col-xs-4 text-right" style="font-size: 18px;color: #11a3f2;">
							<span>41.5元</span>
						</div>
						<div class="col-xs-2" style="padding: 7px 10px;">
							<button type="button" class="buy-ticket"><span>购票</span></button>
						</div>
					</a>
					<a href="#" class="row list-group-item">
						<div class="col-xs-2" style="padding-right: 0;width: 75px;">
							<div style="font-size: 16px;">12:50</div>
							<div style="font-size: 12px;color: #c1c1c1;">15:51散场</div>
						</div>
						<div class="col-xs-3 text-center">
							<div style="font-size: 12px;padding: 2px 0;">英语</div>
							<div style="font-size: 12px;color: #c1c1c1;">1号厅</div>
						</div>
						<div class="col-xs-4 text-right" style="font-size: 18px;color: #11a3f2;padding-top: 5px;">
							<span>41.5元</span>
						</div>
						<div class="col-xs-2" style="padding: 7px 10px;">
							<button type="button" class="buy-ticket"><span>购票</span></button>
						</div>
					</a>
					<a href="#" class="row list-group-item">
						<div class="col-xs-2" style="padding-right: 0;width: 75px;">
							<div style="font-size: 16px;">12:50</div>
							<div style="font-size: 12px;color: #c1c1c1;">15:51散场</div>
						</div>
						<div class="col-xs-3 text-center">
							<div style="font-size: 12px;padding: 2px 0;">英语</div>
							<div style="font-size: 12px;color: #c1c1c1;">1号厅</div>
						</div>
						<div class="col-xs-4 text-right" style="font-size: 18px;color: #11a3f2;">
							<span>41.5元</span>
						</div>
						<div class="col-xs-2" style="padding: 7px 10px;">
							<button type="button" class="buy-ticket"><span>购票</span></button>
						</div>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
    export default {
        name: "arrangementList"
    }
</script>

<style scoped>

</style>
