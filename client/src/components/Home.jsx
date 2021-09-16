import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons, getTypes, filterPokemonByTypes, filterPokemonByCreated, orderPokemonByName, orderPokemonByStrength } from "../actions";
import {Link}  from "react-router-dom";
import Card from "./Card";
import Paginado from "./Paginado";
import styles from "./styles/Home.module.css"
import Footer from "./Footer"


export default function Home() {
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.pokemons);
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage, setPokemonsPerPage] = useState(9);
  const indexOfLastPokemon = currentPage * pokemonsPerPage; //
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  const currentPokemons = allPokemons.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  );
  const types = useSelector((state) => state.types);
   useSelector((state) => state.detail = []);
  
  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  
  useEffect(() => {
    dispatch(getPokemons());
    dispatch(getTypes());
  }, [dispatch]);


  function handleFilterTypes(e){
    dispatch(filterPokemonByTypes(e.target.value))    
  }
  
  function handleFilterByCreated(e){
    dispatch(filterPokemonByCreated(e.target.value))    
  }
  
  function handleStrength(e){
    e.preventDefault()
    dispatch(orderPokemonByStrength(e.target.value))
    setCurrentPage(1)
    }
  
  function handleOrder(e){
    e.preventDefault()
    dispatch(orderPokemonByName(e.target.value))
    setCurrentPage(1)
    }


  return (
    <div className={styles.divContainer}>
    <div className={styles.divContainer2}>
    <div className={styles.divContainer3}>
    <div className={styles.home}>
     

      <div className={styles.filters}>
        <Paginado
          pokemonsPerPage={pokemonsPerPage}
          allPokemons={allPokemons.length}
          paginado={paginado}
        />
        <select onChange={e=> handleOrder(e)}>
          <option value="">- </option>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>

        <select onChange={e=> handleStrength(e)}>
          <option value="">- </option>
          <option value="asc">Fuerza ↑</option>
          <option value="desc">Fuerza ↓</option>
        </select>


        <select onChange={e => handleFilterByCreated(e)}>
          <option value="All">Todos</option>
          <option value="created">creados</option>
          <option value="Api">existentes</option>
        </select>

        <select onChange={e=> handleFilterTypes(e)}>
          <option value="All">Todos</option>
          <option value="normal">normal</option>
          <option value="fighting">fighting</option>
          <option value="flying">flying</option>
          <option value="poison">poison</option>
          <option value="ground">ground</option>
          <option value="rock">rock</option>
          <option value="bug">bug</option>
          <option value="ghost">ghost</option>
          <option value="steel">steel</option>
          <option value="fire">fire</option>
          <option value="water">water</option>
          <option value="grass">grass</option>
          <option value="electric">electric</option>
          <option value="psychic">psychic</option>
          <option value="ice">ice</option>
          <option value="dragon">dragon</option>
          <option value="dark">dark</option>
          <option value="fairy">fairy</option>
          <option value="unknown">unknown</option>
        </select>
      </div>
      <div className={styles.cards}>

        {currentPokemons.length>0?

          currentPokemons.map((pokemon) => {
            return (
              <div >
                <Link to={"/home/" + pokemon.id} className={styles.Link}>
                <Card
                  name={pokemon.name}
                  image={pokemon.image}
                  types={pokemon.createdInDb? pokemon.types.map(e=>e.name) : pokemon.types}
                  id={pokemon.id}
                />
                </Link>
              </div>
            );
          })
          
        : 
          <div className={styles.notype}> 
            <img  className={styles.image} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/200653/psykokwak.gif" alt="error" />
              <div className={styles.Maestro}> 
              <h3> Son sólo ciento cincuenta o más que ver,</h3>
              <h3> Maestro Pokémon, tu destino es! </h3> 
                <h3> Elige otro tipo! </h3>
              </div>
          </div>

        }

      </div>
      {/* </div> */}
      </div>
      <Footer/>
      </div>
      </div>
    </div>
  );
}
