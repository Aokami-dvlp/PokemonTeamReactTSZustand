import create from 'zustand';
import { IPokemon } from './components/PokemonSelect';

interface IStore {
    team: IPokemon[];
    addPokemon: (pokemon: IPokemon) => void;
    removePokemon: (index:number) => void;
}

const useStore = create<IStore>((set) => ({
    team: [],

    addPokemon: (pokemon) => set((state) => ({ team: [...state.team, pokemon] })),

    removePokemon: (index:number) => set((state) => ({ team: state.team.filter((p, i) => i !== index) })),
}));

export default useStore