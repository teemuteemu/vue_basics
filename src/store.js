export default {
  state: {
    counter: 0
  },
  mutations: {
    INCREMENT (state) {
      state.counter++;
    },
    DECREMENT (state) {
      state.counter--;
    }
  },
  actions: {
    increment ({commit}) {
      commit('INCREMENT');
    },
    decrement ({commit}) {
      commit('DECREMENT');
    }
  },
  getters: {
    counter: state => state.counter
  }
};
