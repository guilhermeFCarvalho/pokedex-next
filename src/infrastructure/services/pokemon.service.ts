import { IPokemonService } from "@/src/application/services/pokemons.service.interface";
import { Pokemon, PokemonDetails, PokemonLike } from "@/src/domain/models/pokemon";
import { buildPokemonImageUrl } from "@/src/utils/buildPokemonUrl";

export class PokemonService implements IPokemonService{
    async getPokemonList(): Promise<PokemonDetails[]>  {
            const res = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20');
            if (!res.ok) {
              throw new Error('Erro ao carregar os Pokémon');
            }
            const data = await res.json();
          
            const detailedPokemon : PokemonDetails[] = await Promise.all(
              data.results.map(async (pokemon: Pokemon) => {
                const detailsRes = await fetch(pokemon.url);
          
                const details : PokemonDetails = await detailsRes.json()


                return {
                  pokemon: pokemon,
                  types: details.types.map((type: any) => type.type.name),
                  abilities: details.abilities.map((ability: any) => ability.ability.name),
                  imageUrl: buildPokemonImageUrl(pokemon.url)
                };
              })
            );
            
            console.log(detailedPokemon)

            return detailedPokemon;
          
    }
    

}