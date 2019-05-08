import Vue from 'vue'
import Vuex from 'vuex'
import theater from './modules/theater'
import user from './modules/user'
import getters from './getter'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    theater,
    user
  },
  getters,
  plugins: [createPersistedState()]
})

export default store
