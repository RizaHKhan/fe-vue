import { createStore } from "vuex";
import ui from "./modules/ui";
import user from "./modules/user";
import scripts from "./modules/scripts";

const store = createStore({
  modules: {
    ui,
    user,
    scripts
  }
});

export default store;
