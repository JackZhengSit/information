import Vue from "vue";
import Vuex from "vuex";
import state from "./state";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";
import search from "./modules/search";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  // namespaced: true,
  strict: debug,
  state,
  getters,
  mutations,
  actions,
  modules: {
    search
  }
});
