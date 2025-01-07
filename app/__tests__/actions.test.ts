import { PokemonService } from "@/src/infrastructure/services/pokemon.service";
import { PokemonDetails, PokemonLike } from "@/src/domain/models/pokemon";
import { getPokemonList, handleWebviewEvent } from "../actions";


describe("actions.ts", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe("handleWebviewEvent", () => {
        it("should send correct event to ReactNativeWebView", () => {
            const mockPostMessage = jest.fn();
            (window as any).ReactNativeWebView = { postMessage: mockPostMessage };

            const pokemonLike: PokemonLike = {
                name: '',
                image: '',
                types: [],
                abilities: [],
                liked: true
            };

            handleWebviewEvent(pokemonLike);

            expect(mockPostMessage).toHaveBeenCalledTimes(1);
            expect(mockPostMessage).toHaveBeenCalledWith(JSON.stringify(pokemonLike));
        });
    });
});
