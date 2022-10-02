import React from 'react'
import SideBar from '../components/layout/SideBar'
import {Outlet} from "react-router-dom";

const MainLayout = ({children}) => {
  return (
    <div>
        <SideBar>
          <Outlet/>
        </SideBar>
    </div>
  )
}

export default MainLayout