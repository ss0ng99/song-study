import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Header() {
  return (
    <>
      <HeaderWrap>
        <h1>LOGO</h1>
        <ul>
          <li>
            <Link to="/">Main</Link>
          </li>
          <li>
            <Link to="/tv">TV</Link>
          </li>
          <li>
            <Link to="/movie">Movie</Link>
          </li>
        </ul>
      </HeaderWrap>
    </>
  );
}

const HeaderWrap = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  color: #fff;
  align-items: center;
  padding: 0 5%;
  position: fixed;
  z-index: 9999;

  ul {
    display: flex;
    align-items: center;
    margin-left: 5%;

    li {
      padding: 0 8%;
      height: 80px;
      line-height: 80px;
      cursor: pointer;
      font-weight: 700;

      &:hover {
        color: darkblue;
      }

      a {
        color: #fff;
        text-decoration: none;

        &:link {
          color: #fff;
        }

        &:visited {
          color: #fff;
        }
      }
    }
  }
`;
