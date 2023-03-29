import styled from "styled-components";

export const OnedaySale = styled.div`
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

export const CategoryItemProductContainer = styled.article`
  width: 268px;
  height: 441px;
  border-radius: 5px;
  overflow: hidden;

  .margin5 {
    margin-bottom: 5px;
  }
`;

export const CategoryProductContent = styled.div`
  display: flex;
  flex-direction: column;
  
  label {
    line-height: 200%;
  }

  .product-img-wrap {
    width: 268px;
    height: 268px;
    border-radius: 5px;
    overflow: hidden;
    .product-img {
      width: 268px;
      height: 268px;
      border-radius: 5px;
      object-fit: cover;
      transition: all 0.1s linear;
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
    .product-title {
      color: var(--product-title-color-gray);
      :hover {
        color: var(--review-color-gray);
      }
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