import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () =>{
    let auth = localStorage.getItem("login");
    console.log(auth);
    return (
        (auth === true || auth === 'true') ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default PrivateRoutes;