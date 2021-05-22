import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

import firebase from 'firebase';

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyDmnfXSz9X2jG9wirwVzbKOG8HUVFEfpeY",
  authDomain: "otto-klaus-77a0a.firebaseapp.com",
  projectId: "otto-klaus-77a0a",
  storageBucket: "otto-klaus-77a0a.appspot.com",
  messagingSenderId: "673461815949",
  appId: "1:673461815949:web:573e003160d7d986a7b0c4"
};
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
