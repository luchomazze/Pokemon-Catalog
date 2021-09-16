import React from 'react'
import {useState} from "react"
import {useDispatch} from "react-redux"
import { getNamePokemons } from '../actions'
import styles from "./styles/SearchBar.module.css"

export default function SearchBar(){
    const dispatch = useDispatch()
    const[name, setName]= useState("")
    function handleInputChange(e){
        e.preventDefault()
        setName(e.target.value)
        // console.log(name)
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch(getNamePokemons(name))
        setName("");
        //agregar linea para vaciar el campo de busqueda
    }

    return (
        <div className={styles.SearchBar1}>
            <input type="text" placeholder=" PokeBusqueda..." className={styles.SearchBar} value = {name} onChange={(e)=>handleInputChange(e)}/>
            <button className={styles.button} type="submit" onClick={(e)=>handleSubmit(e)}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/512px-Pok%C3%A9_Ball_icon.svg.png" alt="" high="40px" width="40px" margin-top="0px"/>
            </button>
        </div>
    )
}
