import React from 'react'
import styled from 'styled-components'

function ShoppingMainImg() {
  return (
    <a href='#'>
      <ShoppingMainImgDiv>
        <img src="https://image.ohou.se/i/bucketplace-v2-development/uploads/store/banners/store_home_banners/167955763057772309.png?w=2560" alt="" />
      </ShoppingMainImgDiv>
    </a>
  )
};

const ShoppingMainImgDiv = styled.div`
  /* margin: auto; */
  img {
    height: 380px;
    object-fit: cover;
  }
`;

export default ShoppingMainImg