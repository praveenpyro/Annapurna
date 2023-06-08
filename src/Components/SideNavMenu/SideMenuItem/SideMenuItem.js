import React , {useState} from 'react'
import newapplication from '../../../html/assets/images/new-application-ic.svg';
import cbapproval from '../../../html/assets/images/cb-approval-ic.svg';
import {useNavigate} from 'react-router-dom';

const SideMenuItem = (props) => {
  const { closeSideNav } = props;
  const { id,  name , image, hasSubMenu, subMenu, navigation} =  props.data;
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const toggleSUbMenuVisibility = () => {
    setIsVisible(!isVisible);
  };
  const handleClick = () => {
    if(hasSubMenu) {
        toggleSUbMenuVisibility();
    } else {
      closeSideNav();
      if( navigation ) {
        navigate(navigation);
      }
      
    }
  }
  return (
    <li onClick={()=>{handleClick()}} key={name+'_'+id}>
        <a key={id+'_'+name}>
            <figure className='dash-figure'>
                <img src={image} alt="New Application Icon" />
            </figure>
            <span>{name}</span>
        </a>
        {
            hasSubMenu && (
                <ul className="sub-menu" style={{ display: isVisible ? 'block' : 'none' }}>
                    {
                        subMenu.map((submenu) => (
                            <li key={submenu.name}><a>{submenu.name}</a></li>
                        ))
                    }
                    {/* <li><a data-toggle="modal" data-target="#contactUsDialog">Contact Us</a></li>
                    <li><a data-toggle="modal" data-target="#restrictedDialog">Restricted</a></li>
                    <li><a href="help/faq.html">FAQs</a></li>
                    <li><a href="help/video.html">Videos</a></li> */}
                 </ul> 
            )
        }
    </li>
  )
}

export default SideMenuItem