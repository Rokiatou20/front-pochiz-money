import React from 'react'
import { GOLD, MAIN_CARD_HEIGHT } from '../utils/Constants'
import signUpImg from '../images/sign-up-image.png'
import styled from 'styled-components';

const StyledCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${MAIN_CARD_HEIGHT/3.5}px;
  background: ${GOLD};
  border-radius: 25px 25px 0 0;

  img{
    width: 183px;
    height: 175px;
    box-shadow: '5px 5px 5px 5px rgba(0, 0, 0, 0.2)';
  }
`;

const SignUpHeader = () => {
  return (
    <StyledCard>
      <img src={signUpImg} alt='Sign-up' /> 
    </StyledCard>
  )
}

export default SignUpHeader