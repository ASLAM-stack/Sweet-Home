import Marquee from "react-fast-marquee";

const Sponsor = () => {
    return (
        <div>
            <div>
                <h1 className="text-2xl font-bold text-center underline mb-3">Our Client</h1>
            </div>
            <div className="container mx-auto min-h-52 gap-3  flex items-center justify-evenly mt-5">
            
            <Marquee>
                <img src="https://i.ibb.co/kg3Vqrp/4.png" alt="" />
                <img src="https://i.ibb.co/3WF2vwS/3.png" alt="" />
                <img src="https://i.ibb.co/JcRdfps/1.png" alt="" />
                <img src="https://i.ibb.co/z44HLmr/2.png" alt="" />
                <img src="https://i.ibb.co/dgJYfR3/5.png" alt="" />
            </Marquee>
        </div>
        </div>
      
    );
};

export default Sponsor;