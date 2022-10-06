import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import   "../../styles/thePlanets.css"
import { Context } from "../store/appContext"


export const BoxesPlanets = (props) => {
    const {store,actions}= useContext(Context)
    return (
        <>
        
        <div className="card mb-3 theBox">
        <div className="row g-0">
            <div className="col-md-4">
            <img src={store.FotosPlanetas[props.i]}  className="fotosPersonajes" alt="..."/>
            
            </div>
            <div className="col-md-8">
            <div className="card-body1 ">
                <p className="boxText">Name: {props.name}</p>
                <p className="boxText">Rotation Period: {props.rotation_period}</p>
                <p className="boxText">Porbital Period: {props.porbital_period}</p>
                <p className="boxText">Population: {props.population}</p>
                <p className="boxText">Climate: {props.climate}</p>
                {actions.isFav(props.name, "personajes") ? (
              <button
                onClick={() => {
                  actions.deleteFav(props.name, "personajes");
                }}
                className="buttonDeleteMovies"
              >
                <i class="fas fa-trash"></i>
              </button>
            ) : (
              <button
                onClick={() => {
                  actions.addFav(props.name, "personajes");
                }}
                className="buttonHeartMovies"
              >
                <i class="fas fa-heart "></i>
              </button>
            )}
            </div>
            </div>
           
        </div>
        </div>
        </>
);
}