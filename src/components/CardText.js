import React from 'react'
import styled from 'styled-components'

const StyledText = styled.p`
  text-align: center;
  width: 100%;
  margin: 40px 0 20px 0;
`;

const CardText = ({children}) => {
  return (
    <StyledText>
      {children}
    </StyledText>
  )
}

export default CardText