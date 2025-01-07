import { render, screen } from "@testing-library/react";
import PokemonCard from "./pokemon-card";
import '@testing-library/jest-dom'


describe("PokemonCard", () => {
  const mockPokemonDetails = {
    pokemon: { name: "pikachu", url: "" },
    types: ["electric"],
    abilities: ["static"],
    imageUrl: "",
  };

  it("should render pokemon card", () => {
    render(<PokemonCard pokemonDetails={mockPokemonDetails} />);

    expect(screen.getByTestId("pokemon-card")).toBeDefined();
  });

  it("should render image", () => {
    render(<PokemonCard pokemonDetails={mockPokemonDetails} />);

    expect(screen.getByTestId("pokemon-image")).toBeDefined();
  });

  it("should render pokemon name correctly", () => {
    render(<PokemonCard pokemonDetails={mockPokemonDetails} />);

    expect(screen.getByTestId("pokemon-name")).toHaveTextContent("pikachu");
  });

  it("should render pokemon types correctly", () => {
    render(<PokemonCard pokemonDetails={mockPokemonDetails} />);

    expect(screen.getByTestId("pokemon-types")).toHaveTextContent("electric");
  });

  it("should render pokemon abilities correctly", () => {
    render(<PokemonCard pokemonDetails={mockPokemonDetails} />);

    expect(screen.getByTestId("pokemon-abilities")).toHaveTextContent("static");
  });
});
