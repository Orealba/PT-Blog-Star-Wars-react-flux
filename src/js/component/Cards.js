import React from "react";
import { Link } from "react-router-dom";
import   "../../styles/Cards.css"
import starWarsFilms from "/src/img/starWarsFilms.jpg"
import tatooine from "/src/img/tatooine+.jpeg"
import personas from "/src/img/personas.jpeg"


export const Cards = () => {
    return (
	<div className="cointainer"> 

        <div className="row cl-m-4 theCard">
            <div className="row cl-m-1"></div>
            <div className="row">
                <div className="card cl-m-10 cardOnly">
                    <img src={starWarsFilms} className=" foto1" alt="..."/>
                    <div className="card-body">
                        <h1 className="card-title">PELÍCULAS</h1>
                        <p className="card-text">Encuentra aquí toda la información necesaria sobre la mejor saga de la galaxia</p>
                        
                        <Link to={'/peliculas/'}>
                        <a href="#" className="btn btn-primary">LEER MÁS</a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="row cl-m-1"></div>
        </div>
        <div className="row cl-m-4 theCard">
            <div className="row cl-m-1"></div>
            <div className="row">
                <div className="card cl-m-10 cardOnly">
                    <img src={tatooine} className=" foto2" alt="..."/>
                    <div className="card-body">
                        <h1 className="card-title">PLANETAS</h1>
                        <p className="card-text">Descubre en profundidad cada planeta al que viajan los personajes de esta historia</p>
                        <Link to={'/planetas/'}>
                        <a href="#" className="btn btn-primary">LEER MÁS</a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="row cl-m-1"></div>
        </div>
        <div className="row cl-m-4 theCard">
            <div className="row cl-m-1"></div>
            <div className="row">
                <div className="card cl-m-10 cardOnly">
                    <img src={personas} className="card-img-top foto3" alt="..."/>
                    <div className="card-body">
                        <h1 className="card-title">PERSONAJES</h1>
                        <p className="card-text">¿Quieres saber más de los personajes de tus series y películas favoritas? Aquí los tenemos</p>
                        <Link to={'/personajes/'}>
                        <a href="#" className="btn btn-primary">LEER MÁS</a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="row cl-m-1"></div>
        </div>
    </div>
);
}
