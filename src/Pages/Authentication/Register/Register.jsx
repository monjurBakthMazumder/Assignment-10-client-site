import { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import Swal from 'sweetalert2'

const Register = () => {
    const [isShow, setIsShow] = useState(false)
    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value
        console.log(name, photo, email, password);
        if(password.length < 6){
            Swal.fire(
                'Oops!',
                'Password must be at least 6 characters',
                'error'
            ) 
        }
        if(!/[A-Z]/.test(password)){
            Swal.fire(
                'Oops!',
                'Password must be at least a capital letter',
                'error'
            ) 
        }
        if(!/[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/.test(password)){
            Swal.fire(
                'Oops!',
                'Password must be at least a special character',
                'error'
            ) 
        }
    }
    return (
        <div className="hero min-h-[75vh] my-10">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Register now!</h1>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form className="card-body" onSubmit={handleRegister}>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Your name" name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo url</span>
                    </label>
                    <input type="text" placeholder="Photo url" name="photo" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <div className="relative">
                        <input 
                            type={isShow ? "text" : "password"} 
                            placeholder="Password" 
                            name="password" 
                            className="input input-bordered w-full" 
                            required />
                        <p 
                            className="absolute top-3 right-3 text-2xl" 
                            onClick={()=> setIsShow(!isShow)}
                        >{isShow ? <AiFillEyeInvisible/>: <AiFillEye/>}
                        </p>
                    </div>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                    </div>
                    <p className="text-center text-xs mt-5">Already have account? Please <Link to={'/login'} className="underline font-bold cursor-pointer text-blue-600">login</Link></p>
                </form>
                </div>
            </div>
        </div>
    );
};

export default Register;