import { Pokemon } from "@/src/domain/models/pokemon";
import PokemonCard from "./components/pokemon-card/pokemon-card";

async function fetchPokemon() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20');
  if (!res.ok) {
    throw new Error('Erro ao carregar os Pokémon');
  }
  const data = await res.json();

  const detailedPokemon = await Promise.all(
    data.results.map(async (pokemon: { name: string; url: string }) => {
      const detailsRes = await fetch(pokemon.url);

      const details = await detailsRes.json();

      console.log(details)

      return {
        name: pokemon.name,
        url: pokemon.url,
        types: details.types.map((type: any) => type.type.name),
        abilities: details.abilities.map((ability: any) => ability.ability.name),
      };
    })
  );

  return detailedPokemon;
}

export default async function PokemonListPage() {
  const pokemonList = await fetchPokemon();

  return (

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(40%, 1fr))",
        gap: "1.2rem",
        padding: "1rem",
      }}
    >
      {pokemonList.map((pokemon: Pokemon, index: number) => (
        <PokemonCard key={index} pokemon={pokemon} />
      ))}
    </div>

  );
}
