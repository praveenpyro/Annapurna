import React, {useState} from 'react'
import infoic from '../../html/assets/images/info-ic.svg';
import notificationic from '../../html/assets/images/notification-icon.svg';
import profileicon from '../../html/assets/images/profile-ic.svg';
import arrowdown from '../../html/assets/images/arrow-down.svg';
import logo from '../../html/assets/images/Annapurna-logo.svg';
 const Header = (props) => {
    const { user } = props;
    const [isInfoVisible, setIsInfoVisible] = useState(false);
    const [isProfileMenuVisible, setIsProfileMenuVisible] = useState(false);
    const handleInfoClick = () => {
        setIsInfoVisible(!isInfoVisible);
    }
    const handleProfileMenuClick = () => {
        setIsProfileMenuVisible(!isProfileMenuVisible);
    }
  return (
    <div className="header">
    <div className="header-container">
        <div className="header-left-dash">
            <div className="brand">
                <a href="#"><img src={logo} alt="Annapurna Logo" /></a>
            </div>
        </div>
        <div className="header-right">
            <div className="right-inner">
                <ul>
                    <li>
                        <a className="open-info" onClick={()=>{handleInfoClick()}}>
                            <img src={infoic} alt="Info Icon" />
                        </a>
                        <ul className="info-dropdown" style={{ display: isInfoVisible ? 'block' : 'none' }}>
                            <li><a data-toggle="modal" data-target="#contactUsDialog">Contact Us</a></li>
                            <li><a data-toggle="modal" data-target="#restrictedDialog">Restricted</a></li>
                            <li><a href="help/faq.html">FAQs</a></li>
                            <li><a href="help/video.html">Videos</a></li>
                        </ul>
                    </li>
                    <li><a href="notification/notification.html"><img src={notificationic} alt="Notification Icon" /></a></li>

                </ul>
            </div>
            <div className="profile-wrap">
                <a  className="user-wrap" onClick={()=>{handleProfileMenuClick()}}>
                    <img src={profileicon} className="mr-10" alt="Profile Icon" />
                    <span>{user.empname}</span>
                    <img src={arrowdown} alt="Arrow Down Icon" />
                </a>
                <ul className="user-info-dropdown" style={{ display: isProfileMenuVisible ? 'block' : 'none' }}>
                    <li><a href="change-password.html">Change Password</a></li>
                    <li><a data-toggle="modal" data-target="#logOutDialog">Logout</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
  )
}

export default Header;
