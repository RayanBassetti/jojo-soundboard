import React from 'react';
// import logo from './logo.svg';
import Main from './components/main';
import './css/App.css';
import './css/index.css'
import './css/style.css'

function App() {
  return (
    <main>
      <header className="appHeader">
        <h1 class="headerText">Jojo Soundboard</h1>
      </header>
       <Main />
    </main>
  );
}

export default App;
