import React from 'react'
import styled from 'styled-components'
import FeatherIcon from 'feather-icons-react';
import PropTypes from 'prop-types';
import { GOLD } from '../utils/Constants';

const numbers = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 10px 0 0 0;

  .numpad{
    display: flex;
    justify-content: center;
    margin: 5px;
  }

  .numpadNumber{
    background: ${props => props.background};
    color: ${props => props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    padding: 11px;
    border-radius: 10px;
    margin: 0 8px 8px 8px;
    width: 20%;
    font-size: 1.5rem;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
  }
`;

const CustomKeyboard = ({color, background, setCode}) => {

  const handleButtonClick = (value) => {
    if (value === 'clear') {
      setCode([]);
    } else if (value === 'backspace') {
      setCode((code) => code.slice(0, -1));
    } else if (value === 'submit') {
      console.log('Submission !')
    } else if (value === '0') {
      setCode((code) => [...code, ' ']);
    } else {
      setCode((code) => [...code, value]);
    }
  };

  return (
    <StyledCard color={color} background={background}>
      {numbers.map((row, index) => (
        <div key={index} className="numpad">
          {row.map((number) => (
            <div key={number} className="numpadNumber" onClick={() => handleButtonClick(number)}>
              {number}
            </div>
          ))}
        </div>
      ))}
      <div className="numpad">
        <div className="numpadNumber" style={{background: 'white', boxShadow: 'none'}}></div>
        <div className="numpadNumber" onClick={() => handleButtonClick(0)}>
          0
        </div>
        <div className="numpadNumber" onClick={() => handleButtonClick('backspace')}>
          <FeatherIcon icon='delete'/>
        </div>
      </div>
    </StyledCard>
  )
}

CustomKeyboard.propTypes = {
  color: PropTypes.string,
  background: PropTypes.string
};

CustomKeyboard.defaultProps = {
  color: 'white',
  background: GOLD
};

export default CustomKeyboard
