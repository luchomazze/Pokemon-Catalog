import React from 'react'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"
import {getDetail} from "../actions/index";
import {useEffect} from "react"
import styles from "./styles/Detail.module.css"


export default function Detail(props) {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getDetail(props.match.params.id))
    },[dispatch])
    
    const pokemon = useSelector((state)=>state.detail)
   


    return (
        <div className={styles.container}>

            {pokemon.length>0?

            <div >
            <h1> {pokemon[0].name} </h1>
            <img src= {pokemon[0].image} high="300px" width="300px" alt="error"/>
            <div className={styles.types}>  Tipos: {pokemon[0].createdInDb? pokemon[0].types.map(type => <div className={styles.type}> {type.name} </div>) : pokemon[0].types.map(type=> <div className={styles.type}> {type} </div>) } </div> 
            <p> Altura: {pokemon[0].height} </p>
            <p> Peso: {pokemon[0].weight} </p>
            <p> Vida {pokemon[0].vida} </p>
            <p> Fuerza: {pokemon[0].fuerza} </p>
            <p> Defensa: {pokemon[0].defensa} </p>
            <p> Velocidad: {pokemon[0].velocidad} </p>
             </div> : 
             <div> 
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/200653/psykokwak.gif" alt="error"/>
            <h3> Loading... </h3>
             </div>
             }
            </div>
    )
}

// [
//     {
//       "name": "bulbasaur",
//       "height": 7,
//       "weight": 69,
//       "id": 1,
//       "image": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
//       "types": [
//         "grass",
//         "poison"
//       ],
//       "vida": 45,
//       "fuerza": 49,
//       "defensa": 49,
//       "velocidad": 45
//     }
//   ]