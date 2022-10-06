import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import "../../styles/BoxesPersonajes.css";
import { Context } from "../store/appContext";

export const BoxesPersonajes = (props) => {
  const { store, actions } = useContext(Context);
  return (
    <>
      <div className="card mb-3 theBox">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={store.FotosPersonajes[props.i]}
              className="fotosPersonajes"
              alt="..."
            />
          </div>

          <div className="col-md-8">
            <div className="card-body1 ">
              <p className="boxText">Name: {props.name}</p>
              <p className="boxText">Height: {props.height}</p>
              <p className="boxText">Hair Color: {props.hair_color}</p>
              <p className="boxText">Eye Color: {props.eye_color}</p>
              <p className="boxText">Gender: {props.gender}</p>
            </div>
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
    </>
  );
};
