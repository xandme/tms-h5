<template>
  <div>
    <nav id="personal-head" class="navbar navbar-fixed-top my-navbar" role="navigation" style="">
      <div class="container-fluid">
        <div class="navbar-header">
          <div class="row text-center">
		    <router-link to="/personal/info" class="col-xs-1 set">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-shezhi"></use>
              </svg>
            </router-link>
            <strong id="title-center">我的</strong>
            <router-link to="/" class="message">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-xiaoxi2"></use>
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </nav>
    <div class="container-fluid" style="padding-bottom: 50px;">
      <div class="row my-head" style="height: 260px;">
        <div class="col-xs-12" style="margin-top: 80px;margin-bottom: 20px;">
          <div class="col-xs-4">
            <img class="img-circle" alt="" style="height: 80px"
                 :src="user.headPhotoUrl">
          </div>
          <div class="col-xs-8" style="margin-top: 10px;padding: 0">
            <div class="col-xs-12" v-if="user!=''">{{ user.nickname }}</div>
            <div class="col-xs-12" v-if="user" @click="handleLogout">
              退出
            </div>
            <div class="col-xs-12" v-else>
              <router-link to="/login">登录</router-link>
            </div>

          </div>
        </div>
      </div>
      <div class="row text-center my-middle">
        <div class="col-xs-3" style="color: black" @click="handleOrder(0)">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-order2"></use>
          </svg>
          <br><span>全部订单</span>
        </div>
        <div class="col-xs-3" style="color: black" @click="handleOrder(1)">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-fukuan2"></use>
          </svg>
          <br><span>待付款</span>
        </div>
        <div class="col-xs-3" style="color: black" @click="handleOrder(2)">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-shiyong2"></use>
          </svg>
          <br><span>待使用</span>
        </div>
        <div class="col-xs-3" style="color: black" @click="handleOrder(3)">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-evaluate2"></use>
          </svg>
          <br><span>待评价</span>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 list-group my-list-group">
          <router-link to="/member" class="list-group-item">
            <span>我的会员卡</span>
            <span class="text-right my-middle-list" style="">&nbsp;&nbsp;></span>
          </router-link>
          <router-link class="list-group-item" to="/coupon">
            <span>我的优惠券</span>
            <span class="text-right my-middle-list" style="">&nbsp;&nbsp;></span>
          </router-link>
          <router-link to="/" class="list-group-item">
            <span>想看的电影</span>
            <span class="text-right my-middle-list" style="">&nbsp;&nbsp;></span>
          </router-link>
          <router-link to="/" class="list-group-item">
            <span>看过的电影</span>
            <span class="text-right my-middle-list" style="">&nbsp;&nbsp;></span>
          </router-link>
          <router-link to="/" class="list-group-item">
            <span>清理缓存</span>
            <span class="text-right my-middle-list" style="">&nbsp;&nbsp;></span>
          </router-link>
          <router-link to="/" class="list-group-item">
            <span>意见反馈</span>
            <span class="text-right my-middle-list" style="">&nbsp;&nbsp;></span>
          </router-link>
          <router-link to="/" class="list-group-item">
            <span>常见问题</span>
            <span class="text-right my-middle-list" style="">&nbsp;&nbsp;></span>
          </router-link>
          <router-link to="/" class="list-group-item">
            <span>关于我们</span>
            <span class="text-right my-middle-list" style="">&nbsp;&nbsp;></span>
          </router-link>
        </div>
      </div>
    </div>
    <nav class="navbar navbar-default navbar-fixed-bottom">
      <div class="container">
        <ul id="bottom-bar" class="nav navbar-inner navbar-nav text-center" style="margin: 0 -15px;">
          <li class="col-xs-4">
            <router-link to="/">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-home"></use>
              </svg>
              <br>首页
            </router-link>
          </li>
          <li class="col-xs-4">
            <router-link to="/market">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-shangcheng"></use>
              </svg>
              <br>商城
            </router-link>
          </li>
          <li class="col-xs-4">
            <router-link to="/personal">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-personal2"></use>
              </svg>
              <br>我的
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    name: "personal",
    data(){
      return {
        user: '',
        avatar: '@/assets/img/img2.jpg'
      }
    },
    created() {
      this.user = this.$store.getters.userInfo
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll)
    },
    methods: {
      handleScroll(e) {
        if ($(".navbar").offset().top > 50) {
          $("#personal-head").addClass("top-nav");
          $("#title-center").show();
        } else {
          $("#personal-head").removeClass("top-nav");
          $("#title-center").hide();
        }
      },
      handleOrder(index) {
        this.$router.push({name:'orderAll',query:{index: index}})
      },
      handleLogout() {
        this.$store.dispatch('FedLogOut').then(() => {
          this.$router.push({path: this.redirect || '/'})
        })
      }
    }
  }
</script>

<style scoped>

</style>
