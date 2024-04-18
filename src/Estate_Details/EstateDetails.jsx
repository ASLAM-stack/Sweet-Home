
import Banner from "../Banner/Banner";
import NavBar from "../NavBar/NavBar";
import { useEffect, useState } from "react";
import UseLoaderData from "../UseLoaderData/UseLoaderData";
import { useParams } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";


const EstateDetails = () => {
    const { data } = UseLoaderData()

    const { id } = useParams()
    const [property, setProperty] = useState(null)

    useEffect(() => {
        if (data && id) {
            const propertyDetails = data.find(item => item.id === parseInt(id))

            setProperty(propertyDetails)
        }
    }, [data, id])
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <div className="mt-6">
                {property ? (
                    <div className="card  glass">
                        <h3 className="text-3xl font-semibold">{property.estate_title}</h3>

                        <p className="flex items-center gap-2"><FaLocationDot className="text-2xl"></FaLocationDot ><span className="text-2xl">{property.location}</span></p>

                        <figure style={{ position: 'relative', display: 'inline-block' }}>

                            <img className="w-full max-h-[500px] relative" src={property.image} alt="car!" />
                            <p className="absolute text-white text-2xl  py-1 bottom-3 right-2 rounded-b-lg bg-sky-400 border border-gray-300 px-5">{property.status}</p>
                        </figure>
                        <div className="flex justify-between">
                            <h2 className="text-2xl">#{property.segment_name}</h2>
                            <h2 className="text-blue-600 text-2xl">Price:{property.price}</h2>

                        </div>
                        <h3 className="text-2xl mt-3 ">Details About this property: <span className="text-xl ">{property.description}</span></h3>
                        <div>
                            <div  className="mt-4 flex items-center">
                                <h2 className="text-xl font-semibold mb-2 text-sky-600">Facilities:</h2>
                                {property.facilities.map((item, index) => (
                                    <span key={index} className=" inline-block p-1 m-1  text-xl border border-gray-300"> {item}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>

        </div>
    );
};

export default EstateDetails;