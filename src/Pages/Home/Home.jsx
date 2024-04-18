
import { Helmet } from "react-helmet-async";
import Estate from "../../Estate/Estate";


import NavBar from "../../NavBar/NavBar";
import Slider from "../../Slider/Slider";
import Sponsor from "../../Sponsor/Sponsor";
import Agents from "../../Agent/Agents";



const Home = () => {



  return (

    <div>
      <Helmet>
        <title>Sweet Home | Home </title>
      </Helmet>
      <NavBar></NavBar>
      <Slider></Slider>
      <Estate></Estate>
      <Agents></Agents>
     


    </div>
  );
};

export default Home;