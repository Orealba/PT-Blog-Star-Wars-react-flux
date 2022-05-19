import React from "react";
import { useContext } from "react";
import {BoxesPlanets} from "../component/boxesPlanets.js";
import { Context } from "../store/appContext.js";
import   "../../styles/boxes.css"


export const Planets = () => {
    const { store,action} = useContext (Context);

    return <div>
        <div className="row">
            <div className="col-md-12 ">
                <h1 className="tituloView">PLANETAS</h1>
            </div>
        </div>
        { store.Planetas?.map((obj,i)=>{
            return <BoxesPlanets i={i} name={obj.name} rotation_period={obj.rotation_period} porbital_period={obj.orbital_period} population={obj.population} climate={obj.climate}/>
        })}
        
        </div>
    
    }