import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { Player } from '@lottiefiles/react-lottie-player';
import dermaAnimation from '../assets/101059-dermatologist.json'


const Container = () => {
    return ( 
        <div className="biggerContainer">

        <div className="container">
            <h1> What conerns you about skin ?</h1>
            <h3>Check your skin and get instant results <br />  within 1 minutes  </h3>
                <NavLink to="/checkup">
                 <button>Start Checkup</button>
                </NavLink>
        </div>
        
        <div className="doctor">

        <Player 
                src={dermaAnimation}
                className="player"
                loop
                autoplay
        />
        </div>
   
        </div>

     );
}
 
export default Container;