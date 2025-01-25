import React, { useContext } from "react";
import { FavoritesList, IJoke } from "../components/context";
export interface Props {
  favorites: IJoke[];
  deleteJ: Function;
}
const Favorites: React.FC<Props> = ({ favorites, deleteJ }) => {
  return (
    <>
      <h1>Hello from Favorites</h1>
      {favorites.map((joke) => {
        return (
          <h1 key={joke.id}>
            {joke.joke}
            <button onClick={() => deleteJ(joke)}>Delete Joke!</button>
            <br />
          </h1>
        );
      })}
    </>
  );
};

export default Favorites;
