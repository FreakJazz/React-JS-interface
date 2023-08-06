import axios from "axios";

export const PokeApi = async (pokemonNumber) => {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`;
    try {
        const response = await axios.get(apiUrl);
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}
