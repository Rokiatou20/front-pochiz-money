import React from 'react'
import Card from '../components/Card'
import {MAIN_CARD_HEIGHT, MAIN_CARD_WIDTH, GOLD} from '../utils/Constants'
import CustomKeyboard from '../components/CustomKeyboard'
import CustomHeaderWithImg from '../components/CustomHeaderWithImg';
import logo from '../images/logo.png'
import CardText from '../components/CardText'

const SignIn = () => {
  return (
    <div className='self-center'>
      <Card
        width={MAIN_CARD_WIDTH}
        height={MAIN_CARD_HEIGHT}
        background='white'
        radius={true}
        shadow={true}
        centerY={true}
      >
        <CustomHeaderWithImg image={logo} background='black'/>
        <CardText>Mot de passe oublié ?</CardText>
        <CustomKeyboard color={GOLD} background='black'/>
      </Card>
    </div>
  )
}

export default SignIn