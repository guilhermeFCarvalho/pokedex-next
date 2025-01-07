import { buildPokemonImageUrl } from "@/src/utils/buildPokemonUrl";
import { PokemonService } from "./pokemon.service";


describe("PokemonService", () => {
  const mockFetch = jest.fn();

  beforeAll(() => {
    global.fetch = mockFetch;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return a PokemonDetails list", async () => {
    const mockPokemonListResponse = {
      results: [
        { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
        { name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/" },
      ],
    };

    const mockPokemonDetailsResponse = {
      types: [{ type: { name: "grass" } }, { type: { name: "poison" } }],
      abilities: [{ ability: { name: "overgrow" } }, { ability: { name: "chlorophyll" } }],
    };

    mockFetch
      .mockResolvedValueOnce({
        ok: true,
        json: async () => mockPokemonListResponse,
      })
      .mockResolvedValueOnce({
        ok: true,
        json: async () => mockPokemonDetailsResponse,
      })
      .mockResolvedValueOnce({
        ok: true,
        json: async () => mockPokemonDetailsResponse,
      });


    const service = new PokemonService();
    const result = await service.getPokemonList();

    expect(result).toEqual([
      {
        pokemon: { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
        types: ["grass", "poison"],
        abilities: ["overgrow", "chlorophyll"],
        imageUrl: buildPokemonImageUrl("https://pokeapi.co/api/v2/pokemon/1/"),
      },
      {
        pokemon: { name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/" },
        types: ["grass", "poison"],
        abilities: ["overgrow", "chlorophyll"],
        imageUrl: buildPokemonImageUrl("https://pokeapi.co/api/v2/pokemon/2/"),
      },
    ]);

    expect(mockFetch).toHaveBeenCalledTimes(3);
  });

  it("should return an error if getPokemonList method fails", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
    });

    const service = new PokemonService();

    await expect(service.getPokemonList()).rejects.toThrow("Erro ao carregar os Pokémon");
    expect(mockFetch).toHaveBeenCalledTimes(1);
  });

  it("should return an error if get pokemon details request fails", async () => {
    const mockPokemonListResponse = {
      results: [
        { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
      ],
    };

    mockFetch
      .mockResolvedValueOnce({
        ok: true,
        json: async () => mockPokemonListResponse,
      })
      .mockResolvedValueOnce({
        ok: false,
      });

    const service = new PokemonService();

    await expect(service.getPokemonList()).rejects.toThrow();
    expect(mockFetch).toHaveBeenCalledTimes(2);
  });
});

