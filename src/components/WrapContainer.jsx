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
`;

const Container = styled.div`
  width: 1135px;
  margin: auto;
`;

export default WrapContainer