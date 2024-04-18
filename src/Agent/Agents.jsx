import AgentCart from "./AgentCart";

 

const Agents = () => {
    const agents =[
        {
          "name": "Alice Johnson",
          "position": "Buyer's Agent",
          "short_description": "Whether it is working with a first time home buyer, a luxury home listing or a seasoned inv.",
          "image_link": "/team-img-1.jpg"
        },
        {
          "name": "David Smith",
          "position": "Listing Agent",
          "short_description": "As an award-winning Realtor ® and CEO of The Egypt Sherrod Real Estate Group, Egypts dail.",
          "image_link": "/team-img-3.jpg"
        },
        {
          "name": "Emily Davis",
          "position": "Real Estate Broker",
          "short_description": "There are many variations of passages of Lorem Ipsum available, but the majority have suff.",
          "image_link": "/team-img-2.jpg"
        }
      ]
    return (
        <div className="mb-12 mt-12 p-4 md:p-0">
            <div className="text-center mt-5 mb-5">
                <span className="font-bold">Meet Our</span>
                <h1 className="text-4xl font-bold">Best Agents</h1>
                <p>With the “list agents shortcode” you can show your agents in any page, along side with their <br />
contact details and link to their agent profile.</p>
            </div>
            <div className="flex gap-5 flex-wrap justify-center">
                {
                    agents.map((agent,idx) =><AgentCart agent={agent} key={idx}></AgentCart>)
                }
            </div>
        </div>
    );
};

export default Agents;