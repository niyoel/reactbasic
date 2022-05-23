import React, { Component } from 'react'
import compteur from "../css/compteur.css"

const Count =(props)=>{
    return(
        <>
         {props.isPremium===true? props.affichage():"veille vous conect"}
        <button onClick={props.connection}>
            {props.isPremium===false? "Se connecter":"Se deconect"}
        </button>
        </>
    )
}
export default Count
