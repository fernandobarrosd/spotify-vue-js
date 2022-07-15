import { createApp } from 'vue'
import App from './App.vue'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMusic, faCircleExclamation, faHeadphones, faCirclePlay } from "@fortawesome/free-solid-svg-icons";



library.add(faMusic, faCircleExclamation, faHeadphones, faCirclePlay);


createApp(App)
.component("FontAwesomeIcon", FontAwesomeIcon)
.mount('#app');
