import React from 'react'
import Card from '../components/Card'
import {MAIN_CARD_HEIGHT, MAIN_CARD_WIDTH} from '../utils/Constants'
import SignUpInputContainer from '../components/SignUpInputContainer';
import CustomHeaderWithImg from '../components/CustomHeaderWithImg';
import signUpImg from '../images/sign-up-image.png'

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
      <CustomHeaderWithImg image={signUpImg}/>
      <SignUpInputContainer />
    </Card>
  )
}

export default SignUpFirst