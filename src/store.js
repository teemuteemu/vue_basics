export default {
  state: {
    counter: 0,
    async: {
      fetching: false,
      topics: [],
      error: null
    }
  },

  mutations: {
    INCREMENT (state) {
      state.counter++;
    },
    DECREMENT (state) {
      state.counter--;
    },

    FETCH_START (state) {
      state.async.fetching = true;
    },
    FETCH_ERROR (state, err) {
      state.async.fetching = false;
      state.async.error = err.toString();
    },
    FETCH_DONE (state, topics) {
      state.async.fetching = false;
      state.async.topics = topics;
    }
  },

  actions: {
    increment ({commit}) {
      commit('INCREMENT');
    },
    decrement ({commit}) {
      commit('DECREMENT');
    },

    fetchData ({commit}) {
      const url = 'https://www.reddit.com/r/synthesizers.json';

      commit('FETCH_START');

      window.fetch(url)
        .then(d => d.json())
        .then(data => {
          const topics = data.data.children
            .map(c => c.data);

          commit('FETCH_DONE', topics);
        })
        .catch(err => commit('FETCH_ERROR', err));
    }
  },
  getters: {
    counter: state => state.counter,
    fetching: state => state.async.fetching,
    topics: state => state.async.topics,
    error: state => state.async.error
  }
};
