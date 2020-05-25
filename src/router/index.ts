import Vue from "vue";
import VueRouter, { Route } from "vue-router";
import { routes } from "@/router/page-routes";
import setGuards from './router-guards';

Vue.use(VueRouter);

const scrollBehavior = function(to: any, from: any, savedPosition: any) {
  if (savedPosition) {
    return savedPosition
  } else {
    return { x: 0, y: 0 }
  }
};

  const router = new VueRouter({ 
    mode: "history", 
    routes: routes, 
    scrollBehavior: scrollBehavior
  });

  setGuards(router);

  export default router;