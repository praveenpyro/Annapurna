import React from 'react'

import userpic from '../../html/assets/images/user-pic.png';
import closesidebar from '../../html/assets/images/close-sidebar.svg';
const UserInfo = ({closeSideNav}) => {
  return (
    <div>
      <div className="user-info">
          <figure className='dash-figure'>
              <img src={userpic}alt="User Pic" />
          </figure>
          <div className="info-user info-user-width ">
              <h4 className="name">Vivek Sharma</h4>
              <p className="designation">Field Credit Officer</p>
          </div>
      </div>
      <a className="close-sidebar close-sidebar-dash" onClick={() => {closeSideNav()}}><img src={closesidebar} alt="Close Sidebar" /></a>
    </div>
  )
}

export default UserInfo