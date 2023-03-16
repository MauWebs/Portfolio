import React from "react";

// ------------------------ image ------------------------ //

import Social from "../../img/proyectos/Social.jpeg"
import Calculadora from "../../img/proyectos/Calculadora.jpg";
import Contador from "../../img/proyectos/Contador.jpg";
import Cafetería from "../../img/proyectos/Cafetería.jpg";

// ------------------------ styles ------------------------ //

import './styles/desktop.css';
import './styles/smartphone.css';
import './styles/tablet.css';

// ------------------------ proyectos ------------------------ //

function Proyectos() {
    return (

        <main>

            <section className="proyectos">

                <article className="proyecto">

                    <img loading="lazy" src={Social} alt="mi api propia" />

                    <div className="info_proyecto">

                        <h2 className="titulo">Red social</h2>

                        <p className="descripcion">Esta es una red social con registro de usuario, en la que use base de datos y construí la API con Django Rest y la consumí con React mediante peticiones (HTTP) con Redux</p>

                        <a href="https://social-programmer-mau-webs.netlify.app/" rel="noreferrer" target="_blank" className="link_proyecto">Visitar</a>

                    </div>

                </article>

                <div className="proyecto">

                    <img loading="lazy" src={Calculadora} alt="Calculadora" />

                    <div className="info_proyecto">

                        <h2 className="titulo">Calculadora</h2>

                        <p className="descripcion">La calculadora fue mi primer proyecto construido con react, en los que se pueden ejecutar calcalos, ya sean sumas, restas, multiplicaciones o divisiones</p>

                        <a href="https://mau-webs-calculator.netlify.app/" rel="noreferrer" target="_blank" className="link_proyecto">Visitar</a>

                    </div>

                </div>


                <article className="proyecto">

                    <img loading="lazy" src={Contador} alt="Contador de clics" />

                    <div className="info_proyecto">

                        <h2 className="titulo">Contador de clics</h2>

                        <p className="descripcion">Otro de mis proyectos con react <br /> Tiene como objetivo cuantificar la cantidad de clics del usuario que lo utilice </p>

                        <a href="https://mau-webs-click-counter.netlify.app/" rel="noreferrer" target="_blank" className="link_proyecto">Visitar</a>

                    </div>

                </article>

                <article className="proyecto">

                    <img loading="lazy" src={Cafetería} alt="Pagina web de cafetería" />

                    <div className="info_proyecto">

                        <h2 className="titulo">Cafetería</h2>

                        <p className="descripcion">Este es un proyecto que está creado con html y css puro, como buen programador, una taza de café siempre viene bien para llevar el código adelante</p>

                        <a href="https://mau-webs-coffee-break.netlify.app/" rel="noreferrer" target="_blank" className="link_proyecto">Visitar</a>

                    </div>

                </article>

            </section>

        </main>

    );
}

export default Proyectos;