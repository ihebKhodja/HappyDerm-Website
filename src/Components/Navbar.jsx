import logo from '../assets/3.png';
import logo2 from '../assets/icons8-dermatology-64.png'
import logo3 from '../assets/Artboard_noText.png'
import logo4 from '../assets/Artboard_noTex2.png'
import logo5 from '../assets/Artboard_noTex2@3x-COPY.png'

import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = () => {return (

    <div className='navbar'>
        <div className='logo'>
            <img src={logo5} alt="Smart Derma logo"  />
            <div>
                <h2>HappyDerm</h2>
            </div>
           
        </div>

        <h2 className='about'>
            <NavLink to='/about'>
         About Us
            </NavLink>            
        </h2>
    </div>  
    );
}
 
export default Navbar;