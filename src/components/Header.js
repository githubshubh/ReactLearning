import {LOGO_URL} from "./../utils/constants";
import { Link } from "react-router-dom";

const Header =()=>{
    return (
         <div className="flex justify-between bg-purple-200">
            <div className="logo-container">
                <img className="h-28 p-2" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul className="flex py-12"> 
                <li className="px-5"> <Link to="/">Home</Link></li>
                <li className="px-5"><Link to="/about">About Us</Link></li>
                <li className="px-5"><Link to="/contact">Contact Us</Link></li>
                <li className="px-5"><Link to="/cart">Cart</Link></li>
                <li className="px-5"><Link to="/lazyloading">LazyLoading</Link></li>
                </ul>
            </div>
         </div>
    )
}

export default Header;