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
    let siguiente= parseInt(props.match.params.id) + 1;
    let anterior= parseInt(props.match.params.id) - 1;


    return (
        <div className={styles.container} >

            {pokemon.length>0?
            //     <div>
                
            //   <Link to={"/home/" + siguiente } style= {{"text-decoration":" none"}}>
            //         <button> siguiente </button>
           
            //         </Link>
            //         <Link to={"/home/" + anterior } style= {{"text-decoration":" none"}}>
            //         <button> anterior </button>
            //         </Link>

            //     </div>

            <div className={styles.container1}>


                <div>
                    <img src= {pokemon[0].image} high="300px" width="300px" alt="error"/>
                </div> 

                <div  style={ {padding: "41px"}}>
                    <h1> {pokemon[0].name} </h1>
                    <div className={styles.types}> <p> Tipos:  </p>
                    {pokemon[0].createdInDb
                    ? 
                    pokemon[0].types.map(type => <div className={styles[type.name]}> {type.name.charAt(0).toUpperCase() + type.name.slice(1)} </div>) 
                    : 
                    pokemon[0].types.map(type=> <div className={styles[type]}> {type.charAt(0).toUpperCase() + type.slice(1)} </div>) } 
                    </div> 

                    <p>Altura: <div className={styles.data}>  {pokemon[0].height} </div></p>
                    <p>Peso: <div className={styles.data}>  {pokemon[0].weight} </div></p>
                    <p>Vida: <div className={styles.data}>  {pokemon[0].vida} </div></p>
                    <p>Fuerza: <div className={styles.data}>  {pokemon[0].fuerza} </div></p>
                    <p>Defensa: <div className={styles.data}>  {pokemon[0].defensa} </div></p>
                    <p>Velocidad: <div className={styles.data}>  {pokemon[0].velocidad} </div></p>
                </div> 
             </div> 
             : 
             <div> 
            <img  className={styles.image} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/200653/psykokwak.gif" alt="error" />
            <h3> Psyduck Loading... </h3>
             </div>
             }
        </div>
    )
}

// https://s3-us-west-2.amazonaws.com/s.cdpn.io/200653/psykokwak.gif
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