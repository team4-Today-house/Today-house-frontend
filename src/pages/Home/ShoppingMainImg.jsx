import React from 'react'
import styled from 'styled-components'
import Slider from "react-slick";
import { shoppingMainImgData } from './shoppingMainImgData';

function ShoppingMainImg() {
  return (
    <>
      {
        shoppingMainImgData.map((item) => {
          return (
            <a href={item.Url} key={item.id}>
              <ShoppingMainImgDiv>
                <img src={item.imgUrl} alt="" />
              </ShoppingMainImgDiv>
            </a>
        )})
      }
      
    </>
  )
};

const ShoppingMainImgDiv = styled.div`
  img {
    height: 380px;
    object-fit: cover;
  }
`;

export const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div>
      <h2> Single Item</h2>
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
  
}

export default ShoppingMainImg