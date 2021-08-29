import React, { useState, useEffect } from "react";
import axios from "./axios";
import "../App.css";
// import YouTube from "react-youtube";
// import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLarge }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  //   let show = axios.get(fetchUrl);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  // const opts = {
  //   height: "390",
  //   width: "100%",
  //   playerVars: {
  //     // https://developers.google.com/youtube/player_parameters
  //     autoplay: 1,
  //   },
  // };

  // let handleClick = (movie) => {
  //   if (trailerUrl) setTrailerUrl("");
  //   else {
  //     movieTrailer(movie?.name || " ")
  //       .then((url) => {
  //         const ulrParams = new URLSearchParams(new URL(url).search);
  //         setTrailerUrl(ulrParams.get("v"));
  //       })
  //       .catch((error) => console.log(error));
  //   }
  // };

  // console.table(movies);
  return (
    <>
      <div className="row">
        {title}
        <div className="row-posters">
          {movies.map((movie) => {
            return (
              <img
                // onClick={() => handleClick(movie)}
                key={movie.id}
                className={`row-poster ${isLarge && "row-posterLarge"}`}
                src={`${base_url}${
                  isLarge ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            );
          })}
        </div>

        {/* {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />} */}
      </div>
    </>
  );
}

export default Row;
