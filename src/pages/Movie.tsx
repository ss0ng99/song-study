import React, { useEffect, useState } from "react";
import { createBrowserRouter } from "react-router-dom";
import MovieList from "../components/MovieList";
import { API_KEY, API_URL, PosterImage_URL } from "../Config";

function Movie() {
  const [NowPlaying, setNowPlaying] = useState<any[]>([]);
  const [Poster, setPoster] = useState<any>(null);

  useEffect(() => {
    const nowPlayingMovie = `${API_URL}movie/now_playing?api_key=${API_KEY}&language=ko-kr`;
    fetch(nowPlayingMovie)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setNowPlaying([...response.results]);
        console.log(NowPlaying);
        setPoster(Poster || response.results[0]);
      });
  }, []);

  return (
    <>
      <div></div>
      {NowPlaying.map((movie, index) => {
        return (
          <MovieList
            originalTitle={movie.original_title}
            poster={movie.poster_path}
          />
        );
      })}
    </>
  );
}
export default Movie;
