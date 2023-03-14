import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card'
import styled from 'styled-components';
import {MAIN_CARD_HEIGHT, MAIN_CARD_WIDTH} from '../utils/Constants'
import logo from '../images/logo.png'

const StyledImg= styled.img`
  width: 70%;
  height: 35%;
`;

const SplashScreen = () => {
  
  const navigate = useNavigate()
  
  useEffect (() => {
    setTimeout(() => {
      navigate("/sign-in")
    },3000)
  })

  return (
    <div className='self-center' >
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