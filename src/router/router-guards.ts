import axios from 'axios';
import { HomeRoute } from '../router/page-routes';
import VueRouter from "vue-router";

const setGuards = (router: VueRouter) => {
    router.beforeEach((to, from, next) => {/*
        const routePermsKey = 'route-permissions';
        let routePerms = localStorage.getItem(routePermsKey);

        if(routePerms === null || routePerms === undefined) {
            axios.get('your api endpoint here')
            .then(response => {
                routePerms = response.data;
                localStorage.setItem(routePermsKey, response.data);
            });
        }

        if(routePerms && routePerms[to.path]) {
            next();
        } else {
            next(HomeRoute.path);
        }
        */
       next();
    })
}

export default setGuards;