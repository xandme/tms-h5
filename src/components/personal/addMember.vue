<template>
	<div>
		<nav class="navbar navbar-default navbar-fixed-top">
			<div class="container" style="margin-top:15px;">
				<div class="row text-center">
					<router-link to="/member">
						<div class="col-xs-1" style="padding-left: 15px;">
							<svg class="icon" aria-hidden="true">
								<use xlink:href="#icon-fanhui"></use>
							</svg>
						</div>
					</router-link>
					<strong id="title" style="font-size: 16px;">绑定会员卡</strong>
				</div>
			</div>
		</nav>
		<div class="container" style="padding: 100px 15px;background-color: #f0f3f4;height: 640px;">
			<div class="row">
				<form :model="memberForm" :rules="rules" name="form" class="form-validation">
					<div id="member_list" class="list-group">
						<div class="list-group-item">
							<svg class="icon" aria-hidden="true">
								<use xlink:href="#icon-qia"></use>
							</svg>
							<input type="number" v-model="memberForm.number" placeholder="会员卡卡号"  class="form-control no-border">
						</div>
						<div class="list-group-item">
							<svg class="icon" aria-hidden="true">
								<use xlink:href="#icon-suo"></use>
							</svg>
							<input type="password" v-model="memberForm.password" placeholder="会员卡密码" class="form-control no-border">
						</div>
						<div class="list-group-item">
							<svg class="icon" aria-hidden="true">
								<use xlink:href="#icon-dianhua"></use>
							</svg>
							<input type="number" v-model="memberForm.telephone" placeholder="电话" class="form-control no-border">
						</div>
						<div class="list-group-item">
							<svg class="icon" aria-hidden="true">
								<use xlink:href="#icon-anquan1"></use>
							</svg>
							<input type="number" v-model="memberForm.checkCode" placeholder="验证码" class="form-control no-border">
						</div>
					</div>
					<button id="add-member-btn" type="button" class="btn btn-block" @click="memberAdd">绑定会员卡</button>
				</form>
			</div>
			<div class="row text-center" style="font-size: 12px;color: #a4a4a4;">*登录后绑定影城会员卡,可享受会员卡价格!</div>
		</div>
	</div>
</template>

<script>
  import {addMember} from "@/api/member_info";

  export default {
		name: "addMember",
		data() {
			return {
				logining: false,
				memberForm: {
					number: '',
					password: '',
					telephone: '',
					checkCode: ''
				},
				rules: {
					number: [
						{required: true, message: '请输入卡号', trigger: 'blur'}
					],
					password: [
						{required: true, message: '请输入密码', trigger: 'blur'}
					],
					telephone: [
						{required: true, message: '请输入电话', trigger: 'blur'}
					],
					checkCode: [
						{required: true, message: '请输入验证码', trigger: 'blur'}
					]
				}
			}
		},
		methods: {
			memberAdd() {
        addMember(this.memberForm).then(response => {
          this.$toast.success("绑定成功")
          this.$router.push("/personal")
        })
			}
		}
	}
</script>

<style scoped>

</style>
