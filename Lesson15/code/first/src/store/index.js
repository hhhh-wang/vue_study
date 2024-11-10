import Vue from "vue";
import Vuex from "vuex";

import adv from "@/store/adv";
import product from "@/store/product";
Vue.use(Vuex);
const store = new Vuex.Store({
    modules:{
        product,
        adv
    }
});
export default store;