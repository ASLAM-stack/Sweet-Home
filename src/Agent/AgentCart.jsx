const AgentCart = ({agent}) => {
           
          const {name,position,short_description,image_link} = agent;
           
  return (
    <div>
      <div className="card md:w-80 w-full glass">
  <figure><img src={image_link} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{position}</p>
    <p>{short_description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary w-full">Contact now!</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default AgentCart;
