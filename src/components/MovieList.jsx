// this component will render all the list of movies for us

import React from "react";

function MovieList(props) {
  const AddFavourite = props.favouriteComponent;

  const FavMovie = props.button;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ">
      {props.movies.map(
        (
          movie,
          index // we are using map function to display each movie
        ) => (
          <div key={index} className="relative group">
            <div className="relative">
              <img
                src={movie.Poster}
                alt="image"
                className="  rounded-lg transition-transform transform scale-100 group-hover:scale-105 cursor-pointer m-0"
              />
              <div
                className="absolute inset-x-0 bottom-0 bg-gray-800 text-white p-2 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                onClick={FavMovie} // when we click on Add favourite our movie will get added
              >
                <h1 className="font-bold">Add to favourite </h1>
                {AddFavourite}
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}
// this add to favourite will appear when someone hover on the images

export default MovieList;
