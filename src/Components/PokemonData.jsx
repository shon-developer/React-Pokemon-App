import React from "react";

const PokemonData = ({ data }) => {
  console.log(data);
  return (
    <div className="fixed top-24 right-24 ">
      {!data ? (
        ""
      ) : (
        <div>
          <h1 className="upperCase font-semibold text-3xl tracking-wide py-14">
            {data.name}
          </h1>
          <img
            className="h-[190px]"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
            alt=""
          />

          {data.abilities.map((item) => {
            return (
              <div>
                <div className="w-full flex items-center  m-auto mt-4">
                  <div className="text-md w-full   font-poppins text-orange-500">
                    <h2>{item.ability.name}</h2>
                  </div>
                </div>
              </div>
            );
          })}

          <div className=" mt-4">
            {data.stats.map((item) => {
              return (
                <div>
                  <h3>
                    {item.stat.name}:{item.base_stat}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default PokemonData;
