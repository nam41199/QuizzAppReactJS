import { Outlet } from "react-router-dom"
import { Login } from "../component/AuthComponent/Login"

const useAuth = () => {
    const login = { token: localStorage.getItem('token') }
    return login && login.token
}
export const GuardCheck = () => {
    const isLogin = useAuth()
    return isLogin ? <Outlet></Outlet> : <Login></Login>
}