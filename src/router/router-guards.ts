import axios from 'axios';
import VueRouter from "vue-router";
import { Paths } from './page-routes';

interface Permission {
    requireLogIn: boolean;
    fallback?: Paths;
    requireRole? : string;
}

interface Dictionary<T> {
    [key: string]: T
}

const apiEndpoint = '/api/auth';

//This should come from api
//This is just for development purposes
//Always provide fallback route for routes with requireLogIn
var fallbackRoutePermissions: Dictionary<Permission> = {
    [Paths.Home]: { requireLogIn: false },
    [Paths.About]: { requireLogIn: false },
    [Paths.LogIn]: { requireLogIn: false },
    [Paths.MembershipOffer]: { requireLogIn: false },
    [Paths.MembersOnly]: { requireLogIn: true, fallback: Paths.MembershipOffer, requireRole: 'User' },
    '/profile/34': { requireLogIn: true, fallback: Paths.LogIn },
    [Paths.NotFound]: { requireLogIn: false }
};

const setGuards = (router: VueRouter) => {
    router.beforeEach((to, from, next) => {
        const routePermsKey: string = 'route-permissions';
        const storage = localStorage.getItem(routePermsKey);
        let routePermissions: Dictionary<Permission> = storage !== null ? JSON.parse(storage) : null;

        console.log('routePermissions: ', routePermissions);

        if(routePermissions === null || routePermissions === undefined) {
            console.log('calling endpoint');
            axios.get(apiEndpoint)
            .then(response => {
                routePermissions = response.data as Dictionary<Permission>;
                const perms = JSON.stringify(response.data as Dictionary<Permission>);
                localStorage.setItem(routePermsKey, perms);
            })
            .catch(() => {
                // REMOVE THIS IN PRODUCTION!!!
                routePermissions = fallbackRoutePermissions;
                localStorage.setItem(routePermsKey, JSON.stringify(fallbackRoutePermissions));
                console.log('setting fallback permissions: ', routePermissions); 
            });
        }

        if(routePermissions && routePermissions[to.path] !== undefined) {
            const currentRoutePermission = routePermissions[to.path];
            console.log('processing route ' + '[ ' + to.path + ' ]');
            console.log(currentRoutePermission);

            if(currentRoutePermission.requireLogIn) {      
                //toggle this to experiment          
                const doChecks = false;
                if(doChecks) {
                    //call endpoint or check token to see if use is logged in
                    //if requireRole has a value check token for the role or call endpoint
                    next();
                } else {
                    //if user is not logged in or doesn't have required role 
                    //redirect to fallback or to login page if that is not available
                    currentRoutePermission.fallback ? next(currentRoutePermission.fallback) : next(Paths.LogIn);
                }
            }

            //If route does not require login but exists in the dictionary continue
            next();
        } else {
            next(Paths.NotFound);
        }
    })
}

export default setGuards;