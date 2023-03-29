import React from "react";
import Card from "./Card";
import PokemonData from "./PokemonData";
import axios from "axios";
import { useState, useEffect } from "react";

const Header = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pokeInfo, setPokeInfo] = useState();

  const fetchPokemonInfo = async () => {
    const details = await axios.get("  https://pokeapi.co/api/v2/pokemon/");
    //console.log(data.results);
    getPokemon(details.data.results);
    setLoading(false);
    console.log(details.data.results[0].url);
  };

  const getPokemon = (details) => {
    details.map(async (item) => {
      const result = await axios.get(item.url);
      setPokemon((state) => {
        state = [...state, result.data];

        return state;
      });
    });
  };

  useEffect(() => {
    fetchPokemonInfo();
  }, []);

  return (
    <div className="flex   ">
      <div className=" w-[80%]">
        <Card
          pokemon={pokemon}
          loading={loading}
          infoPokemon={(poke) => setPokeInfo(poke)}
        />
      </div>

      <div className=" ">
        <PokemonData data={pokeInfo} />
      </div>
    </div>
  );
};

export default Header;
