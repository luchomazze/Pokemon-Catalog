import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postPokemon } from "../actions";
import { getTypes } from "../actions";

function validate(input) {
  let errors = {};
  for (const property in input) {
    if (input[property] === "" || input[property] === [])
      errors[property] = `Tu Pokemón debería tener ${property}!`;
    console.log(`${property}: ${input[property]}`);
  }
  return errors;
}

export default function PokeCreate() {
  const dispatch = useDispatch();
  const history = useHistory();
  const types = useSelector((state) => state.types);
  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    name: "",
    height: "",
    weight: "",
    image: "",
    types: [],
    vida: "",
    fuerza: "",
    defensa: "",
    velocidad: "",
  });

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleCheckbox(e) {
    if (e.target.checked && input.types.indexOf(e.target.name) === -1) {
      setInput({
        ...input,
        types: [...input.types, e.target.value],
        //
      });
    } else {
      var _types = input.types;
      _types.splice(input.types.indexOf(e.target.name), 1);
      setInput({
        ...input,
        types: _types,
        //
      });
    }
    console.log("input.tyes", input.types);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submit input", input);
    dispatch(postPokemon(input));
    alert("PokeCreacion exitosa!");
    setInput({
      name: "",
      height: "",
      weight: "",
      image: "",
      types: [],
      vida: "",
      fuerza: "",
      defensa: "",
      velocidad: "",
    });
    history.push("/home");
  }

  return (
    <div>
      <Link to="/home">
        <button>Home</button>
      </Link>
      <h1>PokeCreacion!</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre: </label>{" "}
          <input
            type="text"
            value={input.name}
            name="name"
            onChange={(e) => handleChange(e)}
          />
          {errors.name && <label className="error"> {errors.name}</label>}
        </div>
        <div>
          <label>image: </label>
          <input
            type="text"
            value={input.image}
            name="image"
            onChange={(e) => handleChange(e)}
          />
          {errors.image && <label className="error"> {errors.image}</label>}
        </div>
        <div>
          <label>peso: </label>
          <input
            type="text"
            value={input.weight}
            name="weight"
            onChange={(e) => handleChange(e)}
          />
          {errors.weight && <label className="error"> {errors.weight}</label>}
        </div>
        <div>
          <label>altura: </label>
          <input
            type="text"
            value={input.height}
            name="height"
            onChange={(e) => handleChange(e)}
          />
        {errors.height&&(<label className="error"> {errors.height}</label>)}
        </div>
        <div>
          <label>vida: </label>
          <input
            type="text"
            value={input.vida}
            name="vida"
            onChange={(e) => handleChange(e)}
          />
        {errors.vida&&(<label className="error"> {errors.vida}</label>)}
        </div>
        <div>
          <label>fuerza: </label>
          <input
            type="text"
            value={input.fuerza}
            name="fuerza"
            onChange={(e) => handleChange(e)}
          />
        {errors.fuerza&&(<label className="error"> {errors.fuerza}</label>)}
        </div>
        <div>
          <label>defensa: </label>
          <input
            type="text"
            value={input.defensa}
            name="defensa"
            onChange={(e) => handleChange(e)}
          />
        {errors.defensa&&(<label className="error"> {errors.defensa}</label>)}
        </div>
        <div>
          <label>velocidad: </label>
          <input
            type="text"
            value={input.velocidad}
            name="velocidad"
            onChange={(e) => handleChange(e)}
          />
        {errors.velocidad&&(<label className="error"> {errors.velocidad}</label>)}
          
        </div>
        Acomodar checked o no cheked, para que se
        <div>
          <label>tipo: </label>

          {types.map((type) => {
            return (
              <>
                <label>{type.name}</label>
                <input
                  type="checkbox"
                  value={type.name}
                  name={type.name}
                  onChange={(e) => handleCheckbox(e)}
                />
              </>
            );
          })}
        </div>
        <button type="submit" onSubmit={(e) => handleSubmit(e)}>
          PokeCreacion
        </button>
      </form>
    </div>
  );
}
