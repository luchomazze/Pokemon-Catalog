import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postPokemon, getPokemons } from "../actions";
import { getTypes } from "../actions";

export default function PokeCreate() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [input, setInput] = useState({
    name: "",
    height: "",
    weight: "",
    image: "",
    type: [],
  });
  
  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);
  const types = useSelector((state) => state.types);

function handleChange(e){
  setInput({
      ...input,
      [e.target.name]: e.target.value
  })
}

function handleCheckbox(e){
  console.log("target del check",e.target.name)
  if(e.target.checked){
  
    setInput({
      ...input,
      types: [ ...input.types, e.target.value],
      // 
    })
  }
  console.log("input.tyes",input.types)


}

function handleSubmit(e){
e.preventDefault()
console.log("submit input",input)
dispatch(postPokemon(input))
alert("PokeCreacion exitosa!")
setInput({
name: "",
height: "",
weight: "",
image: "",
type: [],})
history.push("/home")
}

  return (
    <div>
      <Link to="/home">
        <button>Home</button>
      </Link>
      <h1>PokeCreacion!</h1>
      <form onSubmit={handleSubmit}>
          <div>
              <label>Nombre: </label> <input type="text" value= {input.name} name="name" onChange={e=>handleChange(e)}/>
          </div>
          <div>
              <label>img: </label> <input type="text" value= {input.img} name="img" onChange={e=>handleChange(e)}/>
          </div>
          <div>
              <label>peso: </label> <input type="text" value= {input.weight} name="weight" onChange={e=>handleChange(e)}/>
          </div>
          <div>
              <label>altura: </label> <input type="text" value= {input.height} name="height" onChange={e=>handleChange(e)}/>
          </div>
              Acomodar checked o no cheked, para que se 
          <div>
              <label>tipo: </label> 
              <label>normal</label> <input type="checkbox" value= "normal" name="tipo" onChange={e=>handleCheckbox(e)}/>
            { 
            types.map(type=> {
              console.log(type.name)
              return <> 
                <label>{type.name}</label> <input type="checkbox" value={type.name} name={type.name} onChange={e=>handleCheckbox(e)}/> 
              </>
            })}
          </div>
          <button type="submit" onSubmit={e=>handleSubmit(e)}>PokeCreacion</button>
      </form>
    </div>
  );
}

