<template>
	<div>
		<nav class="navbar navbar-default navbar-fixed-top">
			<div class="container" style="margin-top:15px;">
				<div class="row text-center">
					<router-link class="col-xs-1" to="/">
						<svg class="icon" aria-hidden="true">
							<use xlink:href="#icon-fanhui"></use>
						</svg>
					</router-link>
					<strong id="title" style="font-size: 16px;">电影名称</strong>
					<div class="" style="float: right;margin-right: 20px;">
						<router-link to="/search">
							<svg class="icon" aria-hidden="true">
								<use xlink:href="#icon-chazhao"></use>
							</svg>
						</router-link>
					</div>
				</div>
			</div>
		</nav>
		<div class="container-fluid" style="padding: 60px 10px;">
			<div class="row">
				<ul class="col-xs-12 list-group my-list-group">
					<li class="list-group-item">
						<span>影院名称</span><br>
						<span>影院地址theaterAddress</span>
					</li>
					<li class="list-group-item">
						<span>影院名称</span><br>
						<span>影院地址theaterAddress</span>
					</li>
					<li class="list-group-item">
						<span>影院名称</span><br>
						<span>影院地址theaterAddress</span>
					</li>
					<li class="list-group-item">
						<span>影院名称</span><br>
						<span>影院地址theaterAddress</span>
					</li>
					<li class="list-group-item">
						<span>影院名称</span><br>
						<span>影院地址theaterAddress</span>
					</li>
					<li class="list-group-item">
						<span>影院名称</span><br>
						<span>影院地址theaterAddress</span>
					</li>
					<li class="list-group-item">
						<span>影院名称</span><br>
						<span>影院地址theaterAddress</span>
					</li>
				</ul>
				<!--</div>-->
			</div>
		</div>
	</div>
</template>

<script>
    export default {
        name: "theaterList"
    }
</script>

<style scoped>

</style>
