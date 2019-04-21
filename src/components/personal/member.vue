<template>
  <div>
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container" style="margin-top:15px;">
        <div class="row" style="padding-left: 15px;">
          <router-link to="personal">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-fanhui"></use>
            </svg>
          </router-link>
          <strong class="col-xs-4" id="title"
                  style="text-align: center;font-size: 16px;margin-left: 95px;">我的会员卡</strong>
          <router-link to="setting">
            <div class="col-xs-1 col-xs-offset-2" style="padding-left: 15px;">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-jiahao1"></use>
              </svg>
            </div>
          </router-link>
        </div>
      </div>
    </nav>
    <div class="container-fluid" style="padding: 60px 15px 0;">
      <div class="row">
        <div class="col-xs-12 list-group" style="padding: 0 0 30px;margin: 0;">
          <div class="list-group-item" style="padding: 15px 45px;border: none;" @click="toDetail">
            <div class="row member-1" style="">
              <div class="col-xs-7 member-name-2"><strong style="font-family: 'Bodoni MT'">黄金卡</strong></div>
              <div class="col-xs-4">
                <svg class="icon" aria-hidden="true" style="font-size: 30px;height:100px;width:100px;size: 80px;">
                  <use xlink:href="#icon-huangjinhuiyuan"></use>
                </svg>
              </div>
              <div class="col-xs-7">No.2077 1801 0131</div>
              <div class="col-xs-5">卡余额:￥183.5</div>
            </div>
          </div>
          <a class="list-group-item" href="#" style="padding: 15px 45px;border: none;">
            <div class="row member-2" style="">
              <div class="col-xs-7 member-name-2"><strong style="font-family: 'Bodoni MT'">白金卡</strong></div>
              <div class="col-xs-4">
                <svg class="icon" aria-hidden="true" style="font-size: 30px;height:100px;width:100px;size: 80px;">
                  <use xlink:href="#icon-baijin1"></use>
                </svg>
              </div>
              <div class="col-xs-7">No.2077 1801 0131</div>
              <div class="col-xs-5">卡余额:￥183.5</div>
            </div>
          </a>
          <a class="list-group-item" href="#" style="padding: 15px 45px;border: none;">
            <div class="row member-3" style="">
              <div class="col-xs-7 member-name-2"><strong style="font-family: 'Bodoni MT'">钻石卡</strong></div>
              <div class="col-xs-4">
                <svg class="icon" aria-hidden="true" style="font-size: 30px;height:100px;width:100px;size: 80px;">
                  <use xlink:href="#icon-zuanshihuiyuan"></use>
                </svg>
              </div>
              <div class="col-xs-7">No.2077 1801 0131</div>
              <div class="col-xs-5">卡余额:￥183.5</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "member",
    methods: {
      toDetail() {
        this.$router.push('/member/detail')
      }
    }
  }
</script>

<style scoped>

</style>
