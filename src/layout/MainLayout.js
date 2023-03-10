import React from 'react'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <div className='flex-col flex pt-5' >
        <Outlet />
    </div>
  )
}

export default MainLayout