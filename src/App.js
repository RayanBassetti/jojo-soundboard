import React from 'react';
// import logo from './logo.svg';
import Index from './components/index';
import Main from './components/main';
import './css/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Index />
        <Main />
      </header>
    </div>
  );
}

export default App;
