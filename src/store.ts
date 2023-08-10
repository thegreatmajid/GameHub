import { create } from "zustand";

interface GameQuery {
  genreID?: number;
  platformID?: number;
  sortOrder?: String;
  searchText?: String;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setGenreID: (genreID: number) => void;
  setPlatformID: (platformID: number) => void;
  setSortOrder: (sortOrder: string) => void;
  setSearchText: (searchText: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setGenreID: (genreID) =>
    set((state) => ({ gameQuery: { ...state.gameQuery, genreID } })),
  setPlatformID: (platformID) =>
    set((state) => ({ gameQuery: { ...state.gameQuery, platformID } })),
  setSortOrder: (sortOrder) =>
    set((state) => ({ gameQuery: { ...state.gameQuery, sortOrder } })),
  setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
}));

export default useGameQueryStore;
