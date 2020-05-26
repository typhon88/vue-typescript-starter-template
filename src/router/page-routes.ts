import Home from "../views/Home.vue";
import About from "../views/About.vue";
import LogIn from "../views/LogIn.vue";
import Profile from '../views/Profile.vue'
import MembersOnly from '../views/MembersOnly.vue';
import MembershipOffer from '../views/MembershipOffer.vue';
import NotFound from '../views/NotFound.vue';

interface PageRoute {
    path: Paths;
    name: RouteNames;
    component: any;
    meta?: object;
    params?: object;
}

export enum Paths {
    Home = '/',
    LogIn = '/login',
    About = '/about',
    MembersOnly = '/members',
    MembershipOffer = '/memberships',
    Profile = '/profile/:id',
    NotFound = '/not-found'
}

export enum RouteNames {
    Home = 'Home',
    LogIn = 'LogIn',
    About = 'About',
    MembersOnly = 'MembersOnly',
    MembershipOffer = 'MembershipOffer',
    Profile = 'Profile',
    NotFound = 'NotFound'
}

export const routes: Array<PageRoute> = [ 
    { path: Paths.Home, name: RouteNames.Home, component: Home, meta: { title: 'Home' } }, 
    { path: Paths.LogIn, name: RouteNames.LogIn, component: LogIn }, 
    { path: Paths.About, name: RouteNames.About, component: About },
    { path: Paths.MembersOnly, name: RouteNames.MembersOnly, component: MembersOnly },
    { path: Paths.MembershipOffer, name: RouteNames.MembershipOffer, component: MembershipOffer },
    { path: Paths.Profile, name: RouteNames.Profile, component: Profile },
    { path: Paths.NotFound, name: RouteNames.NotFound, component: NotFound }
];