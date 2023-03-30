import React from 'react'
import styled from 'styled-components'

function Loading() {
  return (
    <LoadingWrap>Loading</LoadingWrap>
  )
}

const LoadingWrap = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  background-color: #ffffff97;
`;

export const ProductSkeleton = () => {
  return (
    <SkeletonWrap>
      <div className="skeleton-item">
        <div className='skeleton-img-container'>
          <div className="skeleton-img" />
        </div>
        <div className="skeleton-info">
          <div className="skeleton-title" />
          <div className="skeleton-content" />
          <div className="skeleton-content" />
        </div>
      </div>
    </SkeletonWrap>
  );
};

export const MainShoppingImgSkeleton = styled.div`
  width: 200vw;
  height: 380px;
  position: absolute;
  background-color: var(--sceleton-color-gray);
`;

export const Skeletons = () => {
  return (
    <>
      <ProductSkeleton/>
      <ProductSkeleton/>
      <ProductSkeleton/>
      <ProductSkeleton/>
    </>
  )
}

const SkeletonWrap = styled.div`
  border-radius: 5px;
  overflow: hidden;
  width: 267px;
  height: 440px;

  * {
    margin-bottom: 20px;
  }

  .skeleton-img-container {
    width: 267px;
    height: 267px;
    border-radius: 5px;
    overflow: hidden;
    .skeleton-img {
      width: 267px;
      height: 267px;
      background-color: var(--sceleton-color-gray);
    }
  }

  .skeleton-info {
    .skeleton-title {
      width: 150px;
      height: 15px;
      background-color: var(--sceleton-color-gray);
    }
    .skeleton-content {
      width: 100%;
      height: 15px;
      background-color: var(--sceleton-color-gray);
    }
  }
`;

export default Loading