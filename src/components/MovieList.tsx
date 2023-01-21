import React from "react";
import styled from "styled-components";
import { PosterImage_URL } from "../Config";

// interface MovieList {
//   originalTitle: string;
// }

export default function MovieList(props: any) {
  return (
    <div>
      <div>
        <img src={`${PosterImage_URL}/${props.poster}`} />
      </div>
      제목 : {props.originalTitle}
    </div>
  );
}
