import { useState, useEffect } from "react";
import { MoonLoader } from "react-spinners";
import CheckupContainer from "../Components/CheckupContainer";
import CheckNavbar  from "../Components/CheckNavbar";


const Checkup = () => {
  
    
    const  [loading, setLoading] = useState(false);
    useEffect(() =>{
    setLoading(true);
    setTimeout(() =>{
      setLoading(false);
      },1000)

    },[])
    return ( 
    
    <div className="checkup">
        {
            loading 
            ?
            <div className="page_loader">
            <MoonLoader color="#ffffff"  size={70}/>

            </div>
            :
            <div>
                <CheckNavbar />
                <CheckupContainer />

            </div>
}
    </div> );
}
 
export default Checkup;