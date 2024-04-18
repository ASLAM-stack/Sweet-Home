import { Link, useNavigate } from "react-router-dom";
import NavBar from "../../NavBar/NavBar";
import { useContext, useState } from "react";
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import auth from "../../Firebase/firebase.config";
import Swal from 'sweetalert2'


const Register = () => {
    const [showPass, setShowPass] = useState(false)

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const { createUser } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleRegister = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        if (password.length < 6) {
            toast.warn("password length must be 6 characters");
            return
        }
        if (!/[A-Z]/.test(password)) {
            toast.warn('password must have an upperCase letter')
            return;
        }
        if (!/[a-z]/.test(password)) {
            toast.warn('you need to must type a lowerCase letter')
            return;
        }

        console.log(name, email, password, photo)

        createUser(email, password)
            .then(result => {
                console.log(result.user)
                Swal.fire({
                    title: 'Success!',
                    text: 'User created successfully!',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                });
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: photo
                }).then(() => {
                    // Profile updated!
                    // ...
                    navigate('/')
                })
                .catch((error) => {
                    console.error(error)
                });

            })
            .catch(error => console.error(error))
    }

    const handleGoogleSignIn = (e) => {
        e.preventDefault()

        signInWithPopup(auth,googleProvider)
        .then(result =>{
            console.log(result.user)
            Swal.fire({
                title: 'Success!',
                text: 'User created successfully!',
                icon: 'success',
                confirmButtonText: 'Ok'
            });
            
        })
        .catch(error => console.error(error))
    }

    const handleGithubSignIn =(e)=>{
        e.preventDefault();
        signInWithPopup(auth,githubProvider)
        .then(result =>{
            console.log(result.user)
            Swal.fire({
                title: 'Success!',
                text: 'User created successfully!',
                icon: 'success',
                confirmButtonText: 'Ok'
            });
        })
        .catch(error => console.error(error))

    }


    return (
        <div>
            <NavBar></NavBar>
            <div className="hero min-h-screen bg-base-100 mt-5">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Register Now!</h1>

                    </div>
                    <div className="card shrink-0 w-full max-w-md shadow-2xl bg-base-200">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" name="photo" placeholder="Photo url" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type={showPass ? "text" : "password"}
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered"
                                    required />
                                <span className="absolute top-14 right-3" onClick={() => setShowPass(!showPass)}>

                                    {
                                        showPass ? <FaRegEyeSlash></FaRegEyeSlash> : <FaEye></FaEye>
                                    }

                                </span>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                                <p>Already Have an Account?<Link to="/login" className="text-blue-500 text-2xl">Login</Link></p>
                            </div>
                            <div className="flex items-center">
                                <hr className="w-full border-t-2 border-gray-300" />
                                <span className="mx-4 text-blue-500">Or</span>
                                <hr className="w-full border-t-2 border-gray-300" />

                            </div>
                            <button onClick={handleGoogleSignIn} className="btn btn-outline">Google sign In</button>
                            <button onClick={handleGithubSignIn} className="btn btn-outline">Github sign In</button>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;