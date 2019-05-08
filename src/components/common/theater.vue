<template>
  <div>
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container" style="margin-top:15px;">
        <div class="row text-center">
          <div class="col-xs-1" @click="handleBack">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-fanhui"></use>
            </svg>
          </div>
          <strong id="title" style="font-size: 16px;">影城列表</strong>
        </div>
      </div>
    </nav>
    <div class="container-fluid" style="padding: 60px 15px;">
      <div class="row">
        <van-list v-model="list[0].loading" :finished="list[0].finished" finished-text="没有更多了" @load="onLoad()">
          <div v-for="item in list[0].items" :key="item.theaterId" @click="updateDefaultTheater(item.theaterId)">
            <a class="list-group-item row">
              <div class="col-xs-12">{{ item.theaterName }}</div>
              <div class="col-xs-12" style="font-size: 11px;">{{ item.theaterAddress }}</div>
              <div class="col-xs-12">{{ item.phoneNumber }}</div>
              <div class="col-xs-12">收藏标记</div>
            </a>
          </div>
        </van-list>
      </div>
    </div>
  </div>
</template>

<script>
  import {fetchList as fetchTheaterList, getTheaterDefault} from "@/api/theater_info"

  export default {
    name: "Theater",
    data() {
      return {
        list: [{
          items: [],
          loading: false,
          finished: false,
          listQuery: {
            page_no: 0,
            page_size: 10,
            page_total: undefined,
            total: undefined
          }
        }]
      }
    },
    methods: {
      getList() {
        const list = this.list[0];
        list.listQuery.page_no = list.listQuery.page_no + 1;
        fetchTheaterList(list.listQuery).then(response => {
            console.log(response);
            list.items = list.items.concat(response.extra.data);
            list.listQuery.page_total = response.extra.page_total;
            list.listQuery.total = response.extra.total;
            list.listQuery.page_no++;
            // 加载状态结束
            list.loading = false;
            // 数据全部加载完成
            if (list.listQuery.page_no >= list.listQuery.page_total) {
              list.finished = true;
            }
          }
        )
      },
      handleBack() {
        this.$router.go(-1)
      },
      onLoad() {
        setTimeout(() => {
          this.getList();
        }, 1000)
      },
      updateDefaultTheater(id) {
        getTheaterDefault(id).then(response => {
          this.defaultTheater = response.extra
          this.$store.dispatch('GetTheater', this.defaultTheater)
          this.$router.push("/")
        })
      }
    }
  }
</script>

<style scoped>

</style>
