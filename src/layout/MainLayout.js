import React from 'react'
import { Outlet } from 'react-router-dom'
import '../App.css'

function MainLayout() {
  return (
    <div className='App flex-col flex py-3'>
        <Outlet />
    </div>
  )
}

export default MainLayout