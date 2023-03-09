import React from 'react';
import styled from 'styled-components';
import { GOLD } from '../utils/Constants';

const StyledButton = styled.button`
  border-radius: 10 px;
  padding: 10px 40px;
  background-color: ${GOLD};
  color: white;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border-radius: 25px;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.2);
  
  
  &:hover {
    background-color: ${GOLD};
  }
`;

const SubmitButton = ({ value }) => {
    return (
        <StyledButton type='submit'>{value}</StyledButton>
    );
};

export default SubmitButton;
