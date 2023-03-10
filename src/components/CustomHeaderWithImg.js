import React from 'react'
import { GOLD, MAIN_CARD_HEIGHT } from '../utils/Constants'
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledCard = styled.div`
  display: flex;
  background: ${props => props.background};
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${MAIN_CARD_HEIGHT/3.5}px;
  border-radius: 25px 25px ;
  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.2);

  img{
    width: 50%;
    height: 90%;
    box-shadow: '5px 5px 5px 5px rgba(0, 0, 0, 0.2)';
  }
  
  @media only screen and (max-width: 480px) {
    border-radius: 10px;
    box-shadow: 0px;
  }
`;

const CustomHeaderWithImg = ({image, background}) => {
  return (
    <StyledCard background={background}>
      <img src={image} alt='Sign-up' /> 
    </StyledCard>
  )
}

CustomHeaderWithImg.propTypes = {
  image: PropTypes.string,
  background: PropTypes.string
};

CustomHeaderWithImg.defaultProps = {
  image: '',
  background: GOLD
};
export default CustomHeaderWithImg