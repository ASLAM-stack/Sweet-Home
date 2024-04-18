import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from 'sweetalert2'




const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)


    const handleLogout = e => {
        e.preventDefault();
        logOut()
            .then(() => {
                Swal.fire({
                    title: 'Success!',
                    text: 'You have successfully logged out.',
                    icon: 'success',
                    confirmButtonText: 'OK'
                });
            })

            .catch(error => console.error(error))
    }


    const navBar = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to='/update'>Update Profile</NavLink></li>

        {user && <>
            {/* <li><NavLink to='/details/:id'>Estate Details</NavLink></li> */}
            <li><NavLink to='/user'>UserProfile</NavLink></li>
        </>}
        <li><NavLink to='/contact'>Contact Us</NavLink></li>

    </>
    return (

        <div>

            <div className="navbar bg-base-100">

                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-30 p-2 shadow bg-base-100 rounded-box w-52">
                            {navBar}
                            {
                        user ? 
                            <button onClick={handleLogout} className="btn bg-green-500  ">Log Out</button>  

                            : <Link to="/login" className="btn bg-green-500">Login</Link>
}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost text-xl font-bold ">Sweet Home</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navBar}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <div className="flex gap-2 items-center">
                            <div title={user?.displayName || ""}  className="avatar">
                                <div className="w-12 rounded-full">
                                    <img src={user?.photoURL || "https://cdn-icons-png.freepik.com/512/1177/1177568.png?ga=GA1.1.381421229.1713354787"} />
                                </div>
                            </div>
                            <button onClick={handleLogout} className="btn bg-green-500 max-[350px]:hidden  display  ">Log Out</button> </div>

                            : <Link to="/login" className="btn bg-green-500 max-[350px]:hidden display  ">Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;