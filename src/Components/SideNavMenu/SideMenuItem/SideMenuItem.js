import React , {useState} from 'react'
import newapplication from '../../../html/assets/images/new-application-ic.svg';
import cbapproval from '../../../html/assets/images/cb-approval-ic.svg';

const SideMenuItem = (props) => {
  const { name , image, hasSubMenu, subMenu} =  props.data;
  const [isVisible, setIsVisible] = useState(false);
  const toggleSUbMenuVisibility = () => {
    setIsVisible(!isVisible);
  };
  const handleClick = () => {
    if(hasSubMenu) {
        toggleSUbMenuVisibility();
    }
  }
  return (
    <li onClick={()=>{handleClick()}} key={name}>
        <a >
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
                            <li><a>{submenu.name}</a></li>
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