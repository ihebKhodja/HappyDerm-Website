import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import logo1 from '../assets/4.png';
import logo2 from '../assets/icons8-dermatology-64.png'
import {RxCross2} from 'react-icons/rx'
import logo5 from '../assets/Artboard_noTex2@3x-COPY.png'


const CheckNavbar = () => {
    return ( 
        <div className='checkup_navbar'>
        <div className='logo'>
            <img src={logo5} alt="Smart Derma logo"  />
            <div>
                <h2>HappDerm</h2>
            </div>
           
        </div>

        <div className='return'>
            <NavLink  to='/'>   <RxCross2 className='cross' />
            </NavLink>
        
        </div>
    </div> 
     );
}
 
export default CheckNavbar;