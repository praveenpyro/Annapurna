import React, {useEffect, useState} from 'react'
import './CBDeviationData.css';
import { useNavigate, useParams, useLocation  } from 'react-router-dom';
import { REACT_APP_BASE_URL } from '../../api/apiUrl';
import {saveCBDeviation} from '../../reducers/cbdeviation';
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../Loader/Loader';
import * as utils from './CBDeviationData';
import { callApi } from '../../api/callApi';

const CBDeviationData = () => {
    const navigate = useNavigate();
    const [showLoader, setShowLoader] = useState(false);
    const cbDeviationData = useSelector((state) => state.cbDeviation.value);

    const dispatch = useDispatch();
    useEffect(() => {
        utils.fetchCDData({}, {setShowLoader, dispatch});
    },[]);
  return (
    <div className='cb-content cb-wrap'>
        <div className="breadcrumb-cover">
                <ul className="breadcrumb-wrap header-breadcrumb ">
                    <li onClick={() => { navigate('/dashboard') }}><a>Home</a></li>
                    <li>CB Deviation Data</li>
                    <li>List</li>
                </ul>
        </div>
        <div className="cb-deviation-page pb-40">
      <div className="center-bg-white medium">
        <div>
          <div className="row">
            <div className="col-6 col-sm-12">
              <label className="form-label">Search Client By</label>
              <div className="form-group">
                <select name="selectName" id="selectId" className="form-control" aria-placeholder="Select">
                  <option value="volvo">Volvo</option>
                  <option value="lorem">lorem</option>
                  <option value="lorem2">lorem2</option>
                  <option value="lorem3">lorem3</option>
                </select>
              </div>
            </div>
            <div className="col-6 col-sm-12">
              <label className="form-label">Enter Details</label>
              <div className="form-group">
                <input type="text" placeholder="Enter Details" className="form-control" />
              </div>
            </div>
          </div>
          <button type="button" className="btn btn-primary w-350">
            Search
          </button>
        </div>
        { (cbDeviationData && Object.keys(cbDeviationData).length > 0 ) && 
            (
                <>
                    <h1 className="bold mb-20 mt-30 mb-xs-0 mt-xs-15">All Cb Data</h1>
                    {cbDeviationData.map( item => (
                        <WhiteListCard cbDeviationData={item} />
                    ))}
                </>
                
            )
            
        }
      </div>
    </div>
    {showLoader && <Loader/>}
    </div>
  )
}

export const fetchCDData = async(data, methods) => {
   
    const { setShowLoader, dispatch } = methods;
    const cbDataUrl =  `${REACT_APP_BASE_URL}/CBRDetails`;
    setShowLoader(true);
    const userName = localStorage.getItem('userName');
    const password = localStorage.getItem('password');
    const request = { "UserId": userName, "Password": password };
    const { CBRDetails } = await callApi({url:cbDataUrl, method: 'POST', data: request});
    dispatch(saveCBDeviation(CBRDetails));
    setShowLoader(false);
}

export const WhiteListCard = (props) => {
    const cbDeviationData = props.cbDeviationData;
    console.log({'cbDeviationData': cbDeviationData})
    return(
        <div className="white-card">
          <div className="row detail-wrapper">
            <div className="col-4 col-md-6 col-sm-12">
              <label>Client Name</label>
              <p>{cbDeviationData.Member_Name}</p>
            </div>
            <div className="col-4 col-md-6 col-sm-12">
              <label>Voter ID</label>
              <p>{cbDeviationData.Secondary_KYC_Number}</p>
            </div>
            <div className="col-4 col-md-6 col-sm-12">
              <label>CB Status</label>
              <p>{cbDeviationData.CB_status}</p>
            </div>
            <div className="col-4 col-md-6 col-sm-12">
              <label>Rejection Reason</label>
              <p>{cbDeviationData.Reject_Remark}</p>
            </div>
            <div className="col-4 col-md-6 col-sm-12">
              <label>Reason of request</label>
              <p>TBD</p>
            </div>
            <div className="col-4 col-md-6 col-sm-12">
              <label>Status</label>
              <p>{cbDeviationData.final_cb_status}</p>
            </div>
            <div className="col-12">
              <label>Raise By</label>
              <p>FCO name</p>
            </div>
            <div className="col-4 col-md-6 col-sm-12">
              <a href="" className="link-with-icon mt-15 mt-sm-10 mt-xs-0" data-toggle="modal"
                data-target="#viewCBReportDialog">
                <img src={require('../../html/assets/images/view-circular-icon.svg').default}  alt="" />
                View CB Report
              </a>
            </div>
            <div className="col-4 col-md-6 col-sm-12">
              <button type="button" className="btn btn-primary w-100 mt-xs-15" disabled>
                Approve
              </button>
            </div>
            <div className="col-4 col-md-6 col-sm-12">
              <button type="button" className="btn w-100 mt-xs-15" data-toggle="modal"
                data-target="#rejectDialog">Reject</button>
            </div>
          </div>
        </div>
    )
}

export default CBDeviationData