import  PokemonCard  from "../src/components/pokemon-card";

async function fetchPokemon() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20');
  if (!res.ok) {
    throw new Error('Erro ao carregar os Pokémon');
  }
  const data = await res.json();
  return data.results;
}

export default async function PokemonListPage() {
  const pokemonList = await fetchPokemon();

  return (
    <div>
      <h2>Lista de Pokémon</h2>
        {pokemonList.map((pokemon: { name: string; url: string }, index: number) => {
          return (
            <PokemonCard key={index} pokemon={pokemon}/>
          );
        })}
      
    </div>
  );
}
