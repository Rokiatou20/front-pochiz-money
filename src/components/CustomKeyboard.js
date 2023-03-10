import React from 'react'
import styled from 'styled-components'
import FeatherIcon from 'feather-icons-react';
import PropTypes from 'prop-types';
import { GOLD } from '../utils/Constants';
import PasswordCircleContainer from './PasswordCircleContainer';

const numbers = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 20px 0 20px 0;

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

const CustomKeyboard = ({color, background}) => {
  return (
    <>
      <PasswordCircleContainer />
      <StyledCard color={color} background={background}>
        {numbers.map((row, index) => (
          <div key={index} className="numpad">
            {row.map((number) => (
              <div key={number} className="numpadNumber">
                {number}
              </div>
            ))}
          </div>
        ))}
        <div className="numpad">
          <div className="numpadNumber" style={{background: 'white', boxShadow: 'none'}}></div>
          <div className="numpadNumber">
            0
          </div>
          <div className="numpadNumber">
            <FeatherIcon icon='delete'/>
          </div>
        </div>
      </StyledCard>
    </>
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
