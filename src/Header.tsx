import styled from "styled-components";

export default function Header() {
    return (
      <HeaderWrap>
        <h1>LOGO</h1>
        <ul>
          <li>menu1</li>
          <li>menu2</li>
          <li>menu3</li>
        </ul>
      </HeaderWrap>
    );
}

const HeaderWrap = styled.div`
  width: 100%;
  height: 80px;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
  padding: 0 5%;

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
    }
  }
`
