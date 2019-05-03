<template>
  <div>
    <van-nav-bar
      title="全部订单"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-tabs>
      <van-tab title="电影订单">
        <van-pull-refresh v-model="list[0].refreshing" @refresh="onRefresh(0)">
          <van-list
            v-model="list[0].loading"
            :finished="list[0].finished"
            finished-text="没有更多了"
            @load="onLoad(0)">
            <van-cell
              v-for="item in list[0].items"
              :key="item"
              :title="item"
            />
          </van-list>
        </van-pull-refresh>
      </van-tab>
      <van-tab title="商品订单">商品订单</van-tab>
    </van-tabs>
  </div>
</template>

<script>
  export default {
    name: "order",
    data() {
      return {
        list: [{
          items: [],
          refreshing: false,
          loading: false,
          error: false,
          finished: false
        }, {
          items: [],
          refreshing: false,
          loading: false,
          error: false,
          finished: false
        }]
      };
    },
    methods: {
      onClickLeft() {
        console.log("返回")
        this.$router.push("/personal")
      },
      onLoad(index) {
        const list = this.list[index];
        setTimeout(() => {
          for (let i = 0; i < 10; i++) {
            const text = list.items.length + 1;
            list.items.push(text < 10 ? '0' + text : text);
          }
          list.loading = false;
          // show error info in second demo
          if (index === 1 && list.items.length === 10 && !list.error) {
            list.error = true;
          } else {
            list.error = false;
          }
          if (list.items.length >= 40) {
            list.finished = true;
          }
        }, 500);
      },
      onRefresh(index) {
        const list = this.list[index];
        setTimeout(() => {
          list.items = [];
          list.error = false;
          list.finished = false;
          list.refreshing = false;
          window.scrollTo(0, 10);
        }, 1000);
      }
    }
  }
</script>

<style scoped>

</style>
