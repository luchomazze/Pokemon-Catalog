import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postPokemon } from "../actions";
import { getTypes } from "../actions";
import styles from "./styles/PokeCreate.module.css";

function validate(input) {
  let errors = {};
  for (const property in input) {
    if (input[property] === "" || input[property] === [])
      errors[property] = "*";
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
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submit input", input);
    dispatch(postPokemon(input));
    alert("PokeCreacion exitosa!");
    history.push("/home/");
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
  }

  return (
    <div className={styles.content}>
           <img src="https://fontmeme.com/permalink/210913/9bb8b855c15c20565c93abd19189106a.png" alt="" high="300px" width="300px" />
      <form onSubmit={handleSubmit}>
        <div className={styles.inputs}>
        <div>
          <label>Nombre: </label>{" "}
          <input
          className={styles.input}
          required="required"
            type="text"
            value={input.name}
            name="name"
            onChange={(e) => handleChange(e)}
          />
          {errors.name && <label className="error"> {errors.name}</label>}
        </div>
        <div>
          <label>Imagen: </label>
          <input
          className={styles.input}
          required="required"
            type="text"
            value={input.image}
            name="image"
            onChange={(e) => handleChange(e)}
          />
          {errors.image && <label className="error"> {errors.image}</label>}
        </div>
        <div>
          <label>Peso: </label>
          <input
          className={styles.input}
          required="required"
            type="number"
            min="1" max="1000"
            value={input.weight}
            name="weight"
            onChange={(e) => handleChange(e)}
          />
          {errors.weight && <label className="error"> {errors.weight}</label>}
        </div>
        <div>
          <label>Altura: </label>
          <input
          className={styles.input}
          required="required"
          type="number"
          min="1" max="100"
            value={input.height}
            name="height"
            onChange={(e) => handleChange(e)}
          />
        {errors.height&&(<label className="error"> {errors.height}</label>)}
        </div>
        <div>
          <label>Vida: </label>
          <input
          className={styles.input}
          required="required"
          type="number"
          min="1" max="100"
            value={input.vida}
            name="vida"
            onChange={(e) => handleChange(e)}
          />
        {errors.vida&&(<label className="error"> {errors.vida}</label>)}
        </div>
        <div>
          <label>Fuerza: </label>
          <input
          className={styles.input}
          required="required"
          type="number"
          min="1" max="100"
            value={input.fuerza}
            name="fuerza"
            onChange={(e) => handleChange(e)}
          />
        {errors.fuerza&&(<label className="error"> {errors.fuerza}</label>)}
        </div>
        <div>
          <label>Defensa: </label>
          <input
          className={styles.input}
          required="required"
          type="number"
          min="1" max="100"
            value={input.defensa}
            name="defensa"
            onChange={(e) => handleChange(e)}
          />
        {errors.defensa&&(<label className="error"> {errors.defensa}</label>)}
        </div>
        <div>
          <label>Velocidad: </label>
          <input
          className={styles.input}
          required="required"
          type="number"
          min="1" max="100"
            value={input.velocidad}
            name="velocidad"
            onChange={(e) => handleChange(e)}
          />
        {errors.velocidad&&(<label className="error"> {errors.velocidad}</label>)}
          
        </div>
        </div>
       
        <div className={styles.types}>

          {types.map((type) => {
            return (
              <div className={styles.type}>
                <label>{type.name.charAt(0).toUpperCase()+ type.name.slice(1)} </label>
                <input 
                  type="checkbox"
                  value={type.name}
                  name={type.name}
                  onChange={(e) => handleCheckbox(e)}
                />
              </ div>
            );
          })}
        </div>
        <button className={styles.btn} ontype="submit"  onSubmit={(e) => handleSubmit(e)}>
          PokeCreacion
        </button>
      </form>
    </div>
  );
}
