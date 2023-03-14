import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card'
import {MAIN_CARD_HEIGHT, MAIN_CARD_WIDTH} from '../utils/Constants'
import CustomKeyboard from '../components/CustomKeyboard'
import CustomHeaderWithImg from '../components/CustomHeaderWithImg';
import signUpImg from '../images/sign-up-image.png'
import PasswordCircleContainer from '../components/PasswordCircleContainer';

const SignUpSecond = () => {

  const [code, setCode] = useState([]);
  const navigate = useNavigate();

  const handleCodeChange = (newCode) => setCode(newCode);
  
  useEffect(() => {
    if (code.length === 6) { 
      navigate("/sign-up/end");
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
        <CustomHeaderWithImg image={signUpImg}/>
        <h1 className={`mt-4 font-regular text-[black]`} >Veuillez entrer votre mot de passe.</h1>
        <PasswordCircleContainer code={code} />
        <CustomKeyboard setCode={handleCodeChange} />
      </Card>
    </div>
  )
}

export default SignUpSecond