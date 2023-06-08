import React from 'react';
import '../../html/assets/css/nice-select.css';
import './Review.css';
import '../../html/assets/css/global.css';
import '../../html/assets/css/grid.css';
import {useNavigate} from 'react-router-dom';

const Review = () => {
    const navigate = useNavigate();
  return (
    <div className="review-content">
        <div className="breadcrumb-cover">
            <ul className="breadcrumb-wrap header-breadcrumb ">
                <li onClick={() => { navigate('/dashboard'); }}><a>Home</a></li>
                <li>Verify Client List</li>
            </ul>
        </div>
        <div className="verify-client-page">
            <div className="center-bg-white">
                <div className="row">
                    <div className="col-6 col-sm-12">
                        <label className="form-label">Select Village</label>
                        <div className="form-group">
                            <select className="selectName form-control" id="selectId" aria-placeholder="Select">
                                <option value="volvo">Volvo</option>
                                <option value="lorem">lorem</option>
                                <option value="lorem2">lorem2</option>
                                <option value="lorem3">lorem3</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-6 col-sm-12">
                        <label className="form-label">Select Center</label>
                        <div className="form-group">
                            <select className="selectName form-control" id="selectId" aria-placeholder="Select">
                                <option value="volvo">Volvo</option>
                                <option value="lorem">lorem</option>
                                <option value="lorem2">lorem2</option>
                                <option value="lorem3">lorem3</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12">
                        <label className="form-label">FCO Name</label>
                        <div className="form-group">
                            <select className="selectName form-control" id="selectId"  aria-placeholder="Select">
                                <option value="volvo">Volvo</option>
                                <option value="lorem">lorem</option>
                                <option value="lorem2">lorem2</option>
                                <option value="lorem3">lorem3</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-6">
                        <button className="btn w-100">Reset</button>
                    </div>
                    <div className="col-6">
                        <button className="btn btn-primary w-100">Search</button>
                    </div>
                    <h3 className="bold mt-20 mb-20">Total Searched (23)</h3>
                    <div className="white-card">
                        <div className="row detail-wrapper">
                            <div className="col-4 col-md-6 col-sm-12">
                                <label>Applicant Name</label>
                                <p>Jai Prakash</p>
                            </div>
                            <div className="col-4 col-md-6 col-sm-12">
                                <label>Spouse</label>
                                <p>Lorem</p>
                            </div>
                            <div className="col-4 col-md-6 col-sm-12">
                                <label>Voter Id</label>
                                <p>4356384</p>
                            </div>
                            <div className="col-4 col-md-6 col-sm-12">
                                <label>Date</label>
                                <p>O1 Jan 022</p>
                            </div>
                            <div className="col-8 col-md-12">
                                <a href="detail.html" className="link-with-icon mt-20 mt-sm-10">
                                    <img src={require('../../html/assets/images/view-circular-icon.svg').default} alt=""></img>
                                    View Details
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="white-card">
                        <div className="row detail-wrapper">
                            <div className="col-4 col-md-6 col-sm-12">
                                <label>Applicant Name</label>
                                <p>Jai Prakash</p>
                            </div>
                            <div className="col-4 col-md-6 col-sm-12">
                                <label>Spouse</label>
                                <p>Lorem</p>
                            </div>
                            <div className="col-4 col-md-6 col-sm-12">
                                <label>Voter Id</label>
                                <p>4356384</p>
                            </div>
                            <div className="col-4 col-md-6 col-sm-12">
                                <label>Date</label>
                                <p>O1 Jan 022</p>
                            </div>
                            <div className="col-8 col-md-12">
                                <a href="detail.html" className="link-with-icon mt-20 mt-sm-10">
                                    <img src={require('../../html/assets/images/view-circular-icon.svg').default} alt=""></img>
                                    View Details
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        
    </div>
  )
}

export default Review