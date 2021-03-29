import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import todos from "./modules/todos";

export default new Vuex.Store({
    modules: {
        todos,
    },
});
