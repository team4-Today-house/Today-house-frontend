import React from "react";
import Slider from "react-slick";
import { shoppingMainImgData } from "./shoppingMainImgData";
import "./slick/slick.css";
import "./slick/slick-theme.css";
import { ShoppingMainImgDiv } from "./StyledHome";

export const ShoppingMainImg = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <ShoppingMainImgDiv>
      <Slider {...settings}>
        { shoppingMainImgData?.map((item) => {
          return (
            <a href={item.Url} key={item.id}>
              <div className="main-img-thumb">
                <img src={item.imgUrl} alt="" />
              </div>
            </a>
          );
        })}
      </Slider>
    </ShoppingMainImgDiv>
  );
};


export default ShoppingMainImg;