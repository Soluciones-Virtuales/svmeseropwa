import { NavLink, Routes, Route, Navigate } from "react-router-dom"
import { LazyPage1, LazyPage2, LazyPage3 } from "../pages";

export const LazyLayout = () => {
    return (
        <div>
            <h1>LazyLayout Page - JournalScreen</h1>

            <ul>
                <li style={{ color: 'white' }}>
                    <NavLink to="lazy1" className={ ({ isActive }) => isActive ? 'nav-active' : 'nav-noActive' }>Main Comandas Screen</NavLink>
                </li>
                <li>
                    <NavLink to="lazy2" className={ ({ isActive }) => isActive ? 'nav-active' : 'nav-noActive' }>Comanda Screen</NavLink>
                </li>
                <li>
                    <NavLink to="lazy3" className={ ({ isActive }) => isActive ? 'nav-active' : 'nav-noActive' }>Configuración</NavLink>
                </li>
            </ul>

            <Routes>
                <Route path="lazy1" element={ <LazyPage1 />} />
                <Route path="lazy2" element={ <LazyPage2 />} />
                <Route path="lazy3" element={ <LazyPage3 />} />

                <Route path="*" element={ <Navigate replace to="lazy1" /> } />
            </Routes>
        </div>
    )
}

export default LazyLayout;