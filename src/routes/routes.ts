import { lazy, LazyExoticComponent } from "react";
import LoginScreen from "../moduloAuth/pages/LoginScreen";
import { AuthRouter } from "../moduloAuth/router/AuthRouter";
// import { NoLazy } from "../moduloComanda/pages/NoLazy";

type JSXComponent = () => JSX.Element;

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}

const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout" */'../moduloComanda/layout/LazyLayout'));

export const routes: Route[] = [
    {
        path: '/lazyload/*', 
        to: '/lazyload', 
        Component: LazyLayout, 
        name: 'JournalScreen'
    }, 
    {
        path: '/auth/*', 
        to: '/auth', 
        Component: AuthRouter, 
        name: 'AuthRouter - No Lazy'
    }
]