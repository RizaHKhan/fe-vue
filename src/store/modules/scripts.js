const scripts = {
  namespaced: true,
  state: () => ({
    scripts: []
  }),
  mutations: {
    updateScriptsState(state, array) {
      state.scripts = array;
      console.log(state.scripts);
    }
  },
  actions: {},
  getters: {
    getScriptsState: state => state.scripts
  }
};

export default scripts;
