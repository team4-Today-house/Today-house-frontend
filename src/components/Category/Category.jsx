import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { ThemeContext } from '../../utils/context';
import { icons, StarIcon } from '../Icons';
import { CategoryItemProductContainer, CategoryProductContent, OnedaySale } from './StyledCategory';

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
        <label style={{color: color}}>
          {children}
        </label>
      </CategoryWrap>
    </Link>
  )
}

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

export const CategoryItemProduct = ({item, oneSale}) => {
  const {title, brandname, discountrate, price, img} = item;
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
          <h6 className='product-title margin5'>
            {title}
          </h6>
          <span className='margin5'>
            <label className='product-discount-rate'>
              {discountrate}
            </label>
            <label className='product-price'>
              {price}
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
