import React from "react";
import { useContext } from "react";

import { Context } from "../store/appContext.js";
import   "../../styles/boxes.css"
import {BoxesPersonajes} from "../component/boxesPersonajes.js"

export const Personajes = () => {
    const { store,action} = useContext (Context);

    return <div>
        <div className="row">
            <div className="col-md-12 ">
                <h1 className="tituloView">PERSONAJES</h1>
            </div>
        </div>
        { store.Personajes?.map((obj,i)=>{
            return <BoxesPersonajes i={i} name={obj.name} height={obj.height} hair_color={obj.hair_color} eye_color={obj.eye_color} gender={obj.gender}/>
        })}
        
        </div>
    
    }