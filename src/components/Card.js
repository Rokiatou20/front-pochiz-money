import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledCard = styled.div`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  background: ${props => props.background};
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.2);
  border-radius: 25px;
  display: flex;
  justify-content: ${props => props.centerX ? 'center' : ''};
  align-items: ${props => props.centerY ? 'center' : ''};
  flex-direction: column;

  /* Media queries for responsive design */
  @media only screen and (max-width: 480px) {
    width: 100vw;
    height: 100vh;
    border-radius: 0px;
    box-shadow: 0px;
  }
`;

const Card = ({ width, height, background, shadow, radius, centerX, centerY, children }) => {
  return (
    <StyledCard width={width} height={height} background={background} shadow={shadow} radius={radius} centerX={centerX} centerY={centerY}>
      {children}
    </StyledCard>
  );
};

Card.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  background: PropTypes.string,
  shadow: PropTypes.bool,
  radius: PropTypes.bool,
  centerX: PropTypes.bool,
  centerY: PropTypes.bool,
  children: PropTypes.node,
};

Card.defaultProps = {
  width: '200',
  height: '200',
  background: 'white',
  shadow: false,
  radius: false,
  centerX: false,
  centerY: false
};

export default Card;
