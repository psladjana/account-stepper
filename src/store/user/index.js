import * as types from "./types";

const state = {
  user: null
};

const getters = {
  user: state => state.user
};

const actions = {
  setUser({ commit }, user) {
    return commit(types.SET_USER, user);
  }
};

const mutations = {
  [types.SET_USER](state, user) {
    state.user = user;
    localStorage.setItem("user", JSON.stringify(state.user));
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
