import { useState, useEffect } from "react";
import ResultsContainer from "../Components/ResultsContainer";
import CheckNavbar from "../Components/CheckNavbar";


const Results = () => {
   
    return ( 
        <div>
            <CheckNavbar />
            <ResultsContainer  />
        </div>
     );
}
 
export default Results;