import { render, screen } from "@testing-library/react";
import { CardButtons } from "./card-buttons";
import { buildPokemonImageUrl } from "@/src/utils/buildPokemonUrl";

describe("CardButtons", () => {
    const mockPokemonDetails = {
        pokemon: { name: "", url: "" },
        types: [""],
        abilities: [""],
        imageUrl: ""
    };

    it("should render like and dislike buttons", () => {
        render(<CardButtons {...mockPokemonDetails} />);
        expect(screen.getByTestId("btn-like")).toBeDefined();
        expect(screen.getByTestId("btn-dislike")).toBeDefined();
    });

    
});
