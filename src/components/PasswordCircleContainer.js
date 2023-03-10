import React from 'react'

const nbDigitCode = [0, 1, 2, 3, 4, 5]

const PasswordCircleContainer = ({code}) => {
  return (
    <div className='h-10 w-full mb-5 flex items-center justify-center gap-x-5'>
      {nbDigitCode.map((index) => (
        <div
          key={index}
          className={`h-8 w-8 rounded-full border-4 border-primary ${
            index < code.length ? `bg-primary` : ''
          }`}
        ></div>
      ))}
    </div>
  )
}

export default PasswordCircleContainer
