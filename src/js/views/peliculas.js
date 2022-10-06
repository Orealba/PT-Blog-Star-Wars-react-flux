import React from "react";
import { useContext } from "react";
import {Boxes} from "../component/boxes.js";
import { Context } from "../store/appContext.js";
import   "../../styles/boxes.css"


export const Peliculas = () => {
    const { store,action} = useContext (Context);
    console.log(store.Peliculas)
    return <div>
        <div className="row">
            <div className="col-md-12 ">
                <h1 className="tituloView">PELÍCULAS</h1>
            </div>
        </div>
        { store.Peliculas?.map((obj,i)=>{
            return <Boxes i={i} title={obj.title} director={obj.director} producer={obj.producer} release_date={obj.release_date} opening_crawl={obj.opening_crawl}/>
        })}
        
        </div>
    
    }