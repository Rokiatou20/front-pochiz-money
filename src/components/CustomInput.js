import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { GOLD } from '../utils/Constants';

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputLabel = styled.label`
  margin-bottom: 2px;
`;

const InputField = styled.input`
  padding: 5px;
  border-radius: 6px;
  border: 2px solid ${GOLD};
  width: 100%;
`;

const CustomInput = ({ type, label, placeholder, value, onChange }) => {
  return (
    <InputWrapper>
      <InputLabel className="font-medium">{label}</InputLabel>
      <InputField type={type} value={value} placeholder={placeholder} onChange={onChange} required/>
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
