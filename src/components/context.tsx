import { createContext } from "react";

// use this interface to declare the type of a joke in favorites list
export interface IJoke {
  joke: string;
  id: string;
  status: number;
}

export const FavoritesList = createContext<{ favoritesList: IJoke[] }>({
  favoritesList: [],
});
