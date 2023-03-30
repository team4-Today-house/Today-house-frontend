import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HeaderWrap } from "./StyledHeader";
import { ThemeContext } from "../../utils/context";
import { cookies, getCookie } from "../../shared/cookies";
import WrapContainer from "../../components/WrapContainer";
import Mainimg from "../../components/Mainimg";
import DarkMode, { darkMode } from "../../components/DarkMode";

function Header() {
  const navi = useNavigate();
  const token = getCookie("token");
  const { isDark } = useContext(ThemeContext);
  let bgc = darkMode(isDark);
  let color = darkMode(!isDark);
  const hoverHandler = (e) => {
    e.target.style["color"] = "#00bbff";
  };
  const unhoverHandler = (e) => {
    e.target.style["color"] = color;
  };

  const delHandler = () => {
    cookies.remove("token");
    navi("/");
    window.location.reload();
  };

  return (
    <HeaderWrap
      style={{
        backgroundColor: bgc,
        color: color,
        borderBottom: `1px solid var(--header-border-color-gray)`,
      }}
    >
      <WrapContainer>
        <nav className="header-content">
          <div id="header-left">
            <div id="main-logo-img">
              <span>
                <Mainimg text={true} height={"43"} />
              </span>
            </div>
            <Link to={"/"}>
              <label
                className="header-select"
                style={{ color: color }}
                onMouseEnter={hoverHandler}
                onMouseLeave={unhoverHandler}
              >
                커뮤니티
              </label>
            </Link>
            <Link to={"/"}>
              <label
                className="header-select"
                style={{ color: color }}
                onMouseEnter={hoverHandler}
                onMouseLeave={unhoverHandler}
              >
                쇼핑
              </label>
            </Link>
            <Link to={"/"}>
              <label
                className="header-select"
                style={{ color: color }}
                onMouseEnter={hoverHandler}
                onMouseLeave={unhoverHandler}
              >
                이사/시공/수리
              </label>
            </Link>
          </div>
          <div id="header-right">
            <span>
              {token ? (
                <label
                  className="header-login"
                  style={{ color: color }}
                  onClick={(e) => {
                    delHandler(e);
                    navi("/");
                  }}
                >
                  로그아웃
                </label>
              ) : (
                <>
                  <Link to={"/login"}>
                    <label className="header-login" style={{ color: color }}>
                      로그인
                    </label>
                  </Link>
                  <Link to={"/signup"}>
                    <label className="header-login" style={{ color: color }}>
                      회원가입
                    </label>
                  </Link>
                </>
              )}
            </span>
            <span className="dark-mode">
              <DarkMode />
            </span>
          </div>
        </nav>
      </WrapContainer>
    </HeaderWrap>
  );
}

export default Header;
