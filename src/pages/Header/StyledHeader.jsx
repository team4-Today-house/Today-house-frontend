import styled from "styled-components";

export const headerHeight = { height: 80 };

export const HeaderWrap = styled.header`
  z-index: 9999;
  position: fixed;
  top: 0;
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
      span {
        margin-right: 20px;
      }
    }
    .header-right {
      span {
        margin-left: 20px;
      }
    }
  }
`;