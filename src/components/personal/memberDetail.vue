<template>
  <div>
    <div class="" style="padding: 60px 45px;border: 0;position: fixed;background-color: #d4d4d4;">
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
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container" style="margin-top:15px;">
        <div class="row"  style="padding-left: 15px;">
          <router-link to="/member">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-fanhui"></use>
            </svg>
          </router-link>
          <strong class="col-xs-4" id="title"
                  style="text-align: center;font-size: 16px;margin-left: 95px;">会员卡详情</strong>
        </div>
      </div>
    </nav>
    <div class="container-fluid" style="padding: 190px 15px 0;bottom: 0;">
      <div class="row" style="">
        <div id="member_info" class="col-xs-12 list-group" style="padding: 0 0 30px;margin: 0;">
          <div class="list-group-item">
            <span>卡余额</span>
            <span class="text-right my-middle-list" style="">member_info.balance</span>
          </div>
          <div class="list-group-item">
            <span>累计充值</span>
            <span class="text-right my-middle-list" style="">member_info.totalRecharge</span>
          </div>
          <div class="list-group-item">
            <span>折扣等级</span>
            <span class="text-right my-middle-list" style="">member_type.discount</span>
          </div>
          <div class="list-group-item">
            <span>累计节省</span>
            <span class="text-right my-middle-list" style="">member_info.totalSave</span>
          </div>
          <a class="list-group-item">
            <span>修改密码</span>
            <span class="text-right my-middle-list" style="">></span>
          </a>
          <a class="list-group-item">
            <span>交易记录</span>
            <span class="text-right my-middle-list" style="">></span>
          </a>
        </div>
      </div>
    </div>
    <nav class="navbar navbar-default navbar-fixed-bottom">
      <div class="container">
        <ul class="nav navbar-inner navbar-nav text-center">
          <li class="col-xs-12"><a href="#" style="color: red;">移除卡片</a></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    name: "memberDetail"
  }
</script>

<style scoped>

</style>
