import { NavLink, Routes, Route, Navigate } from "react-router-dom"
import LoginScreen from "../pages/LoginScreen";
import RegisterScreen from "../pages/RegisterScreen";
import logo from '../../assets/Logo.png';

export const AuthRouter = () => {
    return (
        <div className="auth__main">

            <div className="auth__franjaSuperior"></div>            
            <img className="auth__logo" src={ logo } alt="SVMesero" />

            <img 
                className="auth__imagen"
                src="https://img.freepik.com/foto-gratis/interior-restaurante_1127-3394.jpg?t=st=1648242688~exp=1648243288~hmac=cf259940aab57c99396d1972761570e83b8396efbcca3a527f462e5fd5eb69c1&w=1380" 
                alt="SVMesero" 
            />
            <h5 style={{ position: 'absolute', top: '95vh'  }}>Todos los derechos reservados. 2022 © - Soluciones Vituales.</h5>

            <div className="auth__box_container" style={{ zIndex: '999', marginLeft: '-27%' }}>
                {/* <h1>AuthRouter Page</h1> */}
   
                <Routes>
                    <Route path="login" element={ <LoginScreen />} />
                    <Route path="register" element={ <RegisterScreen />} />

                    <Route path="*" element={ <Navigate replace to="login" /> } />
                </Routes>
            </div>

        </div>
    )
}

export default AuthRouter;