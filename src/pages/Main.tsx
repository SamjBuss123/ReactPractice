import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FavoritesList, IJoke } from "../components/context";

// Joke API URL
// https://icanhazdadjoke.com/
export interface Props {
  favorites: IJoke[];
  save: Function;
}
const Main: React.FC<Props> = ({ favorites, save }) => {
  const [joke, setJoke] = useState<null | IJoke>(null);

  const saveJoke = () => {
    save(joke);
    fetchJoke();
  };

  const fetchJoke = async () => {
    try {
      const response = await fetch("https://icanhazdadjoke.com/", {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      });
      const jokeData = await response.json();
      console.log(jokeData);
      setJoke(jokeData);
    } catch (error) {
      console.error("Failed to fetch joke:", error);
    }
  };

  return (
    <section>
      <h1>Joke Generator</h1>
      <button onClick={fetchJoke}>Joke Please!</button>
      <button onClick={saveJoke}>Save Joke!</button>
      {favorites.map((joke) => {
        return (
          <h1>
            {joke.joke}
            <br />
          </h1>
        );
      })}
      <hr />

      <h1>{joke?.joke}</h1>
    </section>
  );
};

export default Main;
