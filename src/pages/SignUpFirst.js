import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import CustomInput from '../components/CustomInput';
import CustomHeaderWithImg from '../components/CustomHeaderWithImg';
import signUpImg from '../images/sign-up-image.png';
import styled from 'styled-components';
import { MAIN_CARD_HEIGHT, MAIN_CARD_WIDTH } from '../utils/Constants';

const StyledForm = styled.form`
  display: flex;
  gap: 2%;
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
    margin-bottom: 8px;
    padding: 0 10px;
  }

  button {
    color: white;
  }
`;

const StyledError = styled.p`
  color: red;
`;



const SignUpFirst = () => {
  const navigate = useNavigate();

  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [dob, setDob] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignUpNext = (event) => {
    event.preventDefault();
    console.log(`Nom : ${lastName}`);
    if (lastName === '' || firstName === '' || dob === '' || phoneNumber === '') {
      setErrorMessage('Veuillez remplir tous les champs.');
    } else if (phoneNumber.length !== 10) {
      setErrorMessage('Le numéro de téléphone doit contenir 10 chiffres.');
    } else {
      navigate('/sign-up/next');
    }
  };

  return (
    <div className="self-center">
      <Card
        width={MAIN_CARD_WIDTH}
        height={MAIN_CARD_HEIGHT}
        background="white"
        radius={true}
        shadow={true}
        centerY={true}
      >
        <CustomHeaderWithImg image={signUpImg} />
        <StyledForm>
          {errorMessage && <StyledError>{errorMessage}</StyledError>}
          <div>
            <CustomInput
              type="text"
              label="Nom"
              placeholder="OUATTARA"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <CustomInput
              type="text"
              label="Prénom(s)"
              placeholder="Rokiatou"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <CustomInput
              type="date"
              label="Date de naissance"
              placeholder="OUATTARA"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
            <CustomInput
              type="tel"
              label="Numéro de téléphone"
              placeholder="01 02 03 04 05"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <button
            type="submit"
            onClick={handleSignUpNext}
            className="bg-primary font-bold py-2 px-7 rounded-lg drop-shadow-xl text-white"
          >
            Suivant
          </button>
        </StyledForm>
      </Card>
    </div>
  );
};

export default SignUpFirst;
