import Home from "../views/Home.vue";
import About from "../views/About.vue";
import LogIn from "../views/LogIn.vue";

interface PageRoute {
    path: string;
    name: string;
    component: any;
    meta?: object;
    params?: object;
}

export const HomeRoute = {
    path: "/",
    name: "Home",
    component: Home,
    meta: { title: 'Home' }
} as PageRoute;

export const AboutRoute: PageRoute = {
    path: "/about",
    name: "About",
    component: About
}

export const LogInRoute: PageRoute = {
    path: "/login",
    name: "LogIn",
    component: LogIn,
    params: { isLoggedIn: false }
}

export const routes = [ HomeRoute, AboutRoute, LogInRoute ];