import React, { useState } from 'react'
import Card from '../components/Card'
import {MAIN_CARD_HEIGHT, MAIN_CARD_WIDTH} from '../utils/Constants'
import CustomKeyboard from '../components/CustomKeyboard'
import CustomHeaderWithImg from '../components/CustomHeaderWithImg';
import signUpImg from '../images/sign-up-image.png'
import PasswordCircleContainer from '../components/PasswordCircleContainer';

const SignUpThird = () => {

  const [code, setCode] = useState([]);
  
  const handleCodeChange = (newCode) => setCode(newCode);

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
        <CustomHeaderWithImg image={signUpImg}/>
        <h1 className={`mt-4 font-regular text-[black]`}>
          Veuillez 
          <span className={`font-bold`}> confirmer </span> 
          votre mot de passe.
        </h1>
        <PasswordCircleContainer code={code} />
        <CustomKeyboard setCode={handleCodeChange} />
      </Card>
    </div>
  )
}

export default SignUpThird