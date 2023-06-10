import React from 'react'
import './SearchClient.css';
import {useNavigate} from 'react-router-dom';

function SearchClient() {
    const navigate = useNavigate();

  return (
    <div className="search-wrap search-client">
        <div className="container">
                <ul className="breadcrumb-wrap">
                    <li><a onClick={() => { navigate('/dashboard'); }}>Home</a></li>
                    <li><a onClick={() => { navigate('/dashboard/newapplication/searchclient'); }}>New Application</a></li>
                    <li>Search Client</li>
                </ul>
        </div>
        <div className="search-client-wrap">
                <div className="search-client-outer">
                    <div className="search-client-inner">
                        <a href="../dashboard.html" className="close-ic"><img src={require('../../html/assets/images/close-ic.svg').default}
                                alt="Close Icon" /></a>
                        <div className="icon-wrap">
                            <figure>
                                <img src={require('../../html/assets/images/search-user.svg').default}  alt="Search Icon" />
                            </figure>
                        </div>
                        <div className="search-form">
                            <h3>Search Client</h3>
                            <form>
                                <label className="form-label">Choose Search Type</label>
                                <div className="form-group">
                                    <select  className="selectName form-control" >
                                        <option>Select</option>
                                        <option>Browser ID</option>
                                        <option>Lorem Ipsum</option>
                                        <option>Lorem Ipsum</option>
                                        <option>Lorem Ipsum</option>
                                    </select>
                                </div>
                                <label className="form-label">Enter Detail</label>
                                <div className="form-group">
                                    <input type="text" placeholder="Enter Details" className="form-control" />
                                </div>
                                <div className="btn-wrap">
                                    <button type="button" className="btn-primary" onClick={() => { navigate('/dashboard/newapplication/clientdetails') }}>Search</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default SearchClient