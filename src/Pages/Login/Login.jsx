import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from '../../Shared/SocialLogin';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';


const Login = () => {
    // const [disable, setDisable] = useState(true);
    const { signIn } = useContext(AuthContext);
    const [showPass, setShowPass] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <img src='https://i.ibb.co/gJspK51/flat-hand-drawn-fashion-designer-concept-52683-54447.jpg' alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Login</h1>
                        <form onSubmit={handleLogin} >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-4">
                                <label className="label">
                                    <span className="label-text"> Password</span>
                                </label>
                                <label className="relative">
                                    <input type={showPass ? 'text' : 'password'} name='password' placeholder='*******' className=' my-input mb-1' required />
                                    <span>
                                        {
                                            !showPass ? <EyeIcon title='Show password' onClick={() => setShowPass(true)} className='h-6 w-6 absolute top-2 right-3 z-20 cursor-pointer'></EyeIcon>
                                                : <EyeSlashIcon title='Hide password' onClick={() => setShowPass(false)} className='h-6 w-6 absolute top-2 right-3 z-20 cursor-pointer'></EyeSlashIcon>
                                        }
                                    </span>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <h2>Don't Have an Account? <Link to='/signup' className='text-cyan-600'>Sign Up</Link></h2>
                        <SocialLogin></SocialLogin>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;