import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/boxes.css";

import { Context } from "../store/appContext";

export const Boxes = (props) => {
  const { store, actions } = useContext(Context);
  console.log(props);
  return (
    <>
      <div className="card mb-3 theBoxFilms">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={store.FotosFilms[props.i]}
              className="fotosPeliculas"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body1 ">
              <p className="boxTextfilm">Title: {props.title}</p>
              <p className="boxTextfilm">Director: {props.director}</p>
              <p className="boxTextfilm">Producer: {props.producer}</p>
              <p className="boxTextfilm">Release Date: {props.release_date}</p>
              <p className="boxTextfilm">
                Opening Crawl: {props.opening_crawl}
              </p>
            </div>
          </div>
          <Link to={"/peliculas/" + props.i}>
            <button className="buttonMore">Learn More</button>
          </Link>
          {actions.isFav(props.title, "peliculas") ? (
            <button
              onClick={() => {
                actions.deleteFav(props.title, "peliculas");
              }}
              className="buttonDeleteMovies"
            >
             
             <i class="fas fa-trash"></i>
            </button>
          ) : (
            <button
              onClick={() => {
                actions.addFav(props.title, "peliculas");
              }}
              className="buttonHeartMovies"
            >
              <i class="fas fa-heart "></i>
            </button>
          )}
        </div>
      </div>
    </>
  );
};
