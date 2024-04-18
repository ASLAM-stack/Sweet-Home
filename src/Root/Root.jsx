import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Sponsor from "../Sponsor/Sponsor";
// ..
AOS.init();

const Root = () => {
    return (
       <div>
         <div className="max-w-6xl mx-auto">
            <Outlet></Outlet>
          
        </div>
        <Sponsor></Sponsor>
        <Footer></Footer>
       </div>
    );
};

export default Root;