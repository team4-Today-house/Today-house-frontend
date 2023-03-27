import React from 'react'
import styled from 'styled-components'
import { icons, iconSize, StarIcon } from './Icons';

export function CategoryItem({children}) {
  return (
    <div>
      <CategoryWrap>
        <img 
          className='category-img'
          src="https://image.ohou.se/i/bucketplace-v2-development/uploads/category/store_home_categories/165698403420736265.png?gif=1&w=144&h=144&c=c" 
          alt={`${children}`}
        />
        {children}
      </CategoryWrap>
    </div>
  )
}

const CategoryWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .category-img {
    width: 80px;
    height: 80px;
    object-fit: cover;
  }
`;

export const CategoryItemProduct = () => {
  return(
    <CategoryItemProductContainer>
      <div className="oneday-sale">
        <label>1DAY</label>
        <label>SALE</label>
      </div>
      <article>
        <img
          className='product-img'
          src="https://image.ohou.se/i/bucketplace-v2-development/uploads/deals/166935874331363376.jpg?gif=1&w=360&h=360&c=c&q=0.8&webp=1" 
          alt="" 
        />
        <CategoryProductContent>
          <label className='product-brand-name margin5'>브랜드명</label>
          <h6 className='product-name margin5'>
            제품명제품명제품명제품명제품명제품명제품명
          </h6>
          <span className='margin5'>
            <label className='product-discount-rate'>42%</label>
            <label className='product-price'>27,900 외</label>
          </span>
          <span className='margin5'>
            <StarIcon 
              width={icons.star.width}
              height={icons.star.height}
              color={icons.star.filledColor}
            />
            <label className='product-star'>4.8</label>
            <label className='product-review-num'>리뷰 1,010</label>
          </span>
        </CategoryProductContent>
      </article>
    </CategoryItemProductContainer>
  );
}

const CategoryItemProductContainer = styled.article`
  width: 268px;
  height: 441px;
  border-radius: 5px;
  background-color: #ffeeee;
  overflow: hidden;

  .margin5 {
    margin-bottom: 5px;
  }

  .oneday-sale {
    width: 70px;
    height: 70px;
    position: absolute;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #EF4A7A;
    label {
      font-size: 20px;
      color: #ffff;
    }
  }

  article {
    .product-img {
      width: 268px;
      height: 268px;
      border-radius: 5px;
      border: 1px solid #EF4A7A;
      object-fit: cover;
    }
  }
`;

const CategoryProductContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  .product-brand-name {
    color: var(--brand-name-color-gray);
    font-size: 10px;
  }
  .product-name {
    color: var();
  }
  span:first-of-type {
    .product-discount-rate {
      color: var(--main-color-skyblue);
      font-size: 17px;
      font-weight: 700;
      margin-right: 5px;
    }
    .product-price {
      font-size: 17px;
      font-weight: 700;
    }
  }
  span:nth-of-type(2) {
    font-size: 14px;
    font-weight: 600;
    .product-star {
      color: var(--main-color-skyblue);
      margin-right: 5px;
    }
    .product-review-num {
      color: var(--review-color-gray);
    }
  }
`;