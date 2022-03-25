import { NavLink, Routes, Route, Navigate } from "react-router-dom"
import LoginScreen from "../pages/LoginScreen";
import RegisterScreen from "../pages/RegisterScreen";

export const AuthRouter = () => {
    return (
        <div className="auth__main">
            <div className="auth__box_container">
                <h1>AuthRouter Page</h1>

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