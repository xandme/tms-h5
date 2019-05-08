// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import { Toast } from 'vant'
// import ElementUI from 'element-ui'
import Vant from 'vant'
// import 'element-ui/lib/theme-default/index.css'
import 'vant/lib/index.css'

Vue.config.productionTip = false

Vue.use(Toast)
Vue.use(Vant)
// Vue.use(ElementUI)

Vue.filter('sexFilter', function (value) {
	if (!value) {
		return '';
	}else if (value === 0) {
		return '女';
	}else if (value === 1) {
		return '男';
	}
})
Vue.filter('dateFilter', function (value) {
	if (!value) {
		return '';
	}else {
		// return value.slice();
		let date = new Date(value);
		return date.getFullYear().toString() + '-' + (date.getMonth()+1).toString() + '-' + date.getDate().toString();
	}
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
