<template>
  <div>
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container" style="margin-top:15px;">
        <div class="row">
          <router-link to="/personal">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-fanhui"></use>
            </svg>
          </router-link>
          <strong class="col-xs-4" id="title"
                  style="text-align: center;font-size: 16px;margin-left: 95px;">我的优惠券</strong>
        </div>
      </div>
    </nav>
    <div class="container-fluid" style="padding: 60px 15px 0;min-height: 607px;">
      <div class="row" style="min-height: inherit;">
        <div class="col-xs-12 list-group" style="padding: 0 0 30px;margin: 0;min-height: inherit;">
          <a class="list-group-item" href="" style="padding: 15px 40px;margin: 5px;border-radius: 5px;height: 130px;">
            <div class="row" style="">
              <div class="col-xs-3"
                   style="background-color: #6d6d6d;width: 50px;height: 50px;border-radius: 50%;padding: 0;margin-top: 15px;">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-dianying1"></use>
                </svg>
              </div>
              <div class="col-xs-7" style="">
                <div class="row">
                  <div class="col-xs-12" style="padding-top: 10px;">观影优惠券满30减5元</div>
                  <div class="col-xs-12" style="font-size: 12px;padding-top: 50px;">有效期至:2019.04.24</div>
                </div>
              </div>
              <div class="col-xs-3" style="">1</div>
            </div>
          </a>
          <a class="list-group-item" href="" style="padding: 15px 40px;margin: 5px;border-radius: 5px;height: 130px;">
            <div class="row" style="">
              <div class="col-xs-3"
                   style="background-color: #6d6d6d;width: 50px;height: 50px;border-radius: 50%;padding: 0;margin-top: 15px;">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-dianying1"></use>
                </svg>
              </div>
              <div class="col-xs-7" style="">
                <div class="row">
                  <div class="col-xs-12" style="padding-top: 10px;">观影优惠券满30减5元</div>
                  <div class="col-xs-12" style="font-size: 12px;padding-top: 50px;">有效期至:2019.04.24</div>
                </div>
              </div>
              <div class="col-xs-3" style="">1</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "coupon"
  }
</script>

<style scoped>

</style>
