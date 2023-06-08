import React, {useEffect, useState} from 'react';
import './DashboardMain.css';
import Barchart from '../../Charts/Barchart';
import { Menu } from '../SideNavMenu/SideNavMenuConfig';
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../Loader/Loader';
import { callApi } from '../../api/callApi';
import { login } from '../../reducers/user'

const DashboardMain = (props) => {
    const user = useSelector((state) => state.user.value);
    const dispatch = useDispatch();
    const roles = user?.roles?.split('|');
    const updateRoles = roles?.map(role => Menu.find(m => m.id === role)) || [];
    const MENU_LIST = [...updateRoles];
    const [showLoader, setShowLoader] = useState(false);
    const loginDetailsUrl = 'https://jspl.jayamsolutions.com:9097/AFPL_React/API/LoginDetails';

    const handleReload = async() => {
        setShowLoader(true);
        const userName = localStorage.getItem('userName');
        const password = localStorage.getItem('password');
        const request = { "UserId": userName, "Password": password };
        const { LoginDetails } = await callApi({url:loginDetailsUrl, method: 'POST', data: request});
        setShowLoader(false);
        dispatch(login(LoginDetails));
    }

    useEffect(() => {
        handleReload();
    },[]);
  return (
    <div className="dashboard-main dash-content">
            <div className="dashboard-header">
                <h1 className="branch-name">Branch Name: {user.branch} <span>{user.branch_status}</span></h1>
                <div className="transection-login-date">
                    <p>Transaction Date: <b>{user.transactiondate}</b></p>
                    <p>Login Date and Time : <b>{user.login_date}</b></p>
                </div>
            </div>
            <div className="info-card-listing">
                <div className="card-row">
                    { 
                        MENU_LIST.map((item) => (
                            <div className="card-col">
                                <div className="card-inner">
                                    <a href="new-application/search-client.html">
                                        <figure>
                                            <img src={item.dashimage} alt="Icon" />
                                        </figure>
                                        <h3>{item.name}</h3>
                                    </a>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="insights-wrapper">
                <div className="insights-header">
                    <h3>Insights <a><img src={require("../../html/assets/images/loader-ic.svg").default} alt="Icon" onClick={() => handleReload()}/></a></h3>
                    <div className="right-tabs">
                        <ul>
                            <li className="active"><a>MTD</a></li>
                            <li><a>QTD</a></li>
                            <li><a>YTD</a></li>
                        </ul>
                    </div>
                </div>
                <div className="insights-row">
                    <div className="insights-col">
                        <div className="insights-inner">
                            <h3 className="heading">No. of Applications</h3>
                            <h2 className="value">{user.noofapps}</h2>
                            <p>Amount: Rs. <span>{user.noofapps_amount}</span></p>
                        </div>
                    </div>
                    <div className="insights-col">
                        <div className="insights-inner">
                            <h3 className="heading">Applications Sanctioned</h3>
                            <h2 className="value">{user.noofapps_sanctioned}</h2>
                            <p>Amount: Rs. <span>{user.noofapps_sanctioned_amount}</span></p>
                        </div>
                    </div>
                    <div className="insights-col">
                        <div className="insights-inner">
                            <h3 className="heading">In process Clients</h3>
                            <h2 className="value">{user.inprocess_clients}</h2>
                            <p>Amount: Rs. <span>{user.inprocess_clients_amount}</span></p>
                        </div>
                    </div>
                    <div className="insights-col">
                        <div className="insights-inner">
                            <h3 className="heading">Disbursed Applicants</h3>
                            <h2 className="value">{user.disb_apps}</h2>
                            <p>Amount: Rs. <span>{user.disb_apps_amount}</span></p>
                        </div>
                    </div>
                    <div className="insights-col">
                        <div className="insights-inner">
                            <h3 className="heading">Rejected Applications</h3>
                            <h2 className="value">{user.reject_apps}</h2>
                            <p>Amount: Rs. <span>{user.reject_apps_amount}</span></p>
                        </div>
                    </div>
                    <div className="insights-col">
                        <div className="insights-inner">
                            <h3 className="heading">Active Clients</h3>
                            <h2 className="value">{user.active_clients}</h2>
                            <p>Amount: Rs. <span>{user.active_clients_amount}</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="chart-section">
                <div className="chart-header">
                    <h3>Statistics</h3>
                    <div className="date-picker-wrap">
                        <div className="date-picker-inner-wrap">
                            <div className="form-group">
                                <input type="text" placeholder="From Date" className="form-control date-picker"></input>
                            </div>
                            <div className="form-group">
                                <input type="text" placeholder="To Date" className="form-control date-picker"></input>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="chart-image">
                    {/* <figure>
                        <img src={"../../html/assets/images/chart-image.png"} alt="Chart Image"/>
                    </figure> */}
                    <Barchart barchartid="barchart1"/>
                </div>
            </div>
            {showLoader && <Loader/>}
        </div>
  )
}

export default DashboardMain