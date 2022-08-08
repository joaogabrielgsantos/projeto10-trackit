import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom"
import MyContext from "../context/MyContext";


const Auth = () => {
    const authenticator = JSON.parse(localStorage.getItem('trackit'));
    return authenticator
}

const ProtectedRoutes = () => {
    const {image} = useContext(MyContext)
    console.log({image})
    const isAuth = Auth()
    return isAuth ? <Outlet context={{image}}/> : <Navigate to="/" replace />;
}

export default ProtectedRoutes;