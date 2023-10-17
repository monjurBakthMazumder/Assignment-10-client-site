import { useNavigate } from "react-router-dom";
import useAuth from "../../../Hock/useAuth";
import Swal from "sweetalert2";

const SocialLogin = () => {
    const navigate = useNavigate()
    const {googleLogin} = useAuth()
    const handleGoogleLogin = () => {
        googleLogin()
        .then(() => {
            navigate('/')
            Swal.fire(
                'Login Successful!',
                'Successfully login',
                'success'
            )
        })
        .catch(() => {
            Swal.fire(
                'Oops!',
                'Something went wrong',
                'error'
            )
        })
    }
    return (
        <div className="p-8 pb-0">
            <button className="btn w-full" onClick={handleGoogleLogin}>Login with Google</button>
            <div className="divider pb-0">OR</div>
        </div>
    );
};

export default SocialLogin;