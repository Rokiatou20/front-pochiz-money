import React from 'react'
import Card from '../components/Card'
import styled from 'styled-components';
import {MAIN_CARD_HEIGHT, MAIN_CARD_WIDTH} from '../utils/Constants'
import logo from '../images/logo.png'

const StyledImg= styled.img`
  width: '50px';
  height: '50px';
`;

const SplashScreen = () => {
  return (
    <div>
      <Card
        width={MAIN_CARD_WIDTH}
        height={MAIN_CARD_HEIGHT}
        background='black'
        radius={true}
        shadow={true}
        centerX={true}
        centerY={true}
      >
        <StyledImg src={logo} /> 
      </Card>
    </div>
  )
}

export default SplashScreen