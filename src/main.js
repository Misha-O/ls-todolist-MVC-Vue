import Vue from "vue";
import App from "./App.vue";
import SimpleVueValidation from "simple-vue-validator";
import router from "./router";
import Vuex from "vuex";
import store from "./store";

Vue.use(Vuex);

Vue.config.productionTip = false;

Vue.use(SimpleVueValidation);

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount("#app");
