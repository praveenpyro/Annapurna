import React from 'react'

import closesidebar from '../../html/assets/images/close-sidebar.svg';
const USER_ROLES = { FCO : 'Feild Credit Officer'}
const UserInfo = (props) => {
  const {closeSideNav, user} =  props;
  console.log(user)
  return (
    <div>
      <div className="user-info">
          <figure className='dash-figure'>
              <img src={user.img}alt="User Pic" />
          </figure>
          <div className="info-user info-user-width ">
              <h4 className="name">{ user.empname }</h4>
              <p className="designation">{ USER_ROLES[user.userrole]} </p>
          </div>
      </div>
      <a className="close-sidebar close-sidebar-dash" onClick={() => {closeSideNav()}}><img src={closesidebar} alt="Close Sidebar" /></a>
    </div>
  )
}

export default UserInfo