import React, {useState} from 'react'
import './MobileVerification.css';
import {useNavigate} from 'react-router-dom';
import ClientEnrolmentModal from '../ClientEnrolmentModal/ClientEnrolmentModal';
function MobileVerification() {
    const navigate = useNavigate();
    const [showClientEnrolmentModal, setShowClientEnrolmentModal] = useState(false);
    const handleClientEnrolmentBranch = () => {
        setShowClientEnrolmentModal(false);
        navigate('/dashboard/newapplication/okycdata')
    }

    const handleClientEnrolmentField = () => {
        setShowClientEnrolmentModal(false);
    }

  return (
    <div className='mobile-wrap search-client'>
         <div className="container">
                <ul className="breadcrumb-wrap">
                    <li><a onClick={() => { navigate('/dashboard') }}>Home</a></li>
                    <li><a onClick={() => { navigate('/dashboard/newapplication/searchclient') }}>New Application</a></li>
                    <li>Movbile Verification</li>
                </ul>
        </div>
        <div className="search-client-wrap">
                <div className="search-client-outer">
                    <div className="search-client-inner">
                        <div className="icon-wrap">
                            <figure>
                                <img src={require('../../html/assets/images/mobile-ic.svg').default} alt="Mobile Icon" />
                            </figure>
                        </div>
                        <div className="search-form">
                            <h3>Verify Mobile Number</h3>
                            <form>
                                <div className="select-input-group">
                                    <div className="select-wrap">
                                        <label className="form-label">Select</label>
                                        <div className="form-group">
                                            <select className='selectName form-control' disabled>
                                                <option>Select</option>
                                                <option>Mr.</option>
                                                <option>Mrs.</option>
                                                <option>Ms.</option>
                                                <option>Miss.</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="input-wrap">
                                        <label className="form-label">Name</label>
                                        <div className="form-group">
                                            <input type="text" value="Ramesh Kumar" className="form-control" disabled />
                                        </div>
                                    </div>
                                </div>
                                <label className="form-label">Relationship with Applicant</label>
                                <div className="form-group">
                                    <input type="text" value="Father" className="form-control" disabled />
                                </div>
                                <div className="mobile-no">
                                    <label className="form-label">Mobile Number</label>
                                    <div className="form-group">
                                        <img src={require('../../html/assets/images/check-ic.svg').default}  alt="Check Icon" className="check-ic"/>
                                        <input type="text" value="+91-9897098970" className="form-control verify-input" readonly/>
                                        <a href="update-mobile.html" className="update-wrap"><img src={require('../../html/assets/images/edit-ic.svg').default}  alt="Edit Icon"/><span>Update</span></a>
                                    </div>
                                    <p className="adhar-note">(Aadhar Registered Mobile Number Preferable.)</p>
                                </div>
                                <div className="btn-wrap">
                                    <button type="button" className="btn-primary" data-toggle="modal"
                                        data-target="#clientEnrollmentDialog" onClick={() => setShowClientEnrolmentModal(true)}>Save & Next</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            { showClientEnrolmentModal && <ClientEnrolmentModal handleClientEnrolmentBranch = {handleClientEnrolmentBranch} handleClientEnrolmentField = {handleClientEnrolmentField}/>}
    </div>
  )
}

export default MobileVerification