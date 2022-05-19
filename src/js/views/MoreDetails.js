import React from "react";
import { useContext } from "react";
import {More} from "../component/more.js";
import { Context } from "../store/appContext.js";
import   "../../styles/boxes.css"
import { useParams } from "react-router-dom";

export const MoreDetails = () => {
    
   const parametros = useParams();
   const { store,actions} = useContext (Context);
   console.log (parametros.position)
    return <div>
        <div className="row">
            <div className="col-md-12 ">
                <h1 className="tituloView2">DETALLES DE PELÍCULAS </h1>
            </div>
        </div>
          <More i={parametros.position} title={store.Peliculas[parametros.position]?.title} episode_id={store.Peliculas[parametros.position]?.episode_id} director={store.Peliculas[parametros.position]?.director} producer={store.Peliculas[parametros.position]?.producer} release_date={store.Peliculas[parametros.position]?.release_date} opening_crawl={store.Peliculas[parametros.position]?.opening_crawl}
            characters={store.Peliculas[parametros.position]?.characters} planets={store.Peliculas[parametros.position]?.planets} vehicles={store.Peliculas[parametros.position]?.vehicles} species={store.Peliculas[parametros.position]?.species}/>
        
        
        </div>
    
    }