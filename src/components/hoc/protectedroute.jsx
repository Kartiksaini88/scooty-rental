import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"


const RequireAuth = ({ children }) => {
    const { isauth } = useContext(AuthContext)

    if (isauth) {
        return children
    } else {
        return <Navigate to='/login'></Navigate>
    }
}
export default RequireAuth;