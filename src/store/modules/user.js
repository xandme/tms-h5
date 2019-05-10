import {requestLogin, getLogin} from '@/api/login'

const user = {
  state: {
    userInfo: ''
  },

  mutations: {
    SET_USERINFO: (state, userInfo) => {
      state.userInfo = userInfo
    }
  },

  actions: {
    // 获取用户信息
    GetUserInfo({commit}, state) {
      console.log(state)
      return new Promise((resolve, reject) => {
        getLogin(state).then(response => {
          if (response.error_code == 1000) {
            commit('SET_USERINFO', response.extra)
            resolve()
          } else {
            reject(response.error_msg)
          }
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_USERINFO', '')
        resolve()
      })
    },
  }
}

export default user
