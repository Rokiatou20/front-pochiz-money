import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { GOLD } from '../utils/Constants';

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputLabel = styled.label`
  margin-bottom: 5px;
  font-weight: bold
`;

const InputField = styled.input`
  padding: 8px;
  border-radius: 10px;
  border: 4px solid ${GOLD};
  width: 100%;
`;

const CustomInput = ({ type, label, placeholder }) => {
  return (
    <InputWrapper>
      <InputLabel>{label}</InputLabel>
      <InputField type={type} placeholder={placeholder} required/>
    </InputWrapper>
  );
};

CustomInput.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

CustomInput.defaultProps = {
  type: 'text',
  label: 'Input Label',
  value: '',
  placeholder: '',
  onChange: () => {},
};

export default CustomInput;
