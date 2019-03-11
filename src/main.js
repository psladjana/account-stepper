import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/src/stylus/app.styl";
import Vuex from "vuex";
import App from "./App.vue";
import store from "./store/";
import VeeValidate from "vee-validate";

Vue.use(VeeValidate);
Vue.use(Vuex);
Vue.use(Vuetify, {
  theme: {
    primary: "#7637D8"
  }
});

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
