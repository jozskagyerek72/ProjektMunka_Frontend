import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { ToastContainer } from "react-toastify/dist"
import { toast } from "react-toastify/dist"

export const Toastify = ({ signin, err, signup, signout, resetpassword }) => {
    const { setMsg } = useContext(UserContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (err) {
            toast.error(err, { position: 'top-left' })
        } else if (signin || signup) {
            toast.success(signin || signup, { position: 'top-center' })
        } else if (resetpassword || signout) {
            toast.success(resetpassword || signout, { position: 'top-center' })
            setTimeout(() => navigate('/authentication/signin'), 1000)
        }

        setMsg({})
    }, [signin, err, signup, signout, resetpassword])

    return (
        <div>
            <ToastContainer />
        </div>
    )
}