import React, { useContext } from "react";
import { Link } from "react-router-dom";
import   "../../styles/more.css"

import { Context } from "../store/appContext"

export const More = (props) => {
    
    const {store,actions}= useContext(Context)
    return (
        <>
        
        <div className="card mb-3 theBoxFilms2">
        <div className="row g-0">
            <div className="col-md-4">
            <img src={store.FotosFilms[props.i]}  className="fotosPeliculas2" alt="..."/>
            </div>
            <div className="col-md-8">
            <div className="card-body1 ">
                <p className="boxTextfilm2">Title: {props.title}</p>
                <p className="boxTextfilm2">Episode Id: {props.episode_id}</p>
                <p className="boxTextfilm2">Director: {props.director}</p>
                <p className="boxTextfilm2">Producer: {props.producer}</p>
                <p className="boxTextfilm2">Release Date: {props.release_date}</p>
                <p className="boxTextfilm2">Opening Crawl: {props.opening_crawl}</p>
                <p className="boxTextfilm2">Characters: {props.characters}</p>
                <p className="boxTextfilm2">Planets: {props.planets}</p>
                <p className="boxTextfilm2">Vehicles: {props.vehicles}</p>
                <p className="boxTextfilm2">Especies: {props.species}</p>

            </div>
            </div>
           
        </div>
        </div>
        </>
);
}