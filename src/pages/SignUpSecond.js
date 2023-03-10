import React from 'react'
import Card from '../components/Card'
import styled from 'styled-components'
import {MAIN_CARD_HEIGHT, MAIN_CARD_WIDTH} from '../utils/Constants'
import CustomKeyboard from '../components/CustomKeyboard'
import SubmitButton from '../components/Button';
import CustomHeaderWithImg from '../components/CustomHeaderWithImg';
import signUpImg from '../images/sign-up-image.png'
import CardText from '../components/CardText'

const SignUpSecond = () => {
  return (
    <Card
      width={MAIN_CARD_WIDTH}
      height={MAIN_CARD_HEIGHT}
      background='white'
      radius={true}
      shadow={true}
      centerY={true}
    >
      <CustomHeaderWithImg image={signUpImg}/>
      <CardText>Veuillez entrez votre mot de passe.</CardText>
      <CustomKeyboard />
    </Card>
  )
}

export default SignUpSecond