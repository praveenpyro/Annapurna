import React from 'react'
import './ClientDetails.css';
import {useNavigate} from 'react-router-dom';
function ClientDetails() {
    const navigate = useNavigate();

  return (
    <div className='clientdetails-wrap'>
        <div className="breadcrumb-cover">
            <ul className="breadcrumb-wrap header-breadcrumb ">
                <li onClick={() => { navigate('/dashboard')}}><a>Home</a></li>
                <li><a onClick={() => navigate('/dashboard/newapplication/searchclient') }>New Application</a></li>
                <li><a onClick={() => navigate('/dashboard/newapplication/searchclient') }>Search Client</a></li>
                <li>Client Details</li>
            </ul>
        </div>
        <div className="client-detail-found-page pb-40">
            <div className="center-bg-white">
                <h1 className="bold mb-20">Client details found!</h1>
                <div className="row">
                    <div className="col-7">
                        <div className="borrower-cover">
                            <h3 className="color-gray">Borrower Id</h3>
                            <div className="id-cover">
                                <h3 className="bold">456</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="search-cover h-100">
                            <img src={require('../../html/assets/images/search-circular-icon.svg').default}  className="mr-20 mr-xs-10" alt="" />
                            <a href="" className="bold color-primary">Search</a>
                        </div>
                    </div>
                </div>
                <div className="white-card flex-wrap">
                    <div className="radio-cover">
                        <label className="custom-radio">
                            <input type="radio" name="radio"></input>
                            <span className="radio-mark"></span>
                        </label>
                    </div>
                    <div className="row detail-wrapper includes-radio">
                        <div className="col-4 col-md-6 col-sm-12">
                            <label>Client Name</label>
                            <p>Jai Prakash</p>
                        </div>
                        <div className="col-4 col-md-6 col-sm-12">
                            <label>Relationship</label>
                            <p>Self</p>
                        </div>
                        <div className="col-4 col-md-6 col-sm-12">
                            <label>PKYC ID</label>
                            <p>1234485</p>
                        </div>
                        <div className="col-4 col-md-6 col-sm-12">
                            <label>Marital Status</label>
                            <p>Married</p>
                        </div>
                        <div className="col-4 col-md-6 col-sm-12">
                            <label>OCR KYC Profile</label>
                            <p>Yes</p>
                        </div>
                        <div className="col-4 col-md-6 col-sm-12">
                            <label>Current Loan Status</label>
                            <p>Active</p>
                        </div>
                        <div className="col-4 col-md-6 col-sm-12">
                            <label>Village Name</label>
                            <p>Village One</p>
                        </div>
                        <div className="col-8 col-md-12">
                            <h4 className="link-with-icon bold pointer underline mt-15 mt-xs-5"
                                onclick="viewHouseholdDetails()">
                                <img src={require('../../html/assets/images/view-circular-icon.svg').default} alt=""></img>
                                View Household Details
                            </h4>
                        </div>
                    </div>
                </div>
                <div className="white-card flex-wrap d-none" id="householdDetail">
                    <div className="radio-cover">
                        <label className="custom-radio">
                            <input type="radio" name="radio"></input>
                            <span className="radio-mark"></span>
                        </label>
                    </div>
                    <div className="row detail-wrapper includes-radio">
                        <div className="col-4 col-md-6 col-sm-12">
                            <label>Earning Member</label>
                            <p>Lata Kumari</p>
                        </div>
                        <div className="col-4 col-md-6 col-sm-12">
                            <label>Relationship</label>
                            <p>Wife</p>
                        </div>
                        <div className="col-4 col-md-6 col-sm-12">
                            <label>PKYC ID</label>
                            <p>1234485</p>
                        </div>
                        <div className="col-4 col-md-6 col-sm-12">
                            <label>Marital Status</label>
                            <p>Married</p>
                        </div>
                        <div className="col-4 col-md-6 col-sm-12">
                            <label>OCR KYC Profile</label>
                            <p>No</p>
                        </div>
                        <div className="col-4 col-md-6 col-sm-12">
                            <label>Current Loan Status</label>
                            <p>Active</p>
                        </div>
                        <div className="col-4 col-md-6 col-sm-12">
                            <label>Village Name</label>
                            <p>Village One</p>
                        </div>
                        <div className="col-8 col-md-12">
                            <label>Unlink</label>
                            <h4 className="link-with-icon pointer underline" data-toggle="modal"
                                data-target="#unlinkFromHouseholdDialog">
                                <img src="../assets/images/attach-circular-icon.svg" alt=""></img>
                                View Images
                            </h4>
                        </div>
                    </div>
                </div>
                <button type="button"onClick={() => navigate('/dashboard/newapplication/viewhousehold') }  className="btn btn-primary w-350">Proceed</button>

            </div>
        </div>
    </div>
  )
}

export default ClientDetails