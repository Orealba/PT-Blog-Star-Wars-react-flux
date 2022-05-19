import React from "react";
import { Link } from "react-router-dom";
import   "../../styles/Carousel.css"
import maytheforce from "/src/img/maytheforce.jpeg"
import personajes from "/src/img/personajes.jpg"
import obiwan from "/src/img/obiwan.jpg"


export const Carousel = () => {
return (
	<div className=" home1">
		<div id="carouselExampleControls" className="carousel row" data-bs-ride="carousel ">
            <div className="carousel-inner cl-m-12 imagenescarousel" >
                <div className="carousel-item active">
                <button
				className="btn btn-primary zindex-sticky botonImg1"
				type="button">
				Únete a nuestra comunidad
			</button>
                <img src={maytheforce} className="d-block w-100 " alt="..."/ >
                
                </div>
                <div className="carousel-item">
                <button
				className="btn btn-primary zindex-sticky botonImg2"
				type="button">
				Descubre la nueva serie de Obi-Wan Kenobi
			</button>
                <img src={obiwan} className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <button
				className="btn btn-primary zindex-sticky botonImg3"
				type="button">
				Encuentra tus personajes favoritos
			</button>
                <img src={personajes} className="d-block w-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
	</div>
);
}
