export const buildPokemonImageUrl = (url: string): string => {
    const matches = url.match(/\/(\d+)\/$/);
    const pokemonNumber = matches ? matches[1] : '';
  
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemonNumber}.png`
  }