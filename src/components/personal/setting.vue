<template>
  <div>
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container" style="margin-top:15px;">
        <div class="row text-center">
          <router-link to="personal">
          <div class="col-xs-1" style="padding-left: 15px;">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-fanhui"></use>
            </svg>
          </div>
          </router-link>
          <strong id="title" style="font-size: 16px;">设置</strong>
        </div>
      </div>
    </nav>
    <div class="container-fluid" style="padding: 60px 15px;">
      <div class="row">
        <div class="col-xs-12 list-group my-list-group" style="padding: 0;">
          <router-link to="/personal/info">
          <div class="row list-group-item" style="margin-right: 0;">
            <div class="col-xs-4">
              <img class="img-circle" alt="" style="height: 80px" src="../../../static/img/img2.jpg">
            </div>
            <div class="col-xs-8" style="margin-top: 30px;padding: 0;color: black;">
              <div class="col-xs-10">{{ userInfo.nickname }}</div>
              <span class="text-right my-middle-list" style="">></span>
            </div>
          </div>
          </router-link>
          <a class="list-group-item">
            <span>我的优惠券</span>
            <span class="text-right my-middle-list" style="">8&nbsp;&nbsp;></span>
          </a>
          <a class="list-group-item"></a>
          <a class="list-group-item">
            <span>关于我们</span>
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
    name: "setting",
		data(){
    	return {
				userInfo:{}
			}
		},
		created(){
    	this.getUserInfo();
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

<style scoped>

</style>
