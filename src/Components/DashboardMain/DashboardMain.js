import React from 'react';
import './DashboardMain.css';
import Barchart from '../../Charts/Barchart';
import { SideNavMenuConfig_FCO, SideNavMenuConfig_BM } from '../SideNavMenu/SideNavMenuConfig';

const DashboardMain = (props) => {
    const { user } = props;
    const menu = (user.name === 'FCO' ? SideNavMenuConfig_FCO : SideNavMenuConfig_BM).filter(item => item.showOnDashboard);
  return (
    <div className="dashboard-main dash-content">
            <div className="dashboard-header">
                <h1 className="branch-name">Branch Name: Branch one <span>Medium Risk</span></h1>
                <div className="transection-login-date">
                    <p>Transaction Date: <b>09:09:2022</b></p>
                    <p>Login Date and Time : <b>10:09:2022, 3:40PM</b></p>
                </div>
            </div>
            <div className="info-card-listing">
                <div className="card-row">
                    { 
                        menu.map((item) => (
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
                    <h3>Insights <a><img src={require("../../html/assets/images/loader-ic.svg").default} alt="Icon" /></a></h3>
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
                            <h2 className="value">2345</h2>
                            <p>Amount: Rs. <span>1,00,000</span></p>
                        </div>
                    </div>
                    <div className="insights-col">
                        <div className="insights-inner">
                            <h3 className="heading">Applications Sanctioned</h3>
                            <h2 className="value">3456</h2>
                            <p>Amount: Rs. <span>1,00,000</span></p>
                        </div>
                    </div>
                    <div className="insights-col">
                        <div className="insights-inner">
                            <h3 className="heading">In process Clients</h3>
                            <h2 className="value">6786</h2>
                            <p>Amount: Rs. <span>1,00,000</span></p>
                        </div>
                    </div>
                    <div className="insights-col">
                        <div className="insights-inner">
                            <h3 className="heading">Disbursed Applicants</h3>
                            <h2 className="value">567</h2>
                            <p>Amount: Rs. <span>1,00,000</span></p>
                        </div>
                    </div>
                    <div className="insights-col">
                        <div className="insights-inner">
                            <h3 className="heading">Rejected Applications</h3>
                            <h2 className="value">300</h2>
                            <p>Amount: Rs. <span>1,00,000</span></p>
                        </div>
                    </div>
                    <div className="insights-col">
                        <div className="insights-inner">
                            <h3 className="heading">Active Clients</h3>
                            <h2 className="value">9367</h2>
                            <p>Amount: Rs. <span>1,00,000</span></p>
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
        </div>
  )
}

export default DashboardMain