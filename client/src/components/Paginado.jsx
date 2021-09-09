import React from 'react'

function Paginado({pokemonsPerPage, allPokemons, paginado}) {
    const pageNumbers =[];
    
    for (let i=0; i<=Math.ceil(allPokemons/pokemonsPerPage);i++){
        pageNumbers.push(i+1);
    }
    return (
        <nav>
            <ul className="paginado">
                {pageNumbers && pageNumbers.map(number=>(
                    <button className="number" key={number}>
                        <a onClick={()=>paginado(number)}>{number}</a>
                    </button>
                )
                )}
            </ul>
        </nav>
    )
}

export default Paginado
