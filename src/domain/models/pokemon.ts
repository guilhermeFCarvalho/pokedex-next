export type Pokemon = {
  name: string;
  url: string;
};

export type PokemonDetails = {
  pokemon: Pokemon;
  types: string[];
  abilities: string[];
  imageUrl: string;
}

export type PokemonLike = {
  pokemon: Pokemon;
  liked: boolean;
}