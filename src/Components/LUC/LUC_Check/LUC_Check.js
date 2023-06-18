import React, {useEffect, useState} from 'react'
import './LUC_Check.css';
import {useNavigate} from 'react-router-dom';
import { callApi } from '../../../api/callApi';
import Loader from '../../Loader/Loader';
import {saveLUCDetails, setSelectedCenter} from '../../../reducers/luc';
import { useSelector, useDispatch } from 'react-redux';
import { REACT_APP_BASE_URL } from '../../../api/apiUrl';

function LUC_Check() {
    const navigate = useNavigate();
    const [showLoader, setShowLoader] = useState(false);
    const [selectedCenter, setSlectedCenter] = useState('');
    const dispatch = useDispatch();
    const lucDetails = useSelector((state) => state.luc.value);
    const lucDetailsUrl = `${REACT_APP_BASE_URL}/LUCDetails`;
    const fetchLUCDetails = async() => {
        setShowLoader(true);
        const userName = localStorage.getItem('userName');
        const password = localStorage.getItem('password');
        const request = { "UserId": userName, "Password": password };
        const { LUCDetails } = await callApi({url:lucDetailsUrl, method: 'POST', data: request});
        setShowLoader(false);
        dispatch(saveLUCDetails(LUCDetails));
    }
    useEffect(() => {
        fetchLUCDetails();
    },[])
  return (
        <div className="search-wrap search-client">
            <div className="container">
                <ul className="breadcrumb-wrap header-breadcrumb">
                    <li><a onClick={() => { navigate('/dashboard'); }}>Home</a></li>
                    <li>LUC Check</li>
                </ul>
            </div>
            <div className="search-client-wrap">
                <div className="search-client-outer">
                    <div className="search-client-inner">
                        <a onClick={() =>{navigate('/dashboard');} } className="close-ic"><img src={require('../../../html/assets/images/close-ic.svg').default}
                                alt="Close Icon" /></a>
                        <div className="icon-wrap">
                            <figure>
                                <img src={require('../../../html/assets/images/search-user.svg').default}  alt="Search Icon" />
                            </figure>
                        </div>
                        <div className="search-form">
                            <h3>LUC Check</h3>
                            <form>
                                <label className="form-label">Choose Search Type</label>
                                <div className="form-group">
                                    <select  className="selectName form-control" onChange={(e) => setSlectedCenter(e.target.value)}>
                                        <option>Select</option>
                                        {
                                           ((lucDetails && Object.keys(lucDetails).length > 0 )) &&  lucDetails.map((center) => (
                                                <option key = {center.CenterId} value={center.CenterId}>{center.CenterName}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <label className="form-label">Enter Detail</label>
                                <div className="form-group">
                                    <input type="text" placeholder="Enter Details" className="form-control" />
                                </div>
                                <div className="btn-wrap">
                                    <button type="button" className="btn-primary" onClick={() => {  dispatch(setSelectedCenter(selectedCenter)); navigate(`/dashboard/luc/clientlist`) }}>Search</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {showLoader && <Loader/>}
        </div>
  )
}

export default LUC_Check