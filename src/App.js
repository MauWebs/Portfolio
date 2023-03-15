import React from 'react';

// ------------------------ components ------------------------ //

import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

// ------------------------ styles ------------------------ //

import './App.css';

// ------------------------ app ------------------------ //

function App() {
  return (

    <div className="App">

      <div className='border'>

      <Nav />
      
      <Footer />

      </div>
      
    </div>
    
  );
}

export default App;
