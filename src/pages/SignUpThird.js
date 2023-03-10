import React from 'react'
import Card from '../components/Card'
import styled from 'styled-components'
import {MAIN_CARD_HEIGHT, MAIN_CARD_WIDTH} from '../utils/Constants'
import SignUpHeader from '../components/SignUpHeader';
import CustomKeyboard from '../components/CustomKeyboard'
import SubmitButton from '../components/Button';

const StyledText = styled.p`
  text-align: center;
  width: 100%;
  margin: 15px 15px 0 0;
`;

const SignUpThird = () => {
  return (
    <Card
      width={MAIN_CARD_WIDTH}
      height={MAIN_CARD_HEIGHT}
      background='white'
      radius={true}
      shadow={true}
      centerY={true}
    >
      <SignUpHeader />
      <StyledText>Veuillez <b>confirmer</b> votre mot de passe.</StyledText>
      <CustomKeyboard />
      <SubmitButton value="S'inscrire" />
    </Card>
  )
}

export default SignUpThird