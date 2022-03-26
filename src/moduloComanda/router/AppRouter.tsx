import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { routes } from '../../routes/routes';

export const AppRouter = () => {
    return (
        <Suspense fallback={ <span>Cargando...</span> }>

            <BrowserRouter>
            
                {/* <div className="main-layout"> */}
                <div>
                    {/* <nav>
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
                    </nav> */}

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
                        
                        {/* <Route path="/*" element={ <Navigate to={ routes[0].to } replace /> } /> */}
                        <Route path="/*" element={ <Navigate replace to="lazyload" /> } />
                    </Routes>

                </div>
                
            </BrowserRouter>
        </Suspense>
    )
}
