import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import WrapContainer from '../../components/WrapContainer'
import Mainimg from '../../components/Mainimg';
import { HeaderWrap } from './StyledHeader';
import DarkMode, { darkMode } from '../../components/DarkMode';
import { ThemeContext } from '../../utils/context';

function Header() {
  const { isDark } = useContext(ThemeContext);
  let bgc = darkMode(isDark);
  let color = darkMode(!isDark);
  const hoverHandler = (e) => {
    e.target.style["color"] = "#00bbff";
  }
  const unhoverHandler = (e) => {
    e.target.style["color"] = color;
  }

  return (
    <HeaderWrap style={{
      backgroundColor: bgc,
      color: color,
      borderBottom: `1px solid ${color}`
    }}>
      <WrapContainer>
        <nav>
          <div className='header-left'>
            <span className='main-img'>
              <Mainimg text={true} height={"40"}/>
            </span>
            <Link to={"/"}>
              <span>
                <label 
                  className='nav-shopping' 
                  style={{color: color}}
                  onMouseEnter={hoverHandler}
                  onMouseLeave={unhoverHandler}
                >쇼핑</label>
              </span>
            </Link>
          </div>
          <div className='header-right'>
            <Link to={"/login"}>
              <span className='nav-login'>
                <label style={{color: color}}>로그인</label>
              </span>
            </Link>
            <span>
              <DarkMode/>
            </span>
          </div>
        </nav>
      </WrapContainer>
    </HeaderWrap>
  )
}

export default Header