import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom';
import ClientPicture from '../ClientPicture/ClientPicture';
import './OkycData.css';
import IDVerification from '../IDVerification/IDVerification';
import OkycProfileReview from '../OkycProfileReview/OkycProfileReview';
const OkycData = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(1);
  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };
  return (
    <div >
       <div className="breadcrumb-cover">
            <ul className="breadcrumb-wrap header-breadcrumb ">
                <li onClick={() => { navigate('/dashboard')}}><a>Home</a></li>
                <li><a onClick={() => navigate('/dashboard/newapplication/searchclient') }>Client Details</a></li>
                <li>Okyc Data</li>
            </ul>
        </div>
        <div className='okyc-data-page pb-40'>
          <div className='center-bg-white medium'>
              <div className='custom-tabs custom-tab-no-top-padding'>
                <button className={`tablinks ${activeTab === 1 ? 'active' : ''}`} data-tag="clientPicture"  onClick={() => handleTabClick(1)}>
                    Client Picture
                </button>
                <button className={`tablinks ${activeTab === 2 ? 'active' : ''}`} data-tag="idVerification" onClick={() => handleTabClick(2)}>
                    ID Verification
                </button>
                <button className={`tablinks ${activeTab === 3 ? 'active' : ''}`}  data-tag="OKYCProfileReview" onClick={() => handleTabClick(3)}>
                    OKYC Profile Review
                </button>
              </div>
              {  activeTab === 1 && 
              <div id="clientPicture" class="tabcontent">
                <ClientPicture/>
              </div>
              }
              { activeTab === 2 &&
              <div id="idVerification" class="tabcontent hide">
                <IDVerification/>
              </div>
              }
              { activeTab === 3 && 
              <div id="OKYCProfileReview" class="tabcontent hide">
                <OkycProfileReview/>
              </div>
              }
          </div>

        </div>
    </div>
  )
}

export default OkycData