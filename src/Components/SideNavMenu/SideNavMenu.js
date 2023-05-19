import React,{ useState} from 'react'
import { SideNavMenuConfig_FCO, SideNavMenuConfig_BM } from './SideNavMenuConfig';
import SideMenuItem from './SideMenuItem/SideMenuItem';

const SideNavMenu = (props) => {
    console.log(props)

   const { user, handleLogoutPopup } = props;

   const menu = user.name === 'FCO' ? SideNavMenuConfig_FCO : SideNavMenuConfig_BM;
  
  return (
    <div className="navigation-logout-wrap">
        <div className="navigation-wrap">
        <ul className='menu-list'>
            {
                menu.map((sideNaveItem) => (
                    <SideMenuItem data={sideNaveItem} />
                ))
            }
        </ul>
        </div>
        <div className="logout-wrap">
            <a data-toggle="modal"  className="logout" onClick={() => {handleLogoutPopup()}}>Logout</a>
        </div>
        <p className="version">Version 1.0.0</p>
      
    </div>
  )
}

export default SideNavMenu