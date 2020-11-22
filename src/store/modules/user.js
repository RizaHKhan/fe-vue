const user = {
  namespaced: true,
  state: () => ({
    user: {}
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

export default user;
