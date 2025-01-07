import { PokemonDetails } from "@/src/domain/models/pokemon";
import PokemonCard from "./components/pokemon-card/pokemon-card";
import { getPokemonList } from "./actions";



export default async function PokemonListPage() {
  const pokemonList = await getPokemonList()

  return (

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(40%, 1fr))",
        gap: "1.2rem",
        padding: "1rem",
      }}
    >
      {pokemonList.map((pokemon: PokemonDetails, index: number) => (
        <PokemonCard key={index} pokemonDetails={pokemon} />
      ))}
    </div>

  );
}
