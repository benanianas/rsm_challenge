import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import VueGoogleMaps from "@fawmi/vue-google-maps";


import "./assets/theme.scss"

createApp(App)
  .use(VueGoogleMaps, {
    load: {
      key: "AIzaSyCSPi-6P_cB2WUV2c9WszlEKsiR-gY2yhE"
    }
  })
  .mount("#app");


import "bootstrap/dist/js/bootstrap.js";
