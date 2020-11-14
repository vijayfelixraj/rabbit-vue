import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";
import swal from "vue-sweetalert";
import store from "./store/index";
import DataTable from "laravel-vue-datatable";

Vue.config.productionTip = false;

Vue.use(axios);
Vue.use(swal);
Vue.use(VueAxios, axios);
Vue.use(DataTable);

new Vue({
  render: (h) => h(App),
  store,
}).$mount("#app");
