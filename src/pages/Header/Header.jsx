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
              <Mainimg text={true} height={"40"}/>
            </span>
            <span>
              <Link to={"/"}>쇼핑</Link>
            </span>
          </div>
          <Link to={"/login"}>
            <span>로그인</span>
          </Link>
        </nav>
      </WrapContainer>
    </HeaderWrap>
  )
}

export const headerHeight = { height: 80 };

const HeaderWrap = styled.header`
  z-index: 9999;
  position: fixed;
  top: 0;
  border-bottom: 1px solid black;
  background-color: #fff;
  nav {
    height: ${headerHeight.height}px;
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