import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Skeletons } from "../../components/Loading";
import WrapContainer from "../../components/WrapContainer";
import Header from "../Header/Header";
import ShoppingMainImg from "./ShoppingMainImg";
import { darkMode } from "../../components/DarkMode";
import { ThemeContext } from "../../utils/context";
import { CategoryItem, CategoryItemProduct } from "../../components/Category/Category";
import { useGetHotItems } from "../../apis/hooks/useGetHotItems";
import { useGetProducts } from "../../apis/hooks/useGetProducts";
import { productCategory } from "../../components/Category/productCategory";
import { CategoryItemWrap, CategoryWrap, HomeWrap, ShoppingMainImgContainer } from "./StyledHome";
import { useScroll } from "../../apis/hooks/useScroll";

function Home() {
  const { isDark } = useContext(ThemeContext);
  let bgc = darkMode(isDark);
  let color = darkMode(!isDark);
  const {
    products,
    getProducts,
    getProductsIsLoading,
    getProductsIsError,
    getProductsErrorMsg,
  } = useGetProducts();
  const { hotItems, getHotItemsIsLoading } = useGetHotItems();
  const { y } = useScroll();

  useEffect(() => {
    getProducts();
  }, []);

  if (getProductsIsError) {
    console.log(getProductsErrorMsg);
  }

  return (
    <>
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
            {(!hotItems || getHotItemsIsLoading) && <Skeletons />}
            {hotItems?.map((item) => (
              <CategoryItemProduct
                key={item.title}
                item={item}
                oneSale={true}
              />
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
            {(!products || getProductsIsLoading) && (
              <>
                <Skeletons />
                <Skeletons />
              </>
            )}
            {products?.map((item) => (
              <Link to={`/detail/${item.productId}`}>
                <CategoryItemProduct key={item.productId} item={item} />
              </Link>
            ))}
          </CategoryItemWrap>
        </div>
      </WrapContainer>
    </HomeWrap>
    </>
  );
}

export default Home;
