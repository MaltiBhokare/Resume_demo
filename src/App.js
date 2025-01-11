import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="welcome-container">
        <h1>Welcome to My Simple App</h1>
        <p>This is a beautifully styled React app!</p>
        <button className="action-button" onClick={() => alert('Button clicked!')}>
          Click Me
        </button>
      </div>
    </div>
  );
}

export default App;
