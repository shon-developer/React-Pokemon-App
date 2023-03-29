import React from "react";
import charmander from "../image/charmander.png";

const Card = ({ pokemon, loading, infoPokemon }) => {
  console.log(pokemon);
  return (
    <div className="flex flex-wrap gap-4">
      {loading ? (
        <h1>loading...</h1>
      ) : (
        pokemon.map((item) => {
          return (
            <div key={item.id} onClick={() => infoPokemon(item)}>
              <div className="max-w-sm mx-auto ">
                <div className="w-[300px] py-3  flex flex-col justify-between items-center  ">
                  <img
                    className="w-[50%]"
                    src={item.sprites.front_default}
                    alt="charmander"
                  />
                  <h2 className="pr-6">{item.name}</h2>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Card;
