/* eslint-disable default-case */

const initialState = {
  pokemons: [],
  allPokemons: [],
  types:[],
  detail:[],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_POKEMONS":
      return {
        ...state,
        pokemons: action.payload,
        allPokemons: action.payload,
      };
    case "FILTER_BY_TYPES":
      const allPokemons = state.allPokemons;
      const statusFiltered = action.payload === "All" ? allPokemons : allPokemons.filter((pokemon) => pokemon.types.includes(action.payload));
      return {
        ...state,
        pokemons: statusFiltered,
      };
    case "FILTER_BY_CREATED":
      const createdFiltered =
        action.payload === "created"
          ? state.allPokemons.filter((pokemon) => pokemon.createdInDb)
          : state.allPokemons.filter((pokemon) => !pokemon.createdInDb);
      return {
        ...state,
        pokemons:
          action.payload === "All" ? state.allPokemons : createdFiltered,
      };

    case "ORDER_BY_NAME":
      const pokemons = state.allPokemons;
      const orderedByName =
        action.payload === "asc"?
         pokemons.sort(function (a, b) {
              if (a.name > b.name) return 1;
              if (a.name < b.name) return -1;
              return 0;
            })
          : pokemons.sort(function (a, b) {
              if (a.name > b.name) return -1;
              if (a.name < b.name) return 1;
              return 0;
            });

      return {
        ...state,
        pokemons: orderedByName,
      };

      case "ORDER_BY_STRENGHT":
        const pokes = state.allPokemons;
        const orderedByStrength =
          action.payload === "asc" ?
           pokes.sort(function (a, b) {
                if (a.name > b.name) return 1;
                if (a.name < b.name) return -1;
                return 0;
              })
            : pokes.sort(function (a, b) {
                if (a.name > b.name) return -1;
                if (a.name < b.name) return 1;
                return 0;
              });
  
        return {
          ...state,
          pokemons: orderedByStrength,
        };
      
      case "GET_NAME_POKEMONS":
        return {
          ...state,
          pokemons: action.payload
        }
      
      case "GET_NAME_TYPES":
        return {
          ...state,
          types: action.payload
        }
      
      case "POST_POKEMON":
        return {
          ...state,
        }
      
      case "GET_DETAILS":
        console.log(action.payload)
        return{
          ...state,
          detail: action.payload.slice()
        }
            
    default:
      return state;
  }
}

export default rootReducer;
