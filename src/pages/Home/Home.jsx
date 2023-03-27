import React from "react";
import styled from "styled-components";
import { CategoryItem, CategoryItemProduct } from "../../components/Category";
import WrapContainer from "../../components/WrapContainer";
import Header from "../Header/Header";
import ShoppingMainImg from "./ShoppingMainImg";

function Home() {
  return (
    <>
      {/* 헤더 */}
      <Header />
      {/* 쇼핑 메인 이미지 */}
      <ShoppingMainImgContainer>
        <ShoppingMainImg/>
      </ShoppingMainImgContainer>
      {/* 아래 내용 */}
      <WrapContainer>
        <CategoryWrap>
          <CategoryItem>가구</CategoryItem>
          <CategoryItem>가전·디지털</CategoryItem>
          <CategoryItem>주방용품</CategoryItem>
          <CategoryItem>생활용품</CategoryItem>
        </CategoryWrap>
        <div>
          <h4>오늘의 딜</h4>
          <CategoryWrap>
            <CategoryItemProduct/>
            <CategoryItemProduct/>
            <CategoryItemProduct/>
            <CategoryItemProduct/>
          </CategoryWrap>
        </div>

        <CategoryWrap>
          <CategoryItem>가구</CategoryItem>
          <CategoryItem>가전·디지털</CategoryItem>
          <CategoryItem>주방용품</CategoryItem>
          <CategoryItem>생활용품</CategoryItem>
        </CategoryWrap>

        <div>
          <h4>카테고리</h4>

        </div>
        <div>
          <h4>인기 상품</h4>
        </div>
      </WrapContainer>
    </>
  );
}

const ShoppingMainImgContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const CategoryWrap = styled.nav`
  display: flex;
  justify-content: space-around;
  /* overflow: scroll; */
`;





export default Home;
