import Vue from "vue";
import Router from "vue-router";
import List from "./views/List.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "list",
      component: List
    },
    {
      path: "/details",
      name: "details",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Details.vue")
    },
    {
      path: "/not-implemented",
      name: "not-implemented",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/NotImplemented.vue")
    }
  ]
});
