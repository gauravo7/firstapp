import './Employee.css';
function Employee(props){
    return(
        <div class="empBox">
            Employee Name: {props.name} <br/>
            Employee Code: {props.code}
        </div>
    )
}

export default Employee;