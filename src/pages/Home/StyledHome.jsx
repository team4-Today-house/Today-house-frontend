import styled from "styled-components";
import { headerHeight } from "../Header/StyledHeader";

export const HomeWrap = styled.div`
  margin-top: ${headerHeight.height}px;
  h4 {
    font-size: 20px;
    font-weight: 900;
    margin: 15px 0;
  }
`;

export const ShoppingMainImgContainer = styled.div`
  width: 100vw;
  min-width: 1135px;
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;

export const CategoryWrap = styled.nav`
  display: flex;
  justify-content: space-around;
  /* overflow: scroll; */
`;

export const CategoryItemWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 21px;
`;