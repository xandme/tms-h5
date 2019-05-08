<template>
  <div>
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container" style="margin-top:15px;">
        <div class="row text-center" style="padding-left: 15px;">
          <router-link class="col-xs-1" style="padding-left: 0;" to="/personal">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-fanhui"></use>
            </svg>
          </router-link>
          <strong id="title" style="font-size: 16px;">我的会员卡</strong>
          <router-link class="col-xs-1" style="margin-right: 20px;float: right;" to="/member/add">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-jiahao1"></use>
            </svg>
          </router-link>
        </div>
      </div>
    </nav>
    <div class="container-fluid" style="padding: 60px 15px 0;">
      <div class="row">
        <div class="col-xs-12 list-group" style="padding: 0 0 30px;margin: 0;">
          <div class="list-group-item" style="padding: 15px 45px;border: none;" v-for="(item,index) in list"
               :key="index" @click="toDetail(item.memberId)">
            <div class="row" style="" :class="'member-'+item.memberTypeId">
              <div class="col-xs-7 member-name-2">
								<strong style="font-family: 'Bodoni MT'">{{ item.memberTypeId | memberText }}</strong>
							</div>
              <div class="col-xs-4">
                <svg class="icon" aria-hidden="true" style="font-size: 30px;height:100px;width:100px;size: 80px;">
                  <use xlink:href="#icon-huangjinhuiyuan" v-if="item.memberTypeId==1"></use>
                  <use xlink:href="#icon-baijin1" v-else-if="item.memberTypeId==2"></use>
                  <use xlink:href="#icon-zuanshihuiyuan" v-else="item.memberTypeId==3"></use>
                </svg>
              </div>
              <div class="col-xs-7">No.{{ item.memberId | fillMemberId }}</div>
              <div class="col-xs-5">卡余额:￥{{ item.balance }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {fetchList} from "@/api/member_info";

  export default {
    name: "member",
    data() {
      return {
        list: []
      }
    },
    created() {
      this.getList()
    },
		filters: {
    	fillMemberId(value) {
				return (Array(11).join(0) + value).slice(-11);
			},
			memberText(value) {
    		switch (value) {
					case 1: return '黄金卡';
					case 2: return '白金卡';
					case 3: return '钻石卡';
				}
			}
		},
    methods: {
      toDetail(id) {
        this.$router.push({path:'/member/detail',query:{id:id}})
      },
      getList() {
        fetchList().then(response => {
          console.log(response)
          this.list = response.extra
        })
      }
    }
  }
</script>

<style scoped>

</style>
