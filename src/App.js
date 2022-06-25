import logo from './logo.svg';
import About from './About';
import Employee from './Employee';
import AddEmployee from './Employee/AddEmployee';
function App() {
  let students = [{
                name:"Deva",
                Course:"Btech",
                age:23
              },{
                name:"Anjali",
                Course:"MCA",
                age:45
              },{
                name:"James",
                Course:"BVOC",
                age:29
              },{
                name:"Sharma",
                Course:"BVOC",
                age:33
              }];
  return (
      <>
        <About/>
        <Employee name="Gaurav" code="o7s/003"/>
        <Employee name="Anita" code="o7s/004"/>
        <Employee name="Daman" code="o7s/010"/>
        <AddEmployee />

        <br/>
        <ul>
          {students.map((element,index )=>(
            <li className='text-danger' key={index+1}>
              Name: {element.name} - Course: {element.Course} - Age:{element.age}
            </li>
          )) }
          
        </ul>
      </>      
  );
}

export default App;
