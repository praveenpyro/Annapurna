import React, {useEffect, useState} from 'react'
import './CBDeviationData.css';
import { useNavigate, useParams, useLocation  } from 'react-router-dom';
import { REACT_APP_BASE_URL } from '../../api/apiUrl';
import {saveCBDeviation} from '../../reducers/cbdeviation';
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../Loader/Loader';
import * as utils from './CBDeviationData';
import { callApi } from '../../api/callApi';
import GenericModal  from '../GenericModal/GenericModal';

const CBDeviationData = () => {
    const navigate = useNavigate();
    const [showLoader, setShowLoader] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalConfig, setModalConfig] = useState();
    const cbDeviationData = useSelector((state) => state.cbDeviation.value);
    const user = useSelector((state) => state.user.value);
    const dispatch = useDispatch();
    useEffect(() => {
        utils.fetchCDData({}, {setShowLoader, dispatch});
    },[]);

    const handleModal = (config) => {
      setShowModal(true);
      setModalConfig(config);
    }
    
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
                        <WhiteListCard cbDeviationData={item} user = {user} handleModal={handleModal} setShowModal={setShowModal}/>
                    ))}
                </>
                
            )
            
        }
      </div>
    </div>
    {showLoader && <Loader/>}
    { (showModal && modalConfig) && <GenericModal  
        message={modalConfig?.message}
        buttons={modalConfig?.buttons}
        imageUrl={modalConfig?.imageUrl}
        textArea = {modalConfig?.textArea}
        dropdown = { modalConfig?.dropdown}
        handler = { modalConfig?.handler }
        />
        }
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
    const setShowModal = props.setShowModal;
    const user = props.user;
    const handleButton1Click = () => {
      setShowModal(false);
    }
    const handleButton2Click = () => {
      setShowModal(false);
    }

    const viewCbReportDropdown = (value) => {
      // setShowModal(false);
    }
    
    const approveModalConfigBM = {
      message:"CB data approved successfully!",
      buttons:[
        { label: 'Submit', handler: handleButton1Click, primary: true },
        { label: 'Cancel', handler: handleButton2Click, primary: false },
      ],
      imageUrl:require('../../html/assets/images/successfully-checked.svg').default
    }

    const raiseRequestModalConfig = {
      message:"Please Enter Reason of Raising Request",
      buttons:[
        { label: 'Submit', handler: handleButton1Click, primary: true },
        { label: 'Cancel', handler: handleButton2Click, primary: false },
      ],
      textArea: true
    }

    const viewCbReportModalConfig = {
      message:"Please Select User To View CB Report.",
      imageUrl:require('../../html/assets/images//view-cb-report.svg').default,
      dropdown: [
        { label: 'Volvo', value: 'Volvo' },
        { label: 'lorem', value: 'lorem' },
        { label: 'lorem1', value: 'lorem1'},
        { label: 'lorem2', value: 'lorem2'}
      ],
      buttons:[
        { label: 'Submit', handler: () => {setShowModal(false); }, primary: true },
        { label: 'Cancel', handler: () => {setShowModal(false); }, primary: false },
      ],
      handler : viewCbReportDropdown
    }

    const handleRejectBM = (data) => {
      const { name } = data

      const handleRejectButtonBM = () => {
        setShowModal(false);
        handleModal({
          message:`${name} Rejected Successfully`,
          buttons:[
            { label: 'Okay', handler: handleButton1Click, primary: true },
          ],
          imageUrl:require('../../html/assets/images/successfully-checked.svg').default
        })
      }

      handleModal( {
        message:`Are you sure you want to ${name}?`,
        buttons:[
          { label: 'Submit', handler: handleRejectButtonBM, primary: true },
          { label: 'Cancel', handler: handleButton2Click, primary: false },
        ],
        imageUrl:require('../../html/assets/images/restricted.svg').default
      });

    }


    const handleModal = props.handleModal;
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
              <a className="link-with-icon mt-15 mt-sm-10 mt-xs-0" data-toggle="modal"
                onClick={() => {handleModal(viewCbReportModalConfig)}}>
                <img src={require('../../html/assets/images/view-circular-icon.svg').default}  alt="" />
                View CB Report
              </a>
            </div>

            {
              (user.userrole === 'BM') ? 
              <>
                <div className="col-4 col-md-6 col-sm-12"  onClick={() => {handleModal(raiseRequestModalConfig)}} >
                  <button type="button" className="btn btn-primary w-100 mt-xs-15">
                    Raise Request
                  </button>
                </div>
                <div className="col-4 col-md-6 col-sm-12">
                  <button type="button" className="btn w-100 mt-xs-15" data-toggle="modal"
                    >Reject</button>
                </div>
              </> : 
              <>
                <div className="col-4 col-md-6 col-sm-12" onClick={() => {handleModal(approveModalConfigBM)}}>
                  <button type="button" className="btn btn-primary w-100 mt-xs-15">
                    Approve
                  </button>
                </div>
                <div className="col-4 col-md-6 col-sm-12" onClick={() => {handleRejectBM({name : cbDeviationData.Member_Name})}}>
                  <button type="button" className="btn w-100 mt-xs-15" data-toggle="modal"
                    >Reject</button>
                </div>
              </>
            }
            
          </div>
        </div>
    )
}

export default CBDeviationData