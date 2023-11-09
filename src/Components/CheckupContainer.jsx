import {FiUpload} from 'react-icons/fi'
import { useState } from "react";
import { useEffect } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import {AiFillInfoCircle} from 'react-icons/ai'

const CheckupContainer = () => {

     const initialResults= {
      "AKIEC":"00",
      "BCC":"00",
      "VASC":"00",
      "BKL":"00",
      "NV":"00",
      "DF":"00",
      "MEL":"00",
    };
    const [results, setResults]=useState(initialResults);
    
    // benign NV DF Bkl
    // malignant MEL BCC AKIEC VASC
    const [image, setImage] = useState(null);

    useEffect(() =>{

        let uploadImage = async() => {
            if(image) { 
            try{
                // console.log(image);
                const formData = new FormData();
                formData.append('image', image);
                for  (let [name, value] of formData.entries())
                console.log(name , value)
                let res = await fetch("http://192.168.239.254:8000/api/diag/",{
                    method:'POST',
                    body: formData,
                });
                const resJSON= await res.json();
                setResults(resJSON);
            }catch(err){
                console.log(err)
            }
        }
        };

        uploadImage();
    },[image]);
     
     let handleSubmit= (e) =>{
        setImage(e.target.files[0]);
        } 




    
    let rows=[]
    let max=null
    let maxC=''
    let classe='null'
    let advice=''
    let classeType=''
    let info=''
    

    if(results !=null){

    const arr = Object.entries(results);

    const maxArr = ()=>{

             for (let i = 0; i < 7; i++) {   
                if(max == null || max < arr[i][1]){
                 max = arr[i][1];
                 maxC=arr[i][0];
                }
                     
            }
            
    }
    maxArr()

    if((maxC ==='DF') ||(maxC ==='BKL')||(maxC==='NV')){
         classe = 'Benign';

         
    }
    if((maxC =='AKIEC') ||(maxC =='BCC')||(maxC =='MEL')||(maxC =='VASC')){
        classe='Malign';
    }  

    for(let i= 0; i< arr.length; i++){
    rows.push(
        <span >
            <li>{arr[i][0]} </li>
            <li><ProgressBar completed = {arr[i][1]} bgColor = "#17b580" animateOnRender = {true} /></li>
        </span>
    )
    } 

    if(maxC==='NV') {
    maxC='Melanocytic nevi'
    info='https://www.ncbi.nlm.nih.gov/books/NBK563168/#:~:text=A%20congenital%20melanocytic%20nevus%20(CMN,presence%20of%20excess%20hair%20growth.'

    }
    if(maxC==='BKL'){ 
        maxC='Benign keratosis-like lesions'
        info='https://www.mayoclinic.org/diseases-conditions/seborrheic-keratosis/symptoms-causes/syc-20353878'

}
    if(maxC==='DF'){ 
        maxC='Dermatofibroma'
        info='https://www.ncbi.nlm.nih.gov/books/NBK470538/#:~:text=Dermatofibroma%20is%20a%20commonly%20occurring,histiocytomas%2C%20or%20common%20fibrous%20histiocytoma.'

}
    if(maxC==='AKIEC') { 
        maxC='Actinic keratoses and intraepithelial carcinoma'
        info='https://www.ncbi.nlm.nih.gov/books/NBK557401/#:~:text=Actinic%20keratoses%20(AKs)%20are%20premalignant,individuals%20with%20cumulative%20sun%20exposure.'


}
    if(maxC==='BCC') {
        maxC='Basal cell carcinoma'
        info='https://www.mayoclinic.org/diseases-conditions/basal-cell-carcinoma/symptoms-causes/syc-20354187'

    }
    if(maxC==='MEL'){ maxC='Melanoma'
}
    if(maxC==='VASC') {
        maxC='Vascular lesions'
        info='https://www.ssmhealth.com/cardinal-glennon/services/pediatric-plastic-reconstructive-surgery/hemangiomas#:~:text=Vascular%20lesions%20are%20relatively%20common,Vascular%20Malformations%2C%20and%20Pyogenic%20Granulomas.'


    }
    
    if(classe==='Benign'){
        advice= <div> 
            Its probably nothing, but you should schedule a doctor appointement.
        </div>
        classeType=
        <li className="benign">
            This lesion is {classe}.
        </li>
    }
    if(classe==='Malign'){
        advice = <div>
            This maybe serious, you should see a doctor ASAP.
        </div>
        classeType=  <li className="malign">
            This lesion is {classe}.
        </li>
    }
    
    
   }
    
    return (  
        <div className="container2">
               <div >
                    <h2>Let's start</h2>
                    <p>Add photo to make scan. You can upload photo from the device</p>
                    <div className="upload">
                        <label htmlFor="button-file">
                        <FiUpload className="fileupload"/> Upload Photo 

                    </label> 
                    <input type="file" id="button-file" onChange={handleSubmit} />
                </div>

                    <div className="progess_main">
                    {rows}       
                    </div>


                <div className="results">
                    <h2>The results shows that:</h2>
                    <ul>
                    
                        {classeType}
                        <li>Type: {maxC}.</li>
                        <li>Confidence: {max} %.</li>
                        <li>{advice}</li>
                        <li>  
                            <a href={info} target="_blank"> 
                            <AiFillInfoCircle  className="info_circle"/>For more Information about
                            <strong> {maxC}</strong>.</a>
                            </li>
                    </ul>
                </div>
        
                

                </div>

        
               

        

            

        </div>
    );
}
 
export default CheckupContainer;