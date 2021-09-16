/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styles from "./styles/Paginado.module.css"

function Paginado({pokemonsPerPage, allPokemons, paginado}) {
    const pageNumbers =[];
    
    for (let i=1; i<=Math.ceil(allPokemons/pokemonsPerPage);i++){
        pageNumbers.push(i);
    }
    return (
        <nav className={styles.nav} >
            <ul className="paginado">
                {pageNumbers && pageNumbers.map(number=>(
                    <button className="number" key={number}>
                        <a onClick={()=>paginado(number)}> {number} </a>
                    </button>
                )
                )}
            </ul>
        </nav>
    )
}

export default Paginado
