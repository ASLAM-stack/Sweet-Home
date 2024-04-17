import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";

import { useContext, useState } from "react";
import   { AuthContext } from "../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";

const Register = () => {
    const {createUser} = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm() 
    const onSubmit = data => {
        console.log(data)
    }
    const [show,setShow] = useState(false);
    return (
        <div className="w-full flex items-center justify-center min-h-screen p-2 md:p-0">
            <div className="md:w-[50%] p-20 w-full border-2 border-red-200 rounded-md shadow mb-12 mt-12">
                <div className="text-center mb-2">
                    <h1 className=" text-4xl font-bold mb-2">Register Now</h1>
                    <p className="text-sm dark:text-gray-600">Register to access all of our features...</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm">
                            Full Name
                        </label>
                        <input id="name" type="text" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" {...register("fullName",{ required: true })}/>
                        {errors.fullName && <span className="font-work text-red-500">This field is required</span>}
                    </div>
                    <div>
                        <label htmlFor="photo" className="block mb-2 text-sm">
                            Photo Url
                        </label>
                        <input id="photo" type="url" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" {...register("imageUrl",{ required: true })}/>
                        {errors.imageUrl && <span className="font-work text-red-500">This field is required</span>}
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm">
                            Email adrress
                        </label>
                        <input id="email" type="email" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" {...register("email",{ required: true })}/>
                        {errors.email && <span className="font-work text-red-500">This field is required</span>}
                    </div>
                  <div>
                  <div className="flex justify-between mb-2">
                        <label htmlFor="password" className="text-sm">
                            Password
                        </label>
                        <a href="#" className="text-xs hover:underline text-gray-600">
                            Forgot password
                        </a>
                    </div>
                    <div className="relative">
                        <input className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" type={show ? "text": "password"} {...register("password",{ required: true })}/>
                        {errors.password && <span className="font-work text-red-500">This field is required</span>}
                        {
                            show ? <FiEye className="absolute right-5 top-3 text-lg font-bold " onClick={()=>{
                                setShow(!show)
                            }} /> : <FiEyeOff className="absolute right-5 top-3 text-lg font-bold " onClick={()=>{
                                setShow(!show)}}/>
                        }
                    </div>
                  </div>
                    <div>
                        <button className="btn w-full px-8 py-3 font-semibold rounded-md bg-blue-600 text-gray-50">Log in</button>

                    </div>
                    <div>
                        <p className="px-6 text-sm text-center text-gray-600"> Already have an account yet? <Link to='/login' className="hover:underline font-bold text-lg text-violet-600">Log in</Link></p>
                    </div>
                </form>
                <div className="divider divider-primary">Sign with</div>
                <div className="space-y-4">
                    <button className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm py-3.5 px-7 rounded-lg border border-blue-gray-500 text-blue-gray-500 hover:opacity-75 focus:ring focus:ring-blue-gray-200 active:opacity-[0.85] flex items-center w-full gap-3">
                        <img src="https://docs.material-tailwind.com/icons/google.svg" alt="" className="h-6 w-6"/>
                        Continue with Google
                    </button>
                    <button className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm py-3.5 px-7 rounded-lg border border-blue-gray-500 text-blue-gray-500 hover:opacity-75 focus:ring focus:ring-blue-gray-200 active:opacity-[0.85] flex items-center w-full gap-3 relative">
                        
                        Continue with GitHub
                        <span className="absolute right-0 grid h-full w-12 place-items-center bg-light-blue-600 transition-colors group-hover:bg-light-blue-700">
                        <FaGithub className="text-3xl"/>
                        </span>
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Register;