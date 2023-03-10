import React from 'react'
import styled from 'styled-components'
import { GOLD } from '../utils/Constants';

const nbDigitCode = [0, 1, 2, 3, 4, 5]

const CodeCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 9%;

  .circle{
    border: 3px solid ${GOLD};
    width: 6%;
    height: 36%;
    border-radius: 10px;
    margin: 0 15px;
  }
`;

const PasswordCircleContainer = () => {
  return (
    <CodeCard>
        {nbDigitCode.map((index) => (
            <div key={index} className="circle"></div>
        ))}
    </CodeCard>
  )
}

export default PasswordCircleContainer
