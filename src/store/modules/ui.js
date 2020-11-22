const ui = {
  namespaced: true,
  state: () => ({
    loading: false
  }),
  mutations: {
    updateLoading(state, condition) {
      state.loading = condition;
    }
  },
  actions: {},
  getters: {
    getLoadingState: state => state.loading
  }
};

export default ui;
