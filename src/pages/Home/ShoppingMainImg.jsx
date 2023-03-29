import React from 'react'
import styled from 'styled-components'
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

export default ShoppingMainImg