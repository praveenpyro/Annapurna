import React from 'react'
import './LUC.css';
import { Outlet } from 'react-router-dom';

const LUC = () => {
  return (
    <div className="luccheck-content">
        <Outlet/>
    </div>
  )
}

export default LUC;