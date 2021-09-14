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
        <div>
            <button className={styles.button} type="submit" onClick={(e)=>handleSubmit(e)}>
            <img src="https://fontmeme.com/permalink/210914/820bbd8d8302def3fadcee1d771af3a8.png" alt="" high="110px" width="110px"/>
            </button>
            <input type="text" placeholder="PokeBusqueda..." value = {name} onChange={(e)=>handleInputChange(e)}/>
        </div>
    )
}
