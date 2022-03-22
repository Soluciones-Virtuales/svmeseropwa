import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import logo from '../assets/Logo.png';
import { routes } from './routes';

export const Navigation = () => {
    return (
        <Suspense fallback={ <span>Cargando...</span> }>

            <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={ logo } alt="SVMesero" />
                    <ul>
                        {
                            routes.map( ({ to, name}) => (
                                <li key={ to }>
                                    <NavLink to={ to } className={ ({ isActive }) => isActive ? 'nav-active' : '' }>
                                        { name }
                                    </NavLink>
                                </li>
                            ))
                        }

                    </ul>
                </nav>

                <Routes>
                    {
                        routes.map( ({path, Component }) => (
                            <Route 
                                key={ path } 
                                path={ path } 
                                element={ <Component /> } 
                            />
                        ))
                    }
                    
                    {/* <Route path="lazy1" element={ <LazyPage1 /> } />
                    <Route path="lazy2" element={ <LazyPage2 /> } />
                    <Route path="lazy3" element={ <LazyPage3 /> } /> */}

                    <Route path="/*" element={ <Navigate to={ routes[0].to } replace /> } />
                </Routes>

            </div>
                
            </BrowserRouter>
        </Suspense>
    )
}
