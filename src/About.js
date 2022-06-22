import { useState } from "react";

function About(){
    const [data2,setData2] = useState("Gaurav Sharma");
    const openAlert = ()=>{
        setData2("Sharma G")
    }
    return(
        <div>
            <h2>About {data2} </h2>
            <button onClick={openAlert}>
                Click Me To See Data
            </button>
        </div>
    );
}

export default About;