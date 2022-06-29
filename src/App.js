
import { 
  BrowserRouter as Router, 
  Route ,
  Routes
} from 'react-router-dom';
import Dashoard from './Dashoard';
import G from './Comp/G';
import About from './About'
import logo from './logo.svg';
import AddEmployee from './Employee/AddEmployee';
function App() { 
 
  return (
      <>
        <ul id="links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/g">G Page</a>
          </li>
          <li>
            <a href="/addEmp">Add Emp</a>
          </li>
        </ul>
        <Router>         
          <Routes> 
              <Route path="/" element={<Dashoard/>}/>
              <Route path="/g" element={<G/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/addEmp" element={<AddEmployee/>}/>
          </Routes>
        </Router>
      </>      
  );
}

export default App;
