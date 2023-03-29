import styled from "styled-components";

export const headerHeight = { height: 80 };

export const HeaderWrap = styled.header`
  z-index: 9999;
  position: fixed;
  top: 0;
  label {
    font-size: 20px;
  }
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
      font-weight: 600;
    }
    .header-left {
      .main-img {
        width: 100px;
        margin-right: 50px;
        overflow: hidden;
        span {
          position: relative;
          right: 50px;
        }
      }
      .header-select {
        cursor: pointer;
        margin-right: 20px;
      }
    }
    .header-right {
      span {
        margin-left: 20px;
      }
      #header-login {
        cursor: pointer;
      }
    }
  }
`;