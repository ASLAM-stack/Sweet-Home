import { useEffect, useState } from "react";


const UseLoaderData = () => {
    const [data, setData] = useState([])

    useEffect(()=>{
        fetch('/data.json')
        .then(res => res.json())
        .then(data => setData(data))
    },[]);

    return {data};
};

export default UseLoaderData;