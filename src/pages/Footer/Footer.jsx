import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <FooterWrap>
      <p>
        ©  <a href='https://www.bucketplace.com/'>bucketplace, Co., Ltd..</a> All Rights Reserved
      </p>
    </FooterWrap>
  )
}

const FooterWrap = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  color: var(--footer-text-color);
  font-size: 10px;
  p {
    margin-bottom: 30px;
    a {
      color: var(--footer-text-color);
      :hover {
        text-decoration: underline;
      }
    }
  }
`;

export default Footer