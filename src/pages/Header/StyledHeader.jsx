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
    #header-left {
      #main-logo-img {
        width: 100px;
        margin-right: 25px;
        overflow: hidden;
        span {
          right: 50px;
          position: relative;
        }
      }
      .header-select {
        margin: 0 15px 0 15px;
        font-size: 17px;
        font-weight: 600;
        cursor: pointer;
      }
    }
    #header-right {
      .header-login {
        padding: 0 10px 0 10px;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
      }
      a:first-child {
        border-right: 1px solid var(--header-border-color-gray);
      }
      .dark-mode {
        margin-left: 20px;
      }
    }
  }
`;