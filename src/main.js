import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueYouTubeEmbed from 'vue-youtube-embed'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Flicking from "@egjs/vue-flicking";
import "@egjs/vue-flicking/dist/flicking.css";

// import firebase from 'firebase/app'
// import 'firebase/firestore'
// firebase.initializeApp({
//  Configurações do seu app
// })

// export const db = firebase.firestore()

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

Vue.use(Flicking)
