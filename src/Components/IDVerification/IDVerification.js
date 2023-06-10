import React, {useState} from 'react'
import VoterIdCard from '../VoterIdCard/VoterIdCard';
import AadharCard from '../AadharCard/AadharCard';
const IDVerification = () => {
    const [activeTab, setActiveTab] = useState(1);
    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };
    return (
        <>
        <div id="verifyId">
            <h1 className="center bold mt-20 tab-heading">Please verify your ID</h1>
            <p className="center adhar-card-description hide">Select one of the options to complete the process</p>
            <div className="sub-tabs mt-20 mb-20">
                <div className={`single-sub-tab voter-id-card ${activeTab === 1 ? 'active' : ''}`} data-tag="voterID"  onClick={() => handleTabClick(1)}>
                    <h3><span>1</span> Voter Id Card</h3>
                </div>
                <div className={`single-sub-tab adhar-card ${activeTab === 2 ? 'active' : ''}`}  data-tag="AadharCard"  onClick={() => handleTabClick(2)}>
                    <h3><span>2</span> Aadhar Card</h3>
                </div>
            </div>
            {  activeTab === 1 && 
                <div className="subtabcontent" id="voterID">
                    <VoterIdCard/>
                </div>
            }
            {  activeTab === 2 && 
                <div className="subtabcontent hide" id="AadharCard">
                    <AadharCard/>
                </div>
            }
        </div>
        </>
    )
}

export default IDVerification