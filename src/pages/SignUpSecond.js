import React from 'react'
import Card from '../components/Card'
import styled from 'styled-components'
import {MAIN_CARD_HEIGHT, MAIN_CARD_WIDTH} from '../utils/Constants'
import CustomKeyboard from '../components/CustomKeyboard'
import SubmitButton from '../components/Button';
import CustomHeaderWithImg from '../components/CustomHeaderWithImg';
import signUpImg from '../images/sign-up-image.png'

const StyledText = styled.p`
  text-align: center;
  width: 100%;
  margin: 15px 15px 0 0;
`;

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
      <StyledText>Veuillez entrez votre mot de passe.</StyledText>
      <CustomKeyboard />
      <SubmitButton value='Suivant' />
    </Card>
  )
}

export default SignUpSecond