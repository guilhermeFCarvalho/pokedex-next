import { PokemonDetails, PokemonLike } from "@/src/domain/models/pokemon";
import { PokemonService } from "@/src/infrastructure/services/pokemon.service";

export async function getPokemonList() : Promise<PokemonDetails[]>{
 const _service:PokemonService = new PokemonService

 const pokemonList = _service.getPokemonList()

 return pokemonList;

}
export function handleWebviewEvent(pokemonLike:PokemonLike){
    window.ReactNativeWebView.postMessage(JSON.stringify(pokemonLike))
}