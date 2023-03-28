import React, { useContext } from "react";
import styled from "styled-components";
import { CategoryItem, CategoryItemProduct, productCategory } from "../../components/Category";
import WrapContainer from "../../components/WrapContainer";
import { darkMode } from "../../components/DarkMode";
import { ThemeContext } from "../../utils/context";
import Header from "../Header/Header";
import { headerHeight } from "../Header/StyledHeader";
import ShoppingMainImg from "./ShoppingMainImg";

function Home() {
  const { isDark } = useContext(ThemeContext);
  let bgc = darkMode(isDark);
  let color = darkMode(!isDark);

  return (
    <HomeWrap
      style={{
        backgroundColor: bgc,
        color: color,
      }}
    >
      {/* 헤더 */}
      <Header />
      {/* 쇼핑 메인 이미지 */}
      <ShoppingMainImgContainer>
        <ShoppingMainImg/>
      </ShoppingMainImgContainer>
      {/* 아래 내용 */}
      <WrapContainer>
        <CategoryWrap>
          {
            productCategory.map((item) =>
              <CategoryItem key={item.name} imgUrl={item.imgUrl}>
                {item.name}
              </CategoryItem>
            )
          }
        </CategoryWrap>
        <div>
          <h4>오늘의 딜</h4>
          <CategoryItemWrap>
            {}
            <CategoryItemProduct item={""} oneSale={true}/>
          </CategoryItemWrap>
        </div>
        <div>
          <h4>카테고리</h4>
          <CategoryWrap>
          {
            productCategory.map((item) =>
              <CategoryItem key={item.name} imgUrl={item.imgUrl}>
                {item.name}
              </CategoryItem>
            )
          }
          </CategoryWrap>
        </div>
        <div>
          <h4>인기 상품</h4>
        </div>
      </WrapContainer>
    </HomeWrap>
  );
}

const HomeWrap = styled.div`
  margin-top: ${headerHeight.height}px;
  h4 {
    font-size: 20px;
    font-weight: 900;
    margin: 15px 0;
  }
`;

const ShoppingMainImgContainer = styled.div`
  width: 100vw;
  min-width: 1135px;
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;

const CategoryWrap = styled.nav`
  display: flex;
  justify-content: space-around;
  /* overflow: scroll; */
`;

const CategoryItemWrap = styled.div`
  display: flex;
  gap: 10px;
`;

export default Home;
