import React from 'react'
import '../../html/assets/css/nice-select.css';
import '../../html/assets/css/global.css';
import '../../html/assets/css/grid.css';
import '../../html/assets/css/typography.css';
import '../../html/assets/css/new-application.css';
import './ViewHouseholdDetails.css';
import {useNavigate} from 'react-router-dom';

function ViewHouseholdDetails() {
  const navigate = useNavigate();

  return (
    <div className='viewhousehold-wrap'>
      <div className="breadcrumb-cover">
            <ul className="breadcrumb-wrap header-breadcrumb ">
                <li onClick={() => { navigate('/dashboard')}}><a>Home</a></li>
                <li><a onClick={() => navigate('/dashboard/newapplication/searchclient') }>New Application</a></li>
                <li><a onClick={() => navigate('/dashboard/newapplication/searchclient') }>Search Client</a></li>
                <li><a onClick={() => navigate('/dashboard/newapplication/clientdetails') }>Client Details</a></li>
                <li>View Household Details</li>
            </ul>
        </div>
        <div className="client-detail-found-page pb-40">
            <div className="center-bg-white">
                <form>
                    <div className="row">
                        <div className="col-6 col-sm-12">
                            <label className="form-label">Pin Code</label>
                            <div className="form-group">
                                <input type="text" placeholder="Enter pincode" className="form-control" />
                            </div>
                        </div>

                        <div className="col-6 col-sm-12">
                            <label className="form-label">Village</label>
                            <div className="form-group">
                                <input type="text" placeholder="Enter village" className="form-control" />
                                <a className="search-icon">
                                    <img src={require('../../html/assets/images/magnifier-icon.svg').default}  alt="search" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="right">
                        <div className="status-cover high">
                            High
                        </div>
                    </div>

                    <div className="white-card">
                        <div className="row detail-wrapper">
                            <div className="col-4 col-md-6 col-sm-12">
                                <label>Gram Panchayat</label>
                                <p>Dakarangia</p>
                            </div>
                            <div className="col-4 col-md-6 col-sm-12">
                                <label>Block/Tehsil</label>
                                <p>Greesingia</p>
                            </div>
                            <div className="col-4 col-md-6 col-sm-12">
                                <label>District</label>
                                <p>Udayagiri </p>
                            </div>
                            <div className="col-4 col-md-6 col-sm-12">
                                <label>Census ID</label>
                                <p>2342342</p>
                            </div>
                            <div className="col-4 col-md-6 col-sm-12">
                                <label>Lat</label>
                                <p>20.12204</p>
                            </div>
                            <div className="col-4 col-md-6 col-sm-12">
                                <label>Long</label>
                                <p>40.12204</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6 col-sm-12">
                            <button type="submit" className="btn w-100">
                                <img src={require('../../html/assets/images/map-icon.svg').default}  alt="search" /> &nbsp;
                                View on Map</button>
                        </div>
                        <div className="col-6 col-sm-12 mt-xs-15">
                            <button type="button" className="btn btn-primary w-100"
                                onClick={() => navigate('/dashboard/newapplication/mobileverifiaction') }>Proceed</button>
                        </div>
                    </div>
                </form>
                <div className="row">
                    <div className="col-4 col-sm-12 mt-30">
                        <button type="button" className="btn btn-primary w-100" data-toggle="modal"
                            data-target="#noDataAvailableDialog">No Data</button>
                    </div>
                    <div className="col-4 col-sm-12 mt-30">
                        <button type="button" className="btn btn-primary w-100" data-toggle="modal"
                            data-target="#enrollmentRestrictedDialog">Restricted</button>
                    </div>
                    <div className="col-4 col-sm-12 mt-30">
                        <button type="button" className="btn btn-primary w-100" data-toggle="modal"
                            data-target="#clientNotEligibleDialog">Not Eligible</button>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewHouseholdDetails