import React from 'react'
import {useState} from "react"
import {useDispatch} from "react-redux"
import { getNamePokemons } from '../actions'


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
        //agregar linea para vaciar el campo de busqueda
    }

    return (
        <div>
            <input type="text" placeholder="PokeBusqueda..." onChange={(e)=>handleInputChange(e)}/>
            <button type="submit" onClick={(e)=>handleSubmit(e)}>Poner Pokebola</button>
        </div>
    )
}
