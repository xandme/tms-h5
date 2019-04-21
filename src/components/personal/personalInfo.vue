<template>
<div>
  <nav class="navbar navbar-default navbar-fixed-top">
    <div class="container" style="margin-top:15px;">
      <div class="row">
        <a class="col-xs-1" href="/tms/setting" style="padding-left: 15px;">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-fanhui"></use>
          </svg>
        </a>
        <strong class="col-xs-4" id="title" style="text-align: center;font-size: 16px;margin-left: 95px;">个人信息</strong>
      </div>
    </div>
  </nav>
  <div class="container-fluid" style="padding: 60px 15px;">
    <div class="row">
      <div class="col-xs-12 list-group my-list-group" style="padding: 0;">
        <a class="list-group-item">
          <span>头像</span>
          <span class="text-right my-middle-list" style="margin-top:-10px"><img class="img-circle" alt="" style="height: 40px" src="/img/img2.jpg">&nbsp;&nbsp;></span>
        </a>
        <a class="list-group-item">
          <span>昵称</span>
          <span class="text-right my-middle-list" style="">user.nickname&nbsp;&nbsp;></span>
        </a>
        <a class="list-group-item">
          <span>性别</span>
          <span class="text-right my-middle-list" style="">user.sex&nbsp;&nbsp;></span>
        </a>
        <a class="list-group-item">
          <span>个性签名</span>
          <span class="text-right my-middle-list" style="">&nbsp;&nbsp;></span>
        </a>
        <a class="list-group-item">
          <span>电话</span>
          <span class="text-right my-middle-list" style="">user.telephone&nbsp;&nbsp;></span>
        </a>
        <a class="list-group-item">
          <span>生日</span>
          <span class="text-right my-middle-list" style="">user.birthday&nbsp;&nbsp;></span>
        </a>
        <a class="list-group-item">
          <span>修改密码</span>
          <span class="text-right my-middle-list" style="">&nbsp;&nbsp;></span>
        </a>
      </div>
    </div>
  </div>
</div>
</template>

<script>
    export default {
        name: "personaInfo"
    }
</script>

<style scoped>

</style>
