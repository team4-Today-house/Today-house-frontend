import React from "react";
import styled from "styled-components";
import Button, { btnStyle } from "../../components/Button";
import { CategoryItem, CategoryItemProduct, productCategory } from "../../components/Category";
import WrapContainer from "../../components/WrapContainer";
import Header, { headerHeight } from "../Header/Header";
import ShoppingMainImg from "./ShoppingMainImg";

function Home() {
  return (
    <HomeWrap>
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
              <CategoryItem src={item.imgUrl}>
                {item.name}
              </CategoryItem>
            )
          }
        </CategoryWrap>
        <div>
          <h4>오늘의 딜</h4>
          <CategoryItemWrap>
            <CategoryItemProduct src={"#"} oneSale={true}/>
            {/* <CategoryItemProduct oneSale={true}/>
            <CategoryItemProduct oneSale={true}/>
            <CategoryItemProduct oneSale={true}/> */}
          </CategoryItemWrap>
        </div>
        <div>
          <h4>카테고리</h4>
          <CategoryWrap>
          {
            productCategory.map((item) =>
              <CategoryItem src={item.imgUrl}>
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
  }
`;

const ShoppingMainImgContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const CategoryWrap = styled.nav`
  display: flex;
  justify-content: space-between;
  /* overflow: scroll; */
`;

const CategoryItemWrap = styled.div`
  display: flex;
  gap: 10px;
`;

export default Home;
