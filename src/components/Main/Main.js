import React from 'react';

// ------------------------ image ------------------------ //

import CV from '../../img/CV.pdf';
import Mau from '../../img/Mau.png';
import Html from '../../img/habilidades/html-5.png';
import Css from '../../img/habilidades/css-3.png';
import Javascript from '../../img/habilidades/javascript.png';
import React_img from '../../img/habilidades/react.png';
import Bootstrap from '../../img/habilidades/bootstrap.png';
import Python from '../../img/habilidades/python.png';
import Django from '../../img/habilidades/django.png';
import Postgresql from '../../img/habilidades/postgresql.png';
import Git from '../../img/habilidades/git.png';
import Terminal from '../../img/habilidades/terminal.png';

// ------------------------ styles ------------------------ //

import './styles/desktop.css';
import './styles/smartphone.css';
import './styles/tablet.css';

// ------------------------ main ------------------------ //

function Main() {
  return (

    <main>

      <section className='sobre_mi'>

        <article className='info'>

          <img src={Mau} alt="Mau" className='mau' />

          <div>

            <h2 className='developer'>Web Developer</h2>

            <div className="separador"></div>

            <p className='full'>FULL-STACK</p>

          </div>


        </article>

        <section className="habilidades">

          <h2>habilidades</h2>

          <div className="separador_blanco"></div>

          <h4>Estas son las herramientas, lenguajes de programación y frameworks que domino,
            en todos los proyectos en los que
            trabaje utilicé estos para mostrar mis conocimientos y poner en práctica lo aprendido</h4>

          <a href={CV} className='CV' target='_blank' rel='noreferrer'>⇨ Descargar Curriculum ⇦</a>

          <div className="separador_blanco_2"></div>

        </section>

        <section className='herramientas'>

          <article className='front_end'>

            <h3 className='front_end'>front-end</h3>

            <div className='tarjetas'>

              <div className="individual">
                <img loading='lazy' src={Html} alt="html" className='html' />
                <p>html</p>
              </div>

              <div className="individual">
                <img loading='lazy' src={Css} alt="css" className='css' />
                <p>css</p>
              </div>

              <div className="individual">
                <img loading='lazy' src={Javascript} alt="javascript" className='javascript' />
                <p>javascript</p>
              </div>

            </div>

          </article>

          <article className='front_end_extras'>

            <div className='tarjetas'>

              <div className="individual">
                <img loading='lazy' src={React_img} alt="react" className='react' />
                <p>react</p>
              </div>

              <div className="individual">
                <img loading='lazy' src={Bootstrap} alt="bootstrap" className='bootstrap' />
                <p>bootstrap</p>
              </div>

            </div>

          </article>

          <article className='back_end'>

            <h3>back-end</h3>

            <div className='tarjetas'>

              <div className="individual">
                <img loading='lazy' src={Python} alt="python" className='python' />
                <p>python</p>
              </div>

              <div className="individual">
                <img loading='lazy' src={Django} alt="django" className='django' />
                <p>django</p>
              </div>

              <div className="individual">
                <img loading='lazy' src={Postgresql} alt="postgresql" className='postgresql' />
                <p>postgresql</p>
              </div>

            </div>

          </article>

          <article className='extras'>

            <h3>Extras</h3>

            <div className='tarjetas'>

              <div className="individual">
                <img loading='lazy' src={Git} alt="git" className='git' />
                <p>git</p>
              </div>

              <div className="individual">
                <img loading='lazy' src={Terminal} alt="terminal" className='terminal' />
                <p>terminal</p>
              </div>

            </div>

          </article>

        </section>

        <section className="tarjeta_formulario">

          <form name="contact" action="/" className="formulario" method="POST" data-netlify="true" onSubmit="submit">

            <h3>Enviá tus datos para poder contactarme</h3>

            <input type="hidden" name="form-name" value="contact" />

            <input required id="name" name="name" type="text" className="name" placeholder="Nombre o empresa" />

            <input required id="email" name="email" type="email" className="email" placeholder="Email" />

            <textarea required className="mensaje" name="message" id="message" placeholder="Mensaje"></textarea>

            <button className="enviar" id="submit" type="submit">Enviar</button>

          </form>

        </section>

      </section>

    </main>

  );
}

export default Main;