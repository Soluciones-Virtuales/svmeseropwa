import { NavLink, Routes, Route, Navigate } from "react-router-dom"
import LoginScreen from "../pages/LoginScreen";
import RegisterScreen from "../pages/RegisterScreen";
import logo from '../../assets/Logo.png';
import fondo from '../../assets/Fondo.jpeg';

export const AuthRouter = () => {
    return (
        <div className="auth__main">

            <div className="auth__franjaSuperior"></div>
            <div>
                <img className="auth__logo" src={ logo } alt="SVMesero" />
            </div>

            <div className="auth__box_container">
                {/* <h1>AuthRouter Page</h1> */}
   
                <Routes>
                    <Route path="login" element={ <LoginScreen />} />
                    <Route path="register" element={ <RegisterScreen />} />

                    <Route path="*" element={ <Navigate replace to="login" /> } />
                </Routes>
            </div>

            <img 
                className="auth__imagen"
                // src="https://img.freepik.com/foto-gratis/interior-restaurante_1127-3394.jpg?t=st=1648242688~exp=1648243288~hmac=cf259940aab57c99396d1972761570e83b8396efbcca3a527f462e5fd5eb69c1&w=1380" 
                src= { fondo }
                alt="SVMesero" 
            />
            
            <h5 style={{ position: 'fixed', top: '95vh', textAlign: 'center', fontSize: 13  }}>Todos los derechos reservados. 2022 © - Soluciones Vituales</h5>


        </div>
    )
}

export default AuthRouter;