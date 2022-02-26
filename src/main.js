import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import "../styleguide.css"
import "../globals.css"



Vue.use("postcss-px2rem")
Vue.use(ElementUI)

Vue.config.productionTip = false;

(function() {
    var rem = document.createElement("script");
    rem.src = "./rem.js";
    document.body.appendChild(rem);
})();

new Vue({
    render: h => h(App),
    router
}).$mount("#app");