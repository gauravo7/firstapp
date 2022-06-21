import logo from './logo.svg';
import './App.css';
import About from './About';
import Employee from './Employee';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React First APP</h1>
        <p>
          Welcome to World of ReactJS
          <About/>
          <Employee name="Gaurav" code="o7s/003"/>
          <Employee name="Anita" code="o7s/004"/>
          <Employee name="Daman" code="o7s/010"/>
        </p>
        <p>This Paragraph Soon oiin Code</p>
      </header>
    </div>
  );
}

export default App;
