import React,{ useState} from 'react'
import { Menu, GeneralMenu } from './SideNavMenuConfig';
import SideMenuItem from './SideMenuItem/SideMenuItem';
import { useSelector } from 'react-redux';

const SideNavMenu = (props) => {
   const { handleLogoutPopup, closeSideNav } = props;
   const user = useSelector((state) => state.user.value);
   const roles = user?.roles?.split('|');
   const updateRoles = roles?.map(role => Menu.find(m => m.id === role)) || [];
   const MENU_LIST = [...updateRoles, ... GeneralMenu];
  return (
    <div className="navigation-logout-wrap">
        <div className="navigation-wrap">
        <ul className='menu-list'>
            {
                MENU_LIST.map((sideNaveItem) => (
                    <SideMenuItem data={sideNaveItem} closeSideNav = { closeSideNav } key={sideNaveItem.id} />
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