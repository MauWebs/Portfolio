import React from 'react';
import './styles/nav.css';
import { Link, Route, Routes } from 'react-router-dom';
import Proyectos from './Proyectos';
import Main from './Main';
import Contacto from './Contacto';

function Nav() {
  return (
    <div>

      <header>

        <nav className='container'>

          <Link to='/' className='Logo'>Mau Webs</Link>

          <Link to='/' className='link'>Inicio</Link>

          <Link to='/proyectos' className='link'>Proyectos</Link>

          <Link to="/contacto" className='link'>Contacto</Link>

        </nav>

      </header>

        <Routes>

          <Route path='/' element={<Main/>}></Route>

          <Route path='/proyectos' element={<Proyectos/>}></Route>

          <Route path='/contacto' element={<Contacto/>}></Route>

        </Routes>

    </div>

  );
}

export default Nav;
