import React, {Component} from "react";
export default class Sidebar extends Component{
    constructor(props){
        super(props);
        this.state = {
            name:props.name,
            allow:props.allow
        }
    }
    onChange = (e)=>{
        this.setState({name:"Sharma"})
    }
    render(){
        if(this.state.allow==="true"){
            return(
                <>
                    <h2>I am Sidebar Class component - 
{this.state.name==="Gaurav"? "Mr Gaurav": this.state.name  }
        
        </h2>
                    <button onClick={this.onChange}>Click</button>
                </>
            )
        }else{
            return(
                <>
                    <h2>Hey login First To see the Value</h2>
                </>
            )
        }
        
    }
}
