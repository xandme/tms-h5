<template>
  <div>
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container" style="margin-top:15px;">
        <div class="row text-center">
          <router-link to="/personal">
            <div class="col-xs-1" style="padding-left: 15px;">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-fanhui"></use>
              </svg>
            </div>
          </router-link>
          <strong id="title" style="font-size: 16px;">账号登录</strong>
        </div>
      </div>
    </nav>
    <div class="container-fluid" style="background-color: #f0f3f4;bottom: 0;height: 640px;padding-top: 113px;">
      <div class="row text-center" style="padding-bottom: 35px;">
        <div style="">
          <img src="@/assets/img/logo.png" alt="" style="height: 130px; border-radius: 10px;">
        </div>
      </div>
      <div class="row" style="margin: 0;">
        <form :model="loginForm" name="form" class="form-validation">
          <div id="login-list" class="list-group">
            <div class="list-group-item">
              <input v-model="loginForm.username" type="number" placeholder="请输入电话" class="form-control no-border" required>
            </div>
            <div class="list-group-item">
              <input v-model="loginForm.password" type="password" placeholder="请输入密码" class="form-control no-border" required>
            </div>
          </div>
          <button id="login-btn" type="submit" class="btn btn-lg btn-block" @click="loginBtn">登 录</button>
          <div class="text-center" style="padding: 2%;"><a href="#" style="color: black;">忘记密码</a></div>
          <div class="text-center" style="padding: 2%;"><a href="#" style="color: black;">
            <small>验证码登录</small>
          </a></div>
          <a class="btn btn-lg btn-default btn-block">注册一个账号</a>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
	import {requestLogin} from '@/api/login'
  export default {
    name: "login",
		data() {
			return {
				loginForm: {
					username: '',
					password: ''
				},
				// rules: {
				// 	username: [
				// 		{required: true, message: '请输入电话', trigger: 'blur'}
				// 	],
				// 	password: [
				// 		{required: true, message: '请输入密码', trigger: 'blur'}
				// 	]
				// }
			}
		},
		methods: {
			loginBtn () {
				let loginParams = {username:this.loginForm.username.trim(), password:this.loginForm.password.trim()};
				if (loginParams.username.length !== 11) {
					console.log('error');
				}else if (loginParams.password.length < 6) {
				
				}else {
					requestLogin(loginParams).then(response => {
						console.log(response);
						let {code, msg, extra} = response;
						if (code !== 1000) {
							this.$toast.fail(msg);
						} else {
							sessionStorage.setItem('user', JSON.stringify(extra));
							this.$toast.success(msg);
							this.$router.push({ path: '/personal' });
						}
					});
				}
			}
		}
  }
</script>

<style scoped>

</style>
