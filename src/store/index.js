import Vue from 'vue'
import Vuex from 'vuex';
import Datos from "./datos";

import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

export default function () {
  const Store = new Vuex.Store({
    state: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
      Datos
    },
    plugins: [createPersistedState()],
  })
  return Store
};
  
