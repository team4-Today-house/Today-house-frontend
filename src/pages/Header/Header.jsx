import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import WrapContainer from '../../components/WrapContainer'

function Header() {
  return (
    <HeaderWrap>
      <WrapContainer>
        <nav>
          <div>
            <span>로고자리</span>
            <Link to={"/"}>
              <span>쇼핑</span>
            </Link>
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
    span {
      margin-right: 10px;
    }
  }
`;

export default Header