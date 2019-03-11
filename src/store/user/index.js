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
  },
  setTags({ commit }, tags) {
    return commit(types.SET_TAGS, tags);
  }
};

const mutations = {
  [types.SET_USER](state, user) {
    state.user = user;
    localStorage.setItem("user", JSON.stringify(state.user));
  },
  [types.SET_TAGS](state, tags) {
    state.user.tags = tags;
    localStorage.setItem("user", JSON.stringify(state.user));
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
