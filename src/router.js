import Vue from "vue";
import Router from "vue-router";
import Dogefrens from "./components/Dogefrens";
import { dogefrensData } from "./data";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "*",
      component: Dogefrens,
      props: { ...dogefrensData },
    },
  ],
});
