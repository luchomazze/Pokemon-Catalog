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

  const pokemons = await apiInfo.data.results.map((el) => {
    return {
      name: el.name,
      url: el.url,
    };
  });

 arr= map.pokemons{poke => poke.url}
    try {
      let details = await axios.get(pokemons[i].url);

      pokemons[i].image = await axios.get(
        "http://play.pokemonshowdown.com/sprites/xyani/" +
          pokemons[i].name +
          ".gif"
      );
    } catch (err) {}
    // console.log(pokemons[i].details)
    //console.log(pokemons[i].details.stats)
  }
  console.log(pokemons[0].image);
};

console.log(getApiInfo())



module.exports = router;
