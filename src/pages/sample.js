import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import { MAIN_CARD_HEIGHT, MAIN_CARD_WIDTH } from '../utils/Constants';
import SignUpInputContainer from '../components/SignUpInputContainer';
import CustomHeaderWithImg from '../components/CustomHeaderWithImg';
import signUpImg from '../images/sign-up-image.png';

const SignUpFirst = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ nom: '', prenoms: '', dateNaissance: '', tel: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSignUpNext = () => {
    navigate('/sign-up/next');
  };

  return (
    <div className='self-center'>
      <Card width={MAIN_CARD_WIDTH} height={MAIN_CARD_HEIGHT} background='white' radius={true} shadow={true} centerY={true}>
        <CustomHeaderWithImg image={signUpImg} />
        <SignUpInputContainer formData={formData} onInputChange={handleInputChange} onNext={handleSignUpNext} />
      </Card>
    </div>
  );
};

//******************************************************************************************* */


import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { GOLD } from '../utils/Constants';

const StyledCard = styled.div`
  display: flex;
  background: ${(props) => props.background};
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${(props) => props.height}px;
  border-radius: 25px 25px;
  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.2);

  img {
    width: 50%;
    height: 90%;
    box-shadow: '5px 5px 5px 5px rgba(0, 0, 0, 0.2)';
  }

  @media only screen and (max-width: 480px) {
    border-radius: 10px;
    box-shadow: 0px;
  }
`;

const CustomHeaderWithImg = ({ image, background }) => {
  return (
    <StyledCard background={background} height={120}>
      <img src={image} alt='Sign-up' />
    </StyledCard>
  );
};

CustomHeaderWithImg.propTypes = {
  image: PropTypes.string,
  background: PropTypes.string,
};

CustomHeaderWithImg.defaultProps = {
  image: '',
  background: GOLD,
};


/*************************************************************************** */

import React from 'react';
import CustomInput from './CustomInput';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

const SignUpInputContainer = ({ formData,

/****************************************** */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import CustomInput from '../components/CustomInput';
import CustomHeaderWithImg from '../components/CustomHeaderWithImg';
import SignUpInputContainer from '../components/SignUpInputContainer';
import signUpImg from '../images/sign-up-image.png';
import styled from 'styled-components';
import { GOLD, MAIN_CARD_HEIGHT, MAIN_CARD_WIDTH } from '../utils/Constants';

const StyledForm = styled.form`
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

const StyledError = styled.p`
  color: red;
  margin-bottom: 10px;
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
            className="bg-primary font-bold py-3 px-8 rounded-lg drop-shadow-xl text-white"
          >
            Suivant
          </button>
        </StyledForm>
      </Card>
    </div>
  );
};

export default SignUpFirst;









