import axios from "axios";

export function getPokemons() {
  return async function (dispatch) {
    try {
      var json = await axios.get("http://localhost:3001/pokemons");
      return dispatch({
        type: "GET_POKEMONS",
        payload: json.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
}

export function getNamePokemons(name) {
  return async function (dispatch) {
    try {
      var json = await axios.get(
        "http://localhost:3001/pokemons/?name=" + name
      );
      return dispatch({
        type: "GET_NAME_POKEMONS",
        payload: json.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
}

export function getTypes(name) {
  return async function (dispatch) {
    try {
      var json = await axios.get("http://localhost:3001/types");
      return dispatch({
        type: "GET_NAME_TYPES",
        payload: json.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
}

export function postPokemon(payload) {
  return async function (dispatch) {
    var res = await axios.post("http://localhost:3001/pokemon", payload);
    console.log(res);
    return res;
  };
}

export function filterPokemonByTypes(payload) {
  return {
    type: "FILTER_BY_TYPES",
    payload,
  };
}

export function filterPokemonByCreated(payload) {
  return {
    type: "FILTER_BY_CREATED",
    payload,
  };
}

export function orderPokemonByName(payload) {
  return {
    type: "ORDER_BY_NAME",
    payload,
  };
}

export function orderPokemonByStrength(payload) {
  return {
    type: "ORDER_BY_STRENGHT",
    payload,
  };
}
