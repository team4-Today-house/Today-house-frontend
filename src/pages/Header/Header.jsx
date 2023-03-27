import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import WrapContainer from '../../components/WrapContainer'
import Mainimg from '../../components/Mainimg';

function Header() {
  return (
    <HeaderWrap>
      <WrapContainer>
        <nav>
          <div>
            <span>
              <Mainimg /> 
            </span>
            <span>
              <Link to={"/"}>쇼핑</Link>
            </span>
          </div>
          <div>
            <Link to={"/login"}>
              로그인
            </Link>
            <label htmlFor=""></label>
          </div>
        </nav>
      </WrapContainer>
    </HeaderWrap>
  )
}

const HeaderWrap = styled.header`
  border-bottom: 1px solid black;
  nav {
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    div {
      display: flex;
      align-items: center;
    }
    span {
      margin-right: 20px;
    }
  }
`;

export default Header