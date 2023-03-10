import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card'
import {MAIN_CARD_HEIGHT, MAIN_CARD_WIDTH, GOLD} from '../utils/Constants'
import CustomKeyboard from '../components/CustomKeyboard'
import CustomHeaderWithImg from '../components/CustomHeaderWithImg';
import logo from '../images/logo.png'
import PasswordCircleContainer from '../components/PasswordCircleContainer';

const SignIn = () => {

  const [code, setCode] = useState([]);
  const navigate = useNavigate();

  const handleCodeChange = (newCode) => setCode(newCode);
  const handleSignUp = () => navigate("/sign-up");
  
  useEffect(() => {
    if (code.length === 6) {
      navigate("/");
    }
  }, [code, navigate]);
   

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
        <h1 className={`my-6 font-regular text-[black]`} >Veuillez entrer votre mot de passe.</h1>
        <PasswordCircleContainer code={code} />
        <CustomKeyboard color={GOLD} background='black' setCode={handleCodeChange} />
        <div className="flex flex-row justify-between items-center gap-4 mt-2">
          <h1 className={`font-medium text-primary cursor-pointer`}>Mot de passe oublié ?</h1>
          <h1 className={`font-medium text-primary cursor-pointer`} onClick={handleSignUp}>Créer un compte ?</h1>
        </div>

      </Card>
    </div>
  )
}

export default SignIn