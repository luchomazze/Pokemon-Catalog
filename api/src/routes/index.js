const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require("axios");

const router = Router();

const { Pokemon, Types } = require("../db");
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const getApiInfo = async () => {
  const apiInfo = await axios.get("https://pokeapi.co/api/v2/pokemon/");
  const apiInfo2 = await axios.get(apiInfo.data.next)
  let urls1 = apiInfo.data.results.map((pokemon) => axios.get(pokemon.url));
  let urls2 = apiInfo2.data.results.map((pokemon) => axios.get(pokemon.url));
  let urls = urls1.concat(urls2);
  let a = await Promise.all(urls);

  const pokemons = a.map((pokemon) => {
    return {
      name: pokemon.data.name.charAt(0).toUpperCase() + pokemon.data.name.slice(1),
      height: pokemon.data.height,
      weight: pokemon.data.weight,
      id: pokemon.data.id,
      image: pokemon.data.sprites.other.dream_world.front_default,
      image: pokemon.data.sprites.other.dream_world.front_default,
      types: pokemon.data.types.map((obj) => obj.type.name),
      vida: pokemon.data.stats[0].base_stat,
      fuerza: pokemon.data.stats[1].base_stat,
      defensa: pokemon.data.stats[2].base_stat,
      velocidad: pokemon.data.stats[5].base_stat,
    };
  });

     // pokemons[i].image = "http://play.pokemonshowdown.com/sprites/xyani/" + pokemons[i].name +".gif";

  return pokemons;
};

const getDbInfo = async () => {
  return await Pokemon.findAll({
    include: {
      //Dudas con esto. Preguntar.
      model: Types,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
};

const getAllPokes = async () => {
  const apiInfo = await getApiInfo();
  const dbInfo = await getDbInfo();
  const infoTotal = apiInfo.concat(dbInfo);
  return infoTotal;
};

router.get("/pokemons", async (req, res) => {
  const name = req.query.name;
  try{
    let pokeTotal = await getAllPokes();
    if (name) {
      let pokeName = await pokeTotal.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(name.toLowerCase())
      );
      pokeName.length
      ? res.status(200).send(pokeName)
      : res.status(404).send("No hubo pokecoincidencias");
    } else {
      res.status(200).send(pokeTotal);
    }
      }catch(error){
        console.log(error)}
});

router.get("/types", async (req, res) => {
  try{const typesApi = await axios.get("https://pokeapi.co/api/v2/type"); //ingreso mi url donde estan los tipos.
  const types = typesApi.data.results.map((e) => e.name); //aca se trae el arreglo de types lo mapea y se lo guarda de una.
  types.forEach((type) => {
    Types.findOrCreate({
      where: { name: type },
    });
  });
  const alltypes = await Types.findAll();
  res.send(alltypes);
}catch(error){
console.log(error);
}
});

router.post("/pokemon", async (req, res) => {
  let {
    name,
    height,
    weight,
    image,
    types,
    vida,
    fuerza,
    defensa,
    velocidad,
    createdInDb,
  } = req.body;


  let pokeCreated = await Pokemon.create({
    name,
    height,
    weight,
    image,
    types,
    vida,
    fuerza,
    defensa,
    velocidad,
    createdInDb
  });

  let typesDb = await Types.findAll({
    where: { name: types },
  });
  pokeCreated.addTypes(typesDb); //averiguar sobre estos metodos que nacen de belongs to many  o lo que sea.
  res.send("Pokecreacion exitosa"); // debería ser, add o set + el nombre de la tabla: ej.: addTypes. (Mi tabla nose si se llama types O.o)
});

router.get("/pokemons/:id", async (req, res) => {
  try {
    const pokeTotal = await getAllPokes();
    const id = req.params.id;

    if (id) {
      let pokeId = await pokeTotal.filter((poke) => poke.id == id);
      if (pokeId.length) res.status(200).json(pokeId);
      else
        res
          .status(404)
          .send(
            "No existe esa pokeId, ¿Seguro quieres ser un maestro pokemon?"
          );
    } else {
      res.status(404).send("No pude");
    }
  } catch (err) {
    console.log("aca salio mal");
  }
});

module.exports = router;
