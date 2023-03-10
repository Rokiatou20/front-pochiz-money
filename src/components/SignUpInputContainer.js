import React from 'react'
import { useNavigate } from 'react-router-dom';
import CustomInput from './CustomInput'
import styled from 'styled-components';
import { GOLD } from '../utils/Constants';

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  
  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 20px;
    padding: 0 10px;
  }
`;

const SignUpInputContainer = ({onNext}) => {

  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/sign-up/next');
  };

  return (
    <FormContainer>
      <div>
        <CustomInput type='text' label='Nom' placeholder='OUATTARA' onChange />
        <CustomInput type='text' label='Prénom(s)' placeholder='Rokiatou' onChange />
        <CustomInput type='date' label='Date de naissance' placeholder='OUATTARA' onChange />
        <CustomInput type='tel' label='Numéro de téléphone' placeholder='01 02 03 04 05' onChange />
      </div>
      <button 
        type='submit'
        onClick={onNext}
        className={`bg-[${GOLD}] hover:bg-yellow-500 text-white font-bold py-3 px-8 rounded-lg drop-shadow-xl`}
      >
        Suivant
      </button>
    </FormContainer>
  )
}

export default SignUpInputContainer
