import React from 'react'
import styled from 'styled-components'
import FeatherIcon from 'feather-icons-react';
import { GOLD } from '../utils/Constants';
import PasswordCircleContainer from './PasswordCircleContainer';

const numbers = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;

  .numpad{
    display: flex;
    justify-content: center;
    margin: 5px;
  }

  .numpadNumber{
    background: ${GOLD};
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: white;
    padding: 11px;
    border-radius: 10px;
    margin: 0 8px 8px 8px;
    width: 20%;
    font-size: 1.5rem;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
  }
`;

const CustomKeyboard = () => {
  return (
    <>
      <PasswordCircleContainer />
      <StyledCard>
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

export default CustomKeyboard
