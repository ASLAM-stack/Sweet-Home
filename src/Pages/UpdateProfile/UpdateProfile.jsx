import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import NavBar from "../../NavBar/NavBar";
// import { useNavigate } from "react-router-dom";
import { FaUserSecret } from "react-icons/fa";
import Swal from "sweetalert2";

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
        <div>
            <NavBar></NavBar>


            <div className="bg-base-200 min-h-96 flex justify-around items-center">

                <div>
                    <h2 className="text-3xl text-center mb-4">User Profile</h2>
                    <FaUserSecret size={200} className="mx-auto mb-8"></FaUserSecret>
                    <p className="text-lg"><strong>Name:</strong> {user.displayName}</p>
                    <p className="text-lg"><strong>Email:</strong> {user.email}</p>
                    <p className="text-lg"><strong>Photo URL:</strong> {user.photoURL}</p>
                </div>
                <div>

                    <div className="flex flex-col justify-center">
                        <h1 className="text-5xl font-bold text-center mb-6">Update Your Profile</h1>
                        <div className="card w-full max-w-md mx-auto shadow-xl bg-white">
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
