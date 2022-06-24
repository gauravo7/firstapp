import { useState } from "react";

export default function AddEmployee(){
    
    const [ename,setEname] = useState("Gaurav");
    const [ecode,setEcode] = useState("o7s"); 
    const showData = (e)=>{
        e.preventDefault();
        console.log("Name is ",ename)
        console.log("Code is ",ecode) 
        setEcode("")
        setEname("")
    }
    const onsetName = (e) =>{
        setEname(e.target.value)
    }
    const onsetCode = (e)=> setEcode(e.target.value) 
    return(
        <div>
            <form onSubmit={showData}>
                Enter EMP Name:{ename}<br/>
                <input 
                    type="text" 
                    name="" 
                    onChange={onsetName} 
                    value={ename}
                />
                <br/>
                Enter EMP Code:<br/>
                <input type="text" name="ecode" value={ecode}
                onChange={onsetCode}
                />
                <input type="submit"  />
            </form>
        </div>
    );
}