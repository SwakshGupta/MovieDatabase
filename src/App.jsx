import React, { useEffect, useState } from "react";
import MovieList from "./components/MovieList";
import Heading from "./components/Heading";
import SearchBox from "./components/searchbox";
import FavoriteButton from "./components/AddFavourite";

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState(""); // anytime this search value changse we will call the getMovieRequest
  const [favourite, setFavourite] = useState([]);

  const getMovieRequest = async (search) => {
    const URL = `http://www.omdbapi.com/?s=${search}&apikey=a3c51e19`; // here we are using Template Literal
    const response = await fetch(URL);
    const responseJson = await response.json();

    console.log(responseJson);

    if (responseJson.Search) {
      setMovies(responseJson.Search); // means if there is something in search bar then set Movies
    }

    // this is setting movies
  };

  useEffect(() => {
    getMovieRequest(search);
  }, [search]); // Empty array means the effect will run once after the initial render

  const addFavMovie = () => {
    const newFavList = [...favourite, movies]; // it will make copy of current and add with the new movie
    setFavourite(newFavList);
  };

  return (
    <div className="bg-black">
      <div className="flex justify-between items-center mb-10 p-4 ">
        <h1 className="text-white ml-auto p-10 font-bold">Movies</h1>

        <div className="mr-auto">
          <SearchBox search={search} setSearch={setSearch} />
        </div>
      </div>

      <div className="grid grid-rows-2 hover:grid-rows-6">
        <MovieList
          movies={movies}
          favouriteComponent={FavoriteButton}
          button={addFavMovie}
        />
      </div>

      <div className="grid grid-rows-2 hover:grid-rows-6">
        <Heading heading="favourites " />

        <MovieList movies={favourite} favouriteComponent={FavoriteButton} />
      </div>
    </div>
  );
}

// we are passing the button as a prop to MovieList componeny

export default App;

// we are passing this as a prop to other components

// heres is how all te things are working when the website reloads useeffect function is called

// which initializes the function getMovieRequest which then start the async function which calls api
