import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";

// Pages
import Main from "./pages/Main";
import Favorites from "./pages/Favorites";
import { useContext } from "react";
import { FavoritesList, IJoke } from "./components/context";

export default function App() {
  var favorites = useContext(FavoritesList);
  const [reset, setReset] = useState<number>(0);

  const saveJoke = (val: IJoke) => {
    favorites.favoritesList.push(val);
    localStorage.setItem("favorites", JSON.stringify(favorites.favoritesList));
  };
  const deleteJoke = (val: IJoke) => {
    var updated = favorites.favoritesList.filter(
      (joke) => joke.joke !== val.joke
    );
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      try {
        const parsedFavorites: IJoke[] = JSON.parse(storedFavorites);
        favorites.favoritesList = parsedFavorites;
        console.log(favorites.favoritesList);
      } catch (error) {
        console.error("Error loading favorites from localStorage:", error);
      }
      setReset(reset + 1);
    }
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/favorites">
          <Favorites favorites={favorites.favoritesList} deleteJ={deleteJoke} />
        </Route>
        <Route path="/">
          <Main favorites={favorites.favoritesList} save={saveJoke} />
        </Route>
      </Switch>
    </Router>
  );
}
