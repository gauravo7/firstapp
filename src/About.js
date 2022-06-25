import { Fragment, useState } from "react";
import {t3} from "./test";
import locaVar from './test';
function About(){
    const [data2,setData2] = useState("Gaurav Sharma");
    const openAlert = ()=>{
        setData2("Sharma G")
    }
    return(
        <>
            <h2>About {data2} </h2>
            {locaVar.t4}<br/>


            {t3}<br/>
            <button onClick={openAlert}>
                Click Me To See Data
            </button>
            <img 
            style={{"width":"200px","height":"200px"}} 
            src="assests/images/download.jpg" alt="ALT"/>
            <br/>
        </>
    );
}

export default About;