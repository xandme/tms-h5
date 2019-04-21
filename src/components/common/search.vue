<template>
  <div>
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container" style="margin-top:15px;">
        <div class="row" style="padding: 10px;margin-top: -15px;">
          <div class="input-group">
				<span class="input-group-addon" id="search-input" style="">
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-chazhao"></use>
					</svg>
				</span>
            <input type="text" class="form-control" placeholder="搜影院、影片" aria-describedby="search-input"
                   style="border-left: none;height: 35px;">
            <span class="input-group-addon">
                <router-link to="/">
                  <span style="padding: 0;color: black;"><span>取消</span></span>
                </router-link>
            </span>
          </div>
        </div>
      </div>
    </nav>
    <div class="container-fluid" style="padding: 56px 15px;">
      <div class="row">
        <div class="col-xs-12 list-group my-list-group" style="padding: 0;">
          <div class="list-group-item">
            <span>搜索记录</span>
            <div class="text-right my-middle-list" style="">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-shanchu"></use>
              </svg>
              <span style="">清除记录&nbsp;&nbsp;</span>
            </div>
          </div>
          <a class="list-group-item">
            <span>金逸</span>
          </a>
          <a class="list-group-item">
            <span>反贪风暴4</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Search"
  }
</script>

<style scoped>

</style>
