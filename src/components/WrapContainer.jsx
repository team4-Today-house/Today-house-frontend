import styled from "styled-components";
import React from 'react'

function WrapContainer({children}) {
  return (
    <Wrap>
      <Container>
        {children}
      </Container>
    </Wrap>
  )
}

const Wrap = styled.div`
  width: 100vw;
  background-color: #558624;
`;

const Container = styled.div`
  width: 1135px;
  background-color: #ff80c0;
  margin: auto;
`;

export default WrapContainer