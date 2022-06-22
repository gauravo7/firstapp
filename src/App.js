import logo from './logo.svg';
import About from './About';
import Employee from './Employee';
import AddEmployee from './Employee/AddEmployee';
function App() {
  return (
      <div>
        <About/>
        <Employee name="Gaurav" code="o7s/003"/>
        <Employee name="Anita" code="o7s/004"/>
        <Employee name="Daman" code="o7s/010"/>
        <AddEmployee />
      </div>      
  );
}

export default App;
