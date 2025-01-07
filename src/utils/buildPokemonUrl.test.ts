import { buildPokemonImageUrl } from "./buildPokemonUrl";

describe("buildPokemonImageUrl", () => {
    it("should return pokemon image url when pokemon url contains a valid number", () => {
        const url = "https://pokeapi.co/api/v2/pokemon/25/";
        const expectedUrl =
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/25.png";

        const result = buildPokemonImageUrl(url);

        expect(result).toBe(expectedUrl);
    });

    it("should return empty string if url doesnt contains a number", () => {
        const url = "https://pokeapi.co/api/v2/pokemon/";
        const expectedUrl =
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/.png";

        const result = buildPokemonImageUrl(url);

        expect(result).toBe(expectedUrl);
    });

});
