<template>
<div>
  <nav class="navbar navbar-default navbar-fixed-top">
    <div class="container" style="margin-top:15px;">
      <div class="row">
        <router-link class="col-xs-1" to="/personal" style="padding-left: 15px;">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-fanhui"></use>
          </svg>
        </router-link>
        <strong class="col-xs-4" id="title" style="text-align: center;font-size: 16px;margin-left: 95px;">个人信息</strong>
      </div>
    </div>
  </nav>
  <div class="container-fluid" style="padding: 60px 15px;">
    <div class="row">
      <div class="col-xs-12 list-group my-list-group" style="padding: 0;">
        <a class="list-group-item">
          <span>头像</span>
          <span class="text-right my-middle-list" style="margin-top:-10px"><img class="img-circle" alt="" style="height: 40px" src="../../../static/img/img2.jpg">&nbsp;&nbsp;></span>
        </a>
        <a class="list-group-item">
          <span>昵称</span>
          <span class="text-right my-middle-list" style="">{{ userInfo.nickname }}&nbsp;&nbsp;></span>
        </a>
        <a class="list-group-item">
          <span>性别</span>
          <span class="text-right my-middle-list" style="">{{ userInfo.sex | sexFilter }}&nbsp;&nbsp;></span>
        </a>
        <a class="list-group-item">
          <span>个性签名</span>
          <span class="text-right my-middle-list" style="">&nbsp;&nbsp;></span>
        </a>
        <a class="list-group-item">
          <span>电话</span>
          <span class="text-right my-middle-list" style="">{{ userInfo.telephone | telFilter }}&nbsp;&nbsp;></span>
        </a>
        <a class="list-group-item">
          <span>生日</span>
          <span class="text-right my-middle-list" style="">{{ userInfo.birthday | dateFilter }}&nbsp;&nbsp;></span>
        </a>
        <a class="list-group-item">
          <span>修改密码</span>
          <span class="text-right my-middle-list" style="">&nbsp;&nbsp;></span>
        </a>
      </div>
    </div>
  </div>
	<nav class="navbar navbar-default navbar-fixed-bottom">
		<div class="container">
			<ul class="nav navbar-inner navbar-nav text-center">
				<li class="col-xs-12"><div @click="loginOut">退出登录</div></li>
			</ul>
		</div>
	</nav>
</div>
</template>

<script>
	import {getUserOne} from "@/api/user_info";
	export default {
		name: "personaInfo",
		data(){
			return {
				userInfo:{}
			}
		},
		created(){
			this.getUserInfo();
		},
		filters: {
			telFilter(value) {
				if (!value) {
					return ''
				} else {
					return value.slice(0,3) + '****' + value.slice(6,10);
				}
			}
		},
		methods: {
			getUserInfo() {
				let userId = '1';
				// let userId = JSON.stringify(sessionStorage.getItem('user'));
				getUserOne(userId).then(res => {
					console.log(res);
					if (res.error_code === 1000) {
						this.userInfo = res.extra;
					}
				})
			},
			loginOut(){

			}
		}
	}
</script>
