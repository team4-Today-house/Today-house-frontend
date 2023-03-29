import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { darkMode } from "../../components/DarkMode";
import { ThemeContext } from "../../utils/context";
import WrapContainer from "../../components/WrapContainer";
import Header from "../Header/Header";
import { headerHeight } from "../Header/StyledHeader";
import {
  CategoryItem,
  CategoryItemProduct,
} from "../../components/Category/Category";
import ShoppingMainImg from "./ShoppingMainImg";
import { useGetHotItems } from "../../apis/hooks/useGetHotItems";
import { useGetProducts } from "../../apis/hooks/useGetProducts";
import { productCategory } from "../../components/Category/productCategory";
import Loading from "../../components/Loading";
import { Link } from "react-router-dom";
import { getCookie } from "../../shared/cookies";

function Home() {
  const { isDark } = useContext(ThemeContext);
  let bgc = darkMode(isDark);
  let color = darkMode(!isDark);

  const { products, getProducts, getProductsIsLoading, getProductsIsError } =
    useGetProducts();
  const { hotItems, getHotItemsIsLoading } = useGetHotItems();

  useEffect(() => {
    getProducts();
  }, []);

  if (!hotItems || !products || getHotItemsIsLoading || getProductsIsLoading) {
    return <Loading />;
  }
  if (getProductsIsError) {
    console.log("데이터 못 받아옴..");
  }

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
        <ShoppingMainImg />
      </ShoppingMainImgContainer>
      {/* 본문 */}
      <WrapContainer>
        <div>
          <h4>오늘의 딜</h4>
          <CategoryItemWrap>
            {hotItems?.map((item) => (
              <Link to={`/detail/${item.hotitemId}`}>
                <CategoryItemProduct
                  key={item.title}
                  item={item}
                  oneSale={true}
                />
              </Link>
            ))}
          </CategoryItemWrap>
        </div>
        <div>
          <h4>카테고리</h4>
          <CategoryWrap>
            {productCategory.map((item) => (
              <CategoryItem key={item.name} imgUrl={item.imgUrl}>
                {item.name}
              </CategoryItem>
            ))}
          </CategoryWrap>
        </div>
        <div>
          <h4>인기 상품</h4>
          <CategoryItemWrap>
            {products?.map((item) => (
              <Link to={`/detail/${item.productId}`}>
                <CategoryItemProduct key={item.productId} item={item} />
              </Link>
            ))}
          </CategoryItemWrap>
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
  flex-wrap: wrap;
  gap: 21px;
`;

export default Home;
