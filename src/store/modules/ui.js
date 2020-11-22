const ui = {
  namespaced: true,
  state: () => ({
    loading: true
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
