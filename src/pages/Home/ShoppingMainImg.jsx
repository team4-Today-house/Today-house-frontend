import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { shoppingMainImgData } from "./shoppingMainImgData";
import { MainShoppingImgSkeleton } from "../../components/Loading";
import "./slick/slick.css";
import "./slick/slick-theme.css";

export const ShoppingMainImg = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <ShoppingMainImgDiv>
      <Slider {...settings}>
        { !shoppingMainImgData && <MainShoppingImgSkeleton />}
        { shoppingMainImgData?.map((item) => {
          return (
            <div>
              <a href={item.Url} key={item.id}>
                <ShoppingMainImgDiv>
                  <img src={item.imgUrl} alt="" />
                </ShoppingMainImgDiv>
              </a>
            </div>
          );
        })}
      </Slider>
    </ShoppingMainImgDiv>
  );
};

const ShoppingMainImgDiv = styled.div`
  /* img {
    height: 380px;
    object-fit: cover;
  } */
`;

export default ShoppingMainImg;
