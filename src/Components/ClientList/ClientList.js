import React from 'react'
import './ClientList.css';
import { useNavigate, useParams, useLocation  } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const ClientList = () => {
    const navigate = useNavigate();
    const {selectedCenter, value} = useSelector((state) => state.luc);
    const selectedCenterDetails = value.find(center => center.CenterId === selectedCenter);
    console.log({'selectedCenter': selectedCenterDetails})
    return (
        <div className='clientlist-wrap'>
            <div className="breadcrumb-cover">
                <ul className="breadcrumb-wrap header-breadcrumb ">
                    <li onClick={() => { navigate('/dashboard') }}><a>Home</a></li>
                    <li><a onClick={() => navigate('/dashboard/luc/luc_check')}>LUC Check</a></li>
                    <li>Client List</li>
                </ul>
            </div>
            <div className="client-detail-found-page pb-40">
                <div className="center-bg-white">
                    <div className="row">
                        <div className="col-7 col-sm-12">
                            <div className="borrower-cover">
                                <h3 className="color-gray">Center</h3>
                                <div className="id-cover">
                                    <h3 className="bold">{selectedCenterDetails.CenterId}</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-5 col-sm-12 mt-xs-15">
                            <div className="search-cover h-100">
                                <img src={require('../../html/assets/images/search-circular-icon.svg').default} className="mr-20" alt="" />
                                <a href="" className="bold color-primary">Search</a>
                            </div>
                        </div>
                    </div>
                    <h3 className="bold mt-20 mb-20">Total Searched (23)</h3>
                    <div className="white-card pointer" onClick={()=> {navigate('/dashboard/luc/lucclientdetails')}}>
                        <div className="row detail-wrapper">
                            <div className="col-4 col-md-6 col-sm-12">
                                <label>Applicant Name</label>
                                <p>{selectedCenterDetails.MemberName}</p>
                            </div>
                            <div className="col-4 col-md-6 col-sm-12">
                                <label>Spouse</label>
                                <p>{selectedCenterDetails.Spouse_Name}</p>
                            </div>
                            <div className="col-4 col-md-6 col-sm-12">
                                <label>Voter Id</label>
                                <p>{selectedCenterDetails.Second_Id}</p>
                            </div>
                            <div className="col-4 col-md-6 col-sm-12">
                                <label>Center Name</label>
                                <p>{selectedCenterDetails.CenterName}</p>
                            </div>
                            <div className="col-4 col-md-6 col-sm-12">
                                <label>Group Name</label>
                                <p>{selectedCenterDetails.GroupName}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientList