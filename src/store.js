import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const types = {
  SETMODAL: 'SETMODAL'
}

const rootStore = {
  state: {
    modal: ''
  },
  getters: {
    getModal: state => state.modal
  },
  actions: {
    setModal ({ commit }, modal) {
      commit(types.SETMODAL, modal)
    }
  },
  mutations: {
    [types.setModal] (state, modal) {
      state.SETMODAL = modal
    }
  }
}

export default new Vuex.Store({
  ...rootStore,

  // 嚴格模式，禁止直接修改state
  strict: false
})
