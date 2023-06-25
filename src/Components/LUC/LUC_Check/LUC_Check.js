import React, {useEffect, useState} from 'react'
import './LUC_Check.css';
import {useNavigate} from 'react-router-dom';
import { callApi } from '../../../api/callApi';
import Loader from '../../Loader/Loader';
import {saveLUCDetails, setSelectedCenter, setSelectedGroup} from '../../../reducers/luc';
import { useSelector, useDispatch } from 'react-redux';
import { REACT_APP_BASE_URL } from '../../../api/apiUrl';
import * as utils from './LUC_Check';
function LUC_Check() {
    const navigate = useNavigate();
    const [showLoader, setShowLoader] = useState(false);
    const [groups, setGroups] = useState([]);
    const [selectedCenter, setSlectedCenter] = useState('');
    const [selectedGroup, setSlectedGroup] = useState('');
    const dispatch = useDispatch();
    const lucDetails = useSelector((state) => state.luc.value);
    const lucDetailsUrl = `${REACT_APP_BASE_URL}/LUCDetails`;
    const fetchLUCDetails = async() => {
        setShowLoader(true);
        const userName = localStorage.getItem('userName');
        const password = localStorage.getItem('password');
        const request = { "UserId": userName, "Password": password };
        const { LUCDetails } = await callApi({url:lucDetailsUrl, method: 'POST', data: request});
        const LucData = await utils.parseLucObject(LUCDetails)
        dispatch(saveLUCDetails(LucData));
        setShowLoader(false);
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
                                <label className="form-label">Select Center</label>
                                <div className="form-group">
                                    <select  className="selectName form-control" 
                                        onChange={(e) => utils.handleCenterSelection({centerId: e.target.value, lucDetails: lucDetails}, {setSlectedCenter, setGroups})}>
                                        <option value=''>Select</option>
                                            {
                                            ((lucDetails && Object.keys(lucDetails).length > 0 )) &&  lucDetails.map((center) => (
                                                    <option key = {center.centerId} value={center.centerId}>{center.centerName}</option>
                                                ))
                                            }
                                    </select>
                                </div>

                                <label className="form-label">Select Group</label>
                                <div className="form-group">
                                    <select disabled={!selectedCenter} className="selectName form-control"  onChange={(e) => utils.handleGroupSelection({groupId: e.target.value}, {setSlectedGroup})}>
                                        <option value=''>Select</option>
                                            {
                                            ((groups && Object.keys(groups).length > 0 )) &&  groups.map((group) => (
                                                    <option key = {group.groupId} value={group.groupId}>{group.groupName}</option>
                                                ))
                                            }
                                    </select>
                                </div>
                                <div className="btn-wrap">
                                    <button disabled={!selectedCenter || !selectedGroup}type="button" className="btn-primary" onClick={() => { utils.handleNextButtonClick({selectedCenter, selectedGroup},{dispatch,setSelectedCenter,setSelectedGroup, navigate })   }}>Search</button>
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

export const handleCenterSelection = (data, methods) => {
    const { centerId, lucDetails } = data;
    const { setSlectedCenter, setGroups } = methods;
    setSlectedCenter(centerId);
    const groups = lucDetails.find(c => c.centerId === centerId)?.groups || [];
    setGroups(groups);
}

export const handleGroupSelection = (data, methods) => {
    const {groupId } = data;
    const { setSlectedGroup } = methods;
    setSlectedGroup(groupId);
}

export const handleNextButtonClick = (data, methods) => {
    const {selectedCenter, selectedGroup} = data;
    const {dispatch,setSelectedCenter, navigate, setSelectedGroup } = methods;
    dispatch(setSelectedCenter(selectedCenter));
    dispatch(setSelectedGroup(selectedGroup));
    navigate(`/dashboard/luc/clientlist`);
}

export const parseLucObject = async(data) => {
    const uniqueCenters = [...new Set(data.map(obj => obj.CenterId))];
    const parsedData = uniqueCenters.reduce((acc, centerId) => {
    const centerData = data.find(obj => obj.CenterId === centerId);
    const centerName = centerData.CenterName;
    const centerGroups = data.filter(obj => obj.CenterId === centerId);
    const uniqueGroups = [...new Set(centerGroups.map(obj => obj.GroupId))];
    const parsedGroups = uniqueGroups.map(groupId => {
      const groupData = centerGroups.find(obj => obj.GroupId === groupId);
      const groupName = groupData.GroupName;
      const members = centerGroups
        .filter(obj => obj.GroupId === groupId)
        .map(obj => ({
          sNo: obj.Sno,
          villageId: obj.VillageId,
          villageName: obj.VillageName,
          centerId: obj.CenterId,
          centerName: obj.CenterName,
          groupName: obj.GroupName,
          groupId: obj.GroupId,
          memberName: obj.MemberName,
          spouseName: obj.Spouse_Name,
          loanId: obj.LoanId,
          loanAmount: obj.LoanAmount,
          purposeName: obj.PurposeName,
          lucDate: obj.LUCDate,
          disbursementDate: obj.DisbursementDate,
          secondId: obj.Second_Id,
          purposeId: obj.PurposeId
        }));
      
      return {
        groupId,
        groupName,
        members
      };
    });
  
    acc.push({
      centerId,
      centerName,
      groups: parsedGroups
    });
  
    return acc;
  }, []);

  return parsedData;
}

export default LUC_Check