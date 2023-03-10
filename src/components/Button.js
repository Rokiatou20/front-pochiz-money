import React from 'react';
import styled from 'styled-components';
import { GOLD } from '../utils/Constants';

const StyledButton = styled.button`
  border-radius: 10 px;
  padding: 10px 40px;
  background-color: ${GOLD};
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border-radius: 10px;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
  
  
  &:hover {
  }
`;

const SubmitButton = ({ value }) => {
    return (
      <StyledButton type='submit'>{value}</StyledButton>
    );
};

export default SubmitButton;
