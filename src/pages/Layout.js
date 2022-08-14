import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

const Layout = () => {
  return (
      <div className="font-poppins antialiased h-full w-screen flex flex-row">
        <div className="sidebar w-30">
          <Sidebar/>
        </div>

        <div className="main-outlet w-70">
          <Outlet/>
        </div>
      </div>
  )
}

export default Layout
