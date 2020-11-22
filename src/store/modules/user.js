import axios from "@/services/axios.js";

const user = {
  namespaced: true,
  state: () => ({
    user: {}
  }),
  mutations: {
    updateUserState(state, user) {
      state.user = user;
    },
    updateLoggedInState(state, condition) {
      state.loggedIn = condition;
    }
  },
  actions: {
    async checkToken({ commit }) {
      try {
        const response = await axios.get("/api/checkToken");
        commit("updateUserState", response.data);
        return response.data._id;
      } catch (error) {
        console.log(error);
      }
    }
  },
  getters: {
    getUserState: state => state.user
  }
};

export default user;
