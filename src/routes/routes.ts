import { lazy, LazyExoticComponent } from "react";
import { NoLazy } from "../moduloComanda/pages/NoLazy";

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
        name: 'Lazy-Dashboard'
    }, 
    {
        to: '/no-lazy', 
        path: 'no-lazy', 
        Component: NoLazy, 
        name: 'No Lazy'
    }
]