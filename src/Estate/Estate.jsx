import { Link, useNavigate } from "react-router-dom";
import UseLoaderData from "../UseLoaderData/UseLoaderData";
import 'animate.css';
import { CiLocationOn } from "react-icons/ci";
import { useContext,} from "react";
import { AuthContext } from "../providers/AuthProvider";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Estate = () => {
    const { data } = UseLoaderData()
    const { user } = useContext(AuthContext)

    const navigate = useNavigate()

 


    console.log(data)
    return (
        <div className="mt-12">
            <div className="text-center mb-5" data-aos="fade-up">
                <h2 className="inline-block bg-black text-white p-2 text-xl animate__animated animate__bounce">What we Offer </h2>
                <h3 className="font-semibold text-3xl animate__animated animate__bounce ">Our Recent Property</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-8 lg:pl-0 md:pl-0 ">
                {data.map((item) => (
                    <div className="card w-full  bg-base-100 shadow-xl" data-aos="zoom-in" key={item.id}>
                        <figure style={{ position: 'relative', display: 'inline-block' }}>
                            <img className="relative w-full" src={item.image} alt="Property" />
                            <h2 className="absolute left-3 bottom-0 bg-black bg-opacity-50 text-white text-2xl px-4 py-1 rounded-t-lg flex items-center gap-2"><CiLocationOn></CiLocationOn>{item.location}</h2>
                            <p className="absolute text-white text-2xl px-2 py-1 top-3 left-2 rounded-b-lg bg-red-400 border border-gray-300 transform  -rotate-45">{item.status}</p>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{item.estate_title}</h2>
                            <p>{item.description.slice(0, 80)}..</p>
                            <div className="facilities">
                                <h4 className="font-semibold text-lg mt-4">Facilities:</h4>
                                <ul className="flex  flex-wrap gap-2">
                                    {item.facilities.map((facility, index) => (
                                        <li key={index} className="bg-gray-200 text-gray-700 px-2 py-1 rounded">{facility}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="card-actions justify-between">
                                <h2><span className="text-blue-500">{item.price}</span></h2>

                                {user ? (
                                    <Link to={`/details/${item.id}`}>
                                        <button className="btn btn-primary">View Property</button>
                                    </Link>
                                ) : (
                                    <button onClick={() => navigate("/login")} className="btn btn-primary"> View property</button>
                                )}

                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Estate;