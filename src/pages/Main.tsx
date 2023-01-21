import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MovieList from "../components/MovieList";
import { API_KEY, API_URL, MainImage_URL, PosterImage_URL } from "../Config";
import Movie from "./Movie";

function Main() {
  const [Popular, setPopular] = useState<any[]>([]);

  useEffect(() => {
    const currentPopular = `${API_URL}movie/popular?api_key=${API_KEY}&language=ko-kr&page=1`;
    fetch(currentPopular)
      .then((response) => response.json())
      .then((response) => {
        setPopular([...response.results]);
      });
  }, []);

  const randomNum = Math.floor(Math.random() * Popular.length) + 1;

  return (
    <>
      <MainVisual>
        <h2>메인영역</h2>
        <div className="imgMain">
          <img src={`${MainImage_URL}/${Popular[randomNum]?.backdrop_path}`} />
        </div>
        <div className="popularInfo">
          <h3>{Popular[randomNum]?.title}</h3>
          <p className="overView">{Popular[randomNum]?.overview}</p>
          <p>평점 : {Popular[randomNum]?.vote_average}</p>
        </div>
      </MainVisual>
      <Movie />
    </>
  );
}

export default Main;

const MainVisual = styled.section`
  width: 100%;
  position: relative;

  h2 {
    position: absolute;
    font-size: 0;
    left: -9999px;
    top: -9999px;
    line-height: 0;
    width: 1px;
    heightL 1px;
  }

  div.imgMain {
    position: relative;

    img {
      display: block;
      width: 100%;
    }

    &:after {
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-image: linear-gradient(to bottom, #333, transparent);
    }
  }

  div.popularInfo {
    
    color: #fff;
    width: 40%;
    position: absolute;
    bottom: 5%; 
    left: 5%;

    h3 {
      font-size: 1.8rem;
      margin-bottom: 10px;
      word-break: keep-all;
    }

    .overView {
      font-size: 1rem;
      line-height: 1.8;
      word-break: keep-all;
    }
  }
`;
