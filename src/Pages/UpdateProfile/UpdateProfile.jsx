import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import NavBar from "../../NavBar/NavBar";
// import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const UpdateProfile = () => {
    const { user,handleUpdateProfile } = useContext(AuthContext);
    
    const [name, setName] = useState('');
    const [photo, setPhoto] = useState('');



    useEffect(() => {
        setName(user?.displayName);
        setPhoto(user?.photoURL);
    }, [user?.displayName, user?.photoURL]);

    const onChangeName = e => {
        e.preventDefault();
        const newName = e.target.value;
        console.log(newName);
        setName(newName);
    };

    const onChangePhoto = e => {
        e.preventDefault();
        const newPhoto = e.target.value;
        console.log(newPhoto);
        setPhoto(newPhoto);
    };

    const handleUpdate = () => {
     
        handleUpdateProfile(name, photo);
      
        Swal.fire({
            icon: 'success',
            title: 'Profile Updated',
            showConfirmButton: false,
            timer: 1500,
        });
    };

    return (
        <div className="md:p-0 p-4">
            <Helmet>
        <title>Sweet Home | Update profile </title>
      </Helmet>
            <NavBar></NavBar>


            <div className="bg-lime-300 min-h-96 flex justify-around items-center flex-wrap p-4 gap-5 md:gap-0 rounded-lg">

                <div className="md:w-1/2 w-full
                ">
                    <h2 className="text-3xl text-center mb-4">User Profile</h2>
                     <img className="mx-auto mb-4 w-40" src={user.photoURL} alt="" />
                    <p className="text-lg"><strong>Name:</strong> {user.displayName}</p>
                    <p className="text-lg"><strong>Email:</strong> {user.email}</p>
                    <p className="text-lg"><strong>Photo URL:</strong> {user.photoURL.slice(0,20)}</p>
                </div>
                <div>

                    <div className="flex flex-col justify-center">
                        <h1 className="text-5xl font-bold text-center mb-6">Update Your Profile</h1>
                        <div className="card w-full max-w-md mx-auto shadow-xl bg-white p-5">
                            <div>
                                <h2> Your Name:</h2>
                                <input
                                    type="text"
                                    className="input w-full bg-gray-300 mb-3 "
                                    onChange={e => onChangeName(e)}
                                    value={name}
                                />
                            </div>
                            <div>
                                <h2> Your Photo URL:</h2>
                                <input
                                    type="text"
                                    className="input bg-gray-300 w-full mb-3 "
                                    value={photo}
                                    onChange={e => onChangePhoto(e)}
                                />
                            </div>
                            <div>
                                <h2> Your Email:</h2>
                                <input
                                    disabled
                                    type="email"
                                    className="input bg-gray-300 w-full mb-3 "
                                    value={user?.email || 'Not Found'}
                                />
                            </div>

                            <div className="flex justify-end">
                                <button
                                    onClick={handleUpdate}
                                    className="btn bg-blue-700 hover:bg-blue-gray-900 text-white "
                                >
                                    Update Now
                                </button>
                            </div>
                        </div>
                    </div>




                </div>
            </div>

        </div>
    );
};

export default UpdateProfile;
