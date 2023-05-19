import React, { useEffect, useState } from 'react'
import { slide as Menu } from 'react-burger-menu'
import Barchart from '../../Charts/Barchart';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../reducers/user';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css'
import '../../html/assets/css/page.css';
import '../../html/assets/css/global.css'
import hamburger from '../../html/assets/images/Hamburger.svg';
import Header from '../Header/Header';
import UserInfo from '../UserInfo/UserInfo';
import SideNavMenu from '../SideNavMenu/SideNavMenu';
import DashboardMain from '../DashboardMain/DashboardMain';
import LogoutModal from '../LogoutModal/LogoutModal';

const Dashboard = () => {
  const user = useSelector((state) => state.user.value);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [isOpen, setOpen] = useState(false)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleIsOpen = () => {
    setOpen(!isOpen)
  }

  const closeSideNav = () => {
    setOpen(false)
  };
  const handleLogoutModal = () => {
    setShowLogoutModal(false);
  }

  const handleLogoutPopup = () => {
    closeSideNav();
    setShowLogoutModal(true);
  }

  const handleLogout = () => {
    dispatch(logout());
    localStorage.setItem("login",false);
    navigate("/login");
  }
 
  return (
    <>
      <div >
        <Header/>
        <DashboardMain  user={user} />
      </div>
      <Menu customBurgerIcon={ <img src={hamburger} /> } isOpen={isOpen}  onOpen={handleIsOpen} onClose={handleIsOpen} >
        <UserInfo closeSideNav={closeSideNav}/>
        <SideNavMenu user={user} closeSideNav={closeSideNav} handleLogoutPopup={handleLogoutPopup}/>
      </Menu>
      { showLogoutModal && <LogoutModal handleLogoutModal = {handleLogoutModal} handleLogout={handleLogout}/>}
    </>
    
  )
}

export default Dashboard