import React from 'react'
import Card from '../components/Card'
import {MAIN_CARD_HEIGHT, MAIN_CARD_WIDTH} from '../utils/Constants'
import SignUpHeader from '../components/SignUpHeader';
import SignUpInputContainer from '../components/SignUpInputContainer';

const SignUpFirst = () => {
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
      <SignUpInputContainer />
    </Card>
  )
}

export default SignUpFirst