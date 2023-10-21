import { Link, useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useState } from "react";
import useAuth from "../../../Hock/useAuth";
import Swal from "sweetalert2";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
    const [isShow, setIsShow] = useState(false)
    const {loginUser} = useAuth()
    const navigate = useNavigate()
    const loc = localStorage.getItem('location')
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value
        const password = form.password.value
        loginUser(email, password)
        .then(() => {
            navigate(loc ? loc : '/')
            Swal.fire(
                'Login Successful!',
                'Successfully login',
                'success'
            )
        })
        .catch(()=> {
            Swal.fire(
                'Oops!',
                'Email or password do not match',
                'error'
            )
        })
    }
    return (
        <div className="hero min-h-[75vh] my-10">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Login now!</h1>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl border text-secondary">
                    <SocialLogin/>
                <form className="card-body pt-0" onSubmit={handleLogin}>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text text-secondary" >Email</span>
                    </label>
                    <input type="email" placeholder="Email" name="email" className="input input-bordered bg-transparent border-secondary" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text text-secondary" >Password</span>
                    </label>
                    <div className="relative">
                        <input 
                            type={isShow ? "text" : "password"} 
                            placeholder="Password" 
                            name="password" 
                            className="input input-bordered bg-transparent border-secondary w-full" 
                            required />
                        <p 
                            className="absolute top-3 right-3 text-2xl" 
                            onClick={()=> setIsShow(!isShow)}
                        >{isShow ? <AiFillEyeInvisible/>: <AiFillEye/>}
                        </p>
                    </div>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-secondary">Login</button>
                    </div>
                    <p className="text-center text-xs mt-5">New Here? Please <Link to={'/register'} className="underline font-bold cursor-pointer text-blue-600">register</Link></p>
                </form>
                </div>
            </div>
        </div>
    );
};

export default Login;