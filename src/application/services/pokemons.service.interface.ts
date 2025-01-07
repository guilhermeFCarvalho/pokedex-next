import { PokemonDetails } from "@/src/domain/models/pokemon";

export interface IPokemonService {
    getPokemonList() : Promise<PokemonDetails[]>;
}