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
  name: string,
  image: string
  types: string[],
  abilities:string[],
  liked: boolean;
}