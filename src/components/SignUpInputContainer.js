import React from 'react'
import CustomInput from './CustomInput'
import styled from 'styled-components';
import SubmitButton from '../components/Button';

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

const SignUpInputContainer = () => {
  return (
    <FormContainer>
      <div>
        <CustomInput type='text' label='Nom' placeholder='OUATTARA' onChange />
        <CustomInput type='text' label='Prénom(s)' placeholder='Rokiatou' onChange />
        <CustomInput type='date' label='Date de naissance' placeholder='OUATTARA' onChange />
        <CustomInput type='tel' label='Numéro de téléphone' placeholder='01 02 03 04 05' onChange />
      </div>
      <SubmitButton value='Suivant' />
    </FormContainer>
    
  )
}

export default SignUpInputContainer
