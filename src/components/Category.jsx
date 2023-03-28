import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { ThemeContext } from '../utils/context';
import { icons, StarIcon } from './Icons';

export function CategoryItem({imgUrl, children}) {
  const { isDark } = useContext(ThemeContext);
  let color = isDark && "#fff";

  return (
    <Link to={"#"}>
      <CategoryWrap>
        <img
          className='category-img'
          src={`${imgUrl}`}
          alt={`${children}`}
        />
        <label
          style={{
            color: color,
          }}
        >
          {children}
        </label>
      </CategoryWrap>
    </Link>
  )
}

export const productCategory = [
  {
    name: "가구",
    imgUrl: "https://image.ohou.se/i/bucketplace-v2-development/uploads/category/store_home_categories/165698403420736265.png?gif=1&w=144&h=144&c=c&webp=1",
  },
  {
    name: "가전",
    imgUrl: "https://image.ohou.se/i/bucketplace-v2-development/uploads/category/store_home_categories/166072985530266073.png?gif=1&w=144&h=144&c=c&webp=1",
  },
  {
    name: "주방용품",
    imgUrl: "https://image.ohou.se/i/bucketplace-v2-development/uploads/category/store_home_categories/165443714334272236.png?gif=1&w=144&h=144&c=c&webp=1",
  },
  {
    name: "생활용품",
    imgUrl: "https://image.ohou.se/i/bucketplace-v2-development/uploads/category/store_home_categories/165519431107541334.png?gif=1&w=144&h=144&c=c&webp=1",
  },
];

const CategoryWrap = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
  .category-img {
    width: 80px;
    height: 80px;
    margin-bottom: 10px;
  }
  label {
    font-weight: 600;
  }
`;

export const CategoryItemProduct = (props) => {
  const {oneSale, hotitemId, title, brandname, discountrate, price, img} = props;
  const onErrorImg = (e) => {
    e.target.src = `${process.env.PUBLIC_URL}/default-img.jpg`;
  }
  const OnedaySaleIcon = () => {
    return (
      <OnedaySale>
        <label>1DAY</label>
        <label>SALE</label>
      </OnedaySale>
    );
  }

  return(
    <CategoryItemProductContainer>
      { oneSale && <OnedaySaleIcon/> }
      <CategoryProductContent>
        <div className='product-img-wrap'>
          <img
            className='product-img'
            src={`${img}`}
            alt={title}
            onError={onErrorImg}
          />
        </div>
        <div className='product-content-wrap'>
          <label className='product-brand-name margin5'>
            {brandname}
          </label>
          <h6 className='product-name margin5'>
            {title}
          </h6>
          <span className='margin5'>
            <label className='product-discount-rate'>
              {discountrate}%
            </label>
            <label className='product-price'>
              {price} 외
            </label>
          </span>
          <span className='margin5'>
            <StarIcon 
              width={icons.star.width}
              height={icons.star.height}
              color={icons.star.filledColor}
            />
            <label className='product-star'>4.8</label>
            <label className='product-review-num'>
              리뷰 1,020
            </label>
          </span>
        </div>
      </CategoryProductContent>
    </CategoryItemProductContainer>
  );
}

const OnedaySale = styled.div`
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
`;

const CategoryItemProductContainer = styled.article`
  width: 268px;
  height: 441px;
  border-radius: 5px;
  overflow: hidden;
  border: 1px solid pink;

  .margin5 {
    margin-bottom: 5px;
  }
`;

const CategoryProductContent = styled.div`
  display: flex;
  flex-direction: column;

  .product-img-wrap {
    overflow: hidden;
    width: 268px;
    height: 268px;
    .product-img {
      width: 268px;
      height: 268px;
      border-radius: 5px;
      object-fit: cover;
      transition: all 0.2s linear;
      :hover {
        transform: scale(1.15);
      }
    }
  }

  .product-content-wrap {
    padding: 10px;
    display: flex;
    flex-direction: column;
    .product-brand-name {
      color: var(--brand-name-color-gray);
      font-size: 10px;
    }
    .product-name {
      color: var(--review-color-gray);
    }
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