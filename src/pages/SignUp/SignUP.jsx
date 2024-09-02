import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'

const SignUP = () => {
    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-20">
                    <img src={img} alt="" />
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSignUp} className="card-body">
                        <h1 className="text-3xl text-center font-bold">Sign up now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input 
                                type="name"
                                name="name" 
                                placeholder="name" 
                                className="input input-bordered" 
                                required 
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input 
                                type="email"
                                name="email" 
                                placeholder="email" 
                                className="input input-bordered" 
                                required 
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input 
                                type="password"
                                name="password" 
                                placeholder="password" 
                                className="input input-bordered" 
                                required 
                            />
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn btn-primary" value="Sign up" />
                        </div>
                    </form>
                    <p className='text-center mb-12'>Already have an account
                        <Link className='text-orange-700 font-bold' to="/login"> Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUP;