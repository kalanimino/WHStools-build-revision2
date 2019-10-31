import Vue from 'vue';
import './plugins/vuetify';
import App from './App';
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faRulerCombined, faSuperscript, faSquareRootAlt, faInfinity, faFlask, faLeaf, faAtom, faUserAstronaut, faAward} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faCoffee);
library.add(faRulerCombined);
library.add(faSuperscript);
library.add(faSquareRootAlt);
library.add(faInfinity);
library.add(faFlask);
library.add(faLeaf);
library.add(faAtom);
library.add(faUserAstronaut);
library.add(faAward);


Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
