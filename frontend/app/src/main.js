import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faComments} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faComments);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false

// Fichier de configuration de vue et importation d'une icone FontAwesome

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
