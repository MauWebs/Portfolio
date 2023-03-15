import React from 'react';

// ------------------------ external ------------------------ //

import { Link, Route, Routes } from 'react-router-dom';

// ------------------------ components------------------------ //

import Main from '../Main/Main';
import Proyectos from '../Proyectos/Proyectos';
import Contacto from '../Contacto/Contacto';

// ------------------------ styles ------------------------ //

import './styles/nav.css';

// ------------------------ nav ------------------------ //

function Nav() {
  return (
    <div>

      <header>

        <nav class="nav">

          <Link href="" class="logo">Mau Webs</Link>

          <input class="menu_btn" type="checkbox" id="menu_btn" />

          <label class="menu_icon" for="menu_btn"><span class="navicon"></span></label>

          <ul class="menu">

            <li className="link_nav"><Link className="link_link" to="/">Inicio</Link></li>

            <li className="link_nav"><Link className="link_link" to="/proyectos">Proyectos</Link></li>

            <li className="link_nav"><Link className="link_link" to="/contacto">Contacto</Link></li>

          </ul>

        </nav>

      </header>

      <Routes>

        <Route path='/' element={<Main />}></Route>

        <Route path='/proyectos' element={<Proyectos />}></Route>

        <Route path='/contacto' element={<Contacto />}></Route>

      </Routes>



    </div>

  );
}

export default Nav;