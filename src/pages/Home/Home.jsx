import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { MainShoppingImgSkeleton, Skeletons } from "../../components/Loading";
import WrapContainer from "../../components/WrapContainer";
import Header from "../Header/Header";
<<<<<<< HEAD
import { headerHeight } from "../Header/StyledHeader";
import {
  CategoryItem,
  CategoryItemProduct,
} from "../../components/Category/Category";
=======
>>>>>>> dev
import ShoppingMainImg from "./ShoppingMainImg";
import { darkMode } from "../../components/DarkMode";
import { ThemeContext } from "../../utils/context";
import { CategoryItem, CategoryItemProduct } from "../../components/Category/Category";
import { useGetHotItems } from "../../apis/hooks/useGetHotItems";
import { useGetProducts } from "../../apis/hooks/useGetProducts";
import { productCategory } from "../../components/Category/productCategory";
<<<<<<< HEAD
import Loading from "../../components/Loading";
import { Link } from "react-router-dom";
import { getCookie } from "../../shared/cookies";
=======
import { CategoryItemWrap, CategoryWrap, HomeWrap, ShoppingMainImgContainer } from "./StyledHome";
import { useScroll } from "../../apis/hooks/useScroll";
>>>>>>> dev

function Home() {
  const { isDark } = useContext(ThemeContext);
  let bgc = darkMode(isDark);
  let color = darkMode(!isDark);
<<<<<<< HEAD

  const { products, getProducts, getProductsIsLoading, getProductsIsError } =
    useGetProducts();
=======
  const { products, getProducts, getProductsIsLoading, getProductsIsError, getProductsErrorMsg } = useGetProducts();
>>>>>>> dev
  const { hotItems, getHotItemsIsLoading } = useGetHotItems();
  const {y} = useScroll();

  useEffect(() => {
    getProducts();
  }, []);

<<<<<<< HEAD
  if (!hotItems || !products || getHotItemsIsLoading || getProductsIsLoading) {
    return <Loading />;
  }
  if (getProductsIsError) {
    console.log("데이터 못 받아옴..");
  }
=======
  if(getProductsIsError) {
    alert(getProductsErrorMsg);
  };
>>>>>>> dev

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
<<<<<<< HEAD
        <ShoppingMainImg />
=======
        <MainShoppingImgSkeleton/>
        <ShoppingMainImg/>
>>>>>>> dev
      </ShoppingMainImgContainer>
      {/* 본문 */}
      <WrapContainer>
        <div>
          <h4>오늘의 딜</h4>
          <CategoryItemWrap>
<<<<<<< HEAD
            {hotItems?.map((item) => (
              <Link to={`/detail/${item.hotitemId}`}>
                <CategoryItemProduct
                  key={item.title}
                  item={item}
                  oneSale={true}
                />
              </Link>
            ))}
=======
            { (!hotItems || getHotItemsIsLoading) && <Skeletons/> }
            {
              hotItems?.map((item) =>
                <Link to={`/detail/${item.hotitemId}`}>
                  <CategoryItemProduct key={item.title} item={item} oneSale={true}/>
                </Link>
              )
            }
>>>>>>> dev
          </CategoryItemWrap>
        </div>
        <div>
          <h4>카테고리</h4>
          <CategoryWrap>
<<<<<<< HEAD
            {productCategory.map((item) => (
              <CategoryItem key={item.name} imgUrl={item.imgUrl}>
                {item.name}
              </CategoryItem>
            ))}
=======
            {
              productCategory.map((item) =>
                <CategoryItem key={item.name} imgUrl={item.imgUrl}>
                  {item.name}
                </CategoryItem>
              )
            }
>>>>>>> dev
          </CategoryWrap>
        </div>
        <div>
          <h4>인기 상품</h4>
          <CategoryItemWrap>
<<<<<<< HEAD
            {products?.map((item) => (
=======
          { (!products || getProductsIsLoading) && <><Skeletons/><Skeletons/></> }
          {
            products?.map((item) =>
>>>>>>> dev
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

<<<<<<< HEAD
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
=======
export default Home;
>>>>>>> dev
