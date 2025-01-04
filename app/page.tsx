import PokemonCard from "./components/pokemon-card";

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

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "1rem",
        padding: "1rem",
      }}
    >
      {pokemonList.map((pokemon: { name: string; url: string }, index: number) => (
        <PokemonCard key={index} pokemon={pokemon} />
      ))}
    </div>

  );
}
