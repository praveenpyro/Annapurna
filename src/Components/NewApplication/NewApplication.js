import React from 'react';
import './NewApplication.css';
import { Outlet } from 'react-router-dom';

function NewApplication() {
  return (
    <div className="newapp-content">
        <Outlet/>
    </div>
  )
}

export default NewApplication