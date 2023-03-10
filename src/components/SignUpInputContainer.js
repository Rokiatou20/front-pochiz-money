import React from 'react'
import CustomInput from './CustomInput'
import styled from 'styled-components';

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

  return (
    <FormContainer>
      <div>
        <CustomInput type='text' label='Nom' placeholder='OUATTARA' />
        <CustomInput type='text' label='Prénom(s)' placeholder='Rokiatou' />
        <CustomInput type='date' label='Date de naissance' placeholder='OUATTARA' />
        <CustomInput type='tel' label='Numéro de téléphone' placeholder='01 02 03 04 05' />
      </div>
      <button 
        type='submit'
        onClick={onNext}
        className="bg-primary font-bold py-3 px-8 rounded-lg drop-shadow-xl text-white"
      >
        Suivant
      </button>

    </FormContainer>
  )
}

export default SignUpInputContainer
