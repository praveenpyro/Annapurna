import React, {useState} from 'react'
import './LUC_ClientDetails.css';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {CustomInput} from '../../../utils/CustomInput';
const LUC_ClientDetails = () => {
  const navigate = useNavigate();
  const {selectedCenter, selectedGroup, selectedMember , value} = useSelector((state) => state.luc);
  const selectedMemberObj = value.find(center => center.centerId === selectedCenter)?.groups.find(group => group.groupId === selectedGroup).members.find(member => member.sNo === selectedMember);
  console.log({'selectedMemberObj': selectedMemberObj});
  const [selectedDateVisit1, setSelectedVisit1] = useState();
  const [selectedDateVisit2, setSelectedVisit2] = useState();
  return (
    <div className='lucclientdetails-wrap'>
      <div className="breadcrumb-cover">
        <ul className="breadcrumb-wrap header-breadcrumb ">
          <li onClick={() => { navigate('/dashboard') }}><a>Home</a></li>
          <li><a onClick={() => navigate('/dashboard/luc/luc_check')}>LUC Check</a></li>
          <li><a onClick={() => navigate('/dashboard/luc/clientlist')}>Client List</a></li>
          <li>Client Details</li>
        </ul>
      </div>
      <div className="client-detail-page pb-40">
            <div className="center-bg-white">
                <div className="white-card m-0">
                    <div className="row detail-wrapper">
                        <div className="col-4 col-md-6 col-sm-12">
                            <label>Date</label>
                            <p>TBD</p>
                        </div>
                        <div className="col-4 col-md-6 col-sm-12">
                            <label>Branch</label>
                            <p>TBD</p>
                        </div>
                        <div className="col-4 col-md-6 col-sm-12">
                            <label>Village</label>
                            <p>{selectedMemberObj.villageName}</p>
                        </div>
                        <div className="col-4 col-md-6 col-sm-12">
                            <label>Center</label>
                            <p>{selectedMemberObj.centerName}</p>
                        </div>
                        <div className="col-4 col-md-6 col-sm-12">
                            <label>Group Name</label>
                            <p>{selectedMemberObj.groupName}</p>
                        </div>
                        <div className="col-4 col-md-6 col-sm-12">
                            <label>Member Name</label>
                            <p>{selectedMemberObj.memberName}</p>
                        </div>
                        <div className="col-4 col-md-6 col-sm-12">
                            <label>Member Id</label>
                            <p>TBD</p>
                        </div>
                        <div className="col-4 col-md-6 col-sm-12">
                            <label>Loan No.</label>
                            <p>{selectedMemberObj.loanId}</p>
                        </div>
                        <div className="col-4 col-md-6 col-sm-12">
                            <label>Loan Amount</label>
                            <p>{selectedMemberObj.loanAmount}</p>
                        </div>
                        <div className="col-4 col-md-6 col-sm-12">
                            <label>Date of Disbursement</label>
                            <p>{selectedMemberObj.disbursementDate}</p>
                        </div>
                        <div className="col-4 col-md-6 col-sm-12">
                            <label>LUC Status</label>
                            <p>TBD</p>
                        </div>
                        <div className="col-4 col-md-6 col-sm-12">
                            <label>Purpose</label>
                            <p>{selectedMemberObj.purposeName}</p>
                        </div>
                    </div>
                </div>
                <form>
                    <div className="row mt-20">
                        <div className="col-6 col-sm-12">
                            <label className="form-label">Loan Amount Utilized</label>
                            <div className="form-group">
                                <input type="text" placeholder="Enter" className="form-control" />
                            </div>
                        </div>
                        <div className="col-6 col-sm-12">
                            <label className="form-label">Select Purpose</label>
                            <div className="form-group">
                                <select name="cars" id="cars" className="form-control" aria-placeholder="Select">
                                    <option value="Select">Select</option>
                                    <option value="37">37</option>
                                    <option value="38">38</option>
                                    <option value="39">39</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-6 col-sm-12">
                            <label className="form-label">Remark</label>
                            <div className="form-group">
                                <input type="text" placeholder="Enter" className="form-control" />
                            </div>
                        </div>
                        <div className="col-6 col-sm-12">
                            <label className="form-label">Work Completion Status</label>
                            <div className="form-group">
                                <select name="cars" id="cars" className="form-control" aria-placeholder="Select">
                                    <option value="Select">Select</option>
                                    <option value="37">37</option>
                                    <option value="38">38</option>
                                    <option value="39">39</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-6 col-sm-12">
                            <label className="form-label">Tranche_1 Amount</label>
                            <div className="form-group">
                                <input type="text" placeholder="Enter" className="form-control" disabled />
                            </div>
                        </div>
                        <div className="col-6 col-sm-12">
                            <label className="form-label">Tranche_1 Visit</label>
                            <div className="form-group">
                                {/* <input type="text" placeholder="Select Date" className="form-control date-picker" /> */}
                                <DatePicker selected={selectedDateVisit1} onChange={(date) => {setSelectedVisit1(date)}} customInput={<CustomInput />}/>
                            </div>
                        </div>
                        <div className="col-6 col-sm-12">
                            <label className="form-label">Tranche_2 Amount</label>
                            <div className="form-group">
                                <input type="text" placeholder="Enter" className="form-control" disabled />
                            </div>
                        </div>
                        <div className="col-6 col-sm-12">
                            <label className="form-label">Tranche_2 Visit</label>
                            <div className="form-group">
                                {/* <input type="text" placeholder="Select Date" className="form-control date-picker" /> */}
                                <DatePicker selected={selectedDateVisit2} onChange={(date) => {setSelectedVisit2(date)}} customInput={<CustomInput />}/>
                            </div>
                        </div>
                        <div className="col-12">
                            <label className="form-label">Proof of Tranche</label>
                            <div className="tranche-cover">
                                <input type="file"/>
                                <img src={require('../../../html/assets/images/cam-icon.svg').default}  alt=""/>
                                {/* <!-- <img src="" alt="" className="uploaded-image"> --> */}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <button className="btn w-100" onClick={(e) => {e.stopPropagation()}} type="button">Refresh</button>
                        </div>
                        <div className="col-6">
                            <button className="btn btn-primary w-100" type="button" data-toggle="modal"
                               >Submit</button>

                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default LUC_ClientDetails