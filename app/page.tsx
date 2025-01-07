import { Pokemon, PokemonDetails } from "@/src/domain/models/pokemon";
import PokemonCard from "./components/pokemon-card/pokemon-card";
import { PokemonService } from "@/src/infrastructure/services/pokemon.service";



export default async function PokemonListPage() {
  const pokemonService: PokemonService = new PokemonService();
  const pokemonList = await pokemonService.getPokemonList();

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
