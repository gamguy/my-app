import React from 'react';
import img_file from './img/tiger.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My React for github pages</h1>
      <img src={img_file} alt="Hello" />
    </div>
  );
}

export default App;
