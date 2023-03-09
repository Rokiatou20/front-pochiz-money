import React from 'react'
import styled from 'styled-components'
import FeatherIcon from 'feather-icons-react';
import { GOLD } from '../utils/Constants';

const numbers = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .numpad{
    display: flex;
    justify-content: center;
    margin: 5px;

  }

  .numpadNumber{
    background: black;
    text-align: center;
    font-weight: bold;
    color: ${GOLD};
    padding: 13px;
    border-radius: 10px;
    margin: 0 8px 8px 8px;
    width: 20%;
    font-size: 1.5rem;
  }
`;

const CustomKeyboard = () => {
  return (
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
          <div className="numpadNumber" style={{background: 'white'}}></div>
          <div className="numpadNumber">
            0
          </div>
          <div className="numpadNumber">
            <FeatherIcon icon='delete'/>
          </div>
        </div>
    </StyledCard>
  
  )
}

export default CustomKeyboard
