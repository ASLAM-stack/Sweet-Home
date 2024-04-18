import { useContext } from "react";
import NavBar from "../../NavBar/NavBar";
import { AuthContext } from "../../providers/AuthProvider";

import { Helmet, HelmetProvider } from "react-helmet-async";


const UserProfile = () => {
    const { user } = useContext(AuthContext)
    return (
        <HelmetProvider>
            <div>
                <Helmet>
                    <title>User ||Profile</title>
                </Helmet>
                <NavBar></NavBar>
                {
                    user && <>


                        <div className="container mx-auto mt-5">
                            <div className="max-w-md mx-auto bg-gray-300 shadow-md rounded-lg overflow-hidden">
                                <div className="p-4">
                                    <h2 className="text-xl font-semibold mb-2">User Profile</h2>
                                    <div className="border-b border-gray-200 pb-4">
                                        <div className="flex items-center mb-3">
                                            <div className="bg-gray-200 h-10 w-10 flex items-center justify-center rounded-full mr-3">
                                                <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                                                </svg>
                                            </div>
                                            <h3 className="text-lg font-semibold">{ user.displayName}</h3>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="bg-gray-200 h-10 w-10 flex items-center justify-center rounded-full mr-3">
                                                <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 4.5v2a2 2 0 002 2h1m14-4h1a2 2 0 012 2v12a2 2 0 01-2 2h-1m-2 0V6m0 0H8m0 0H6m0 0V4.5a2 2 0 012-2h4a2 2 0 012 2V6m0 0H8" />
                                                </svg>
                                            </div>
                                            <span className="text-gray-600">{user.email}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </>


                }
            </div>
        </HelmetProvider>
    );
};

export default UserProfile;