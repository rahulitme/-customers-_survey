import logo from './logo.svg';
import './App.css';
import Survey from './Survey';  // Import the Survey component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Survey />  {/* Render the Survey component */}
      </header>
    </div>
  );
}

export default App;
