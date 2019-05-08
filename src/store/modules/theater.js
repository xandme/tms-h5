const theater = {
  state: {
    info: ''
  },

  mutations: {
    SET_THEATER: (state, info) => {
      state.info = info
    }
  },

  actions: {
    // 存取影院信息
    GetTheater({commit}, theaterInfo) {
      if (theaterInfo) {
        commit('SET_THEATER', theaterInfo)
      }else{
        this.$toast.fail("影院信息获取失败")
      }
    }
  }
}

export default theater
