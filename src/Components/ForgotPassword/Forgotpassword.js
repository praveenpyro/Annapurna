
import React from 'react'
import {useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../reducers/user'
import slidefirst from '../../html/assets/images/slide-first.png';
import slidesecond from '../../html/assets/images/slide-second.png';
import logo from '../../html/assets/images/Annapurna-logo.svg';
import './Forgotpassword.css'
const Forgotpassword = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
  return (
    <>
       <div className="onboarding">
        <div className="container">
            <div className="left-section">
                <div className="flexslider">
                  <div> <img src={slidefirst} alt="Slide First"/></div> 
                </div>
            </div>
            <div className="right-section">
                <div className="right-inner">
                    <div className="logo">
                        <a><figure><img src={logo} alt="Annapurna Logo"/></figure></a>
                    </div>
                    <h1 className="page-name">Forgot Password</h1>
                    <form>
                        <label className="form-label">Employee ID</label>
                        <div className="form-group">
                            <input type="text" placeholder="Enter ID" className="form-control"/>
                        </div>
                        <label className="form-label">Registered Mobile Number </label>
                        <div className="form-group">
                            <input type="number" placeholder="Enter Number" className="form-control"/>
                        </div>
                        <div className="sent-otp">
                            <a href="javascript:void(0)" data-toggle="modal" data-target="#otpSentDialog">Send OTP</a>
                        </div>
                        <div className="sent-otp">
                            <a href="javascript:void(0)" data-toggle="modal" data-target="#maximumAttemptReachedDialog">Resend OTP in 120 seconds</a>
                            <p className="note">(3 attempts left)</p>
                        </div>
                        <label className="form-label">OTP</label>
                        <div className="otp-input">
                            <ul>
                                <li><input type="text" className="form-control" maxlength="1"/></li>
                                <li><input type="text" className="form-control" maxlength="1"/></li>
                                <li><input type="text" className="form-control" maxlength="1"/></li>
                                <li><input type="text" className="form-control" maxlength="1"/></li>
                                <li><input type="text" className="form-control" maxlength="1"/></li>
                                <li><input type="text" className="form-control" maxlength="1"/></li>
                            </ul>
                        </div>
                        <div className="info">
                            <p>(Please enter verification code sent on your number.)</p>
                        </div>
                        <div className="btn-wrap">
                            <button type="button" className="btn-primary" data-toggle="modal" data-target="#invalidMatchDialog">Verify & Next</button>
                            <a href="" onClick={() => navigate('/login')} className="back-link">Back to Login</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    </>
  )
}

export default Forgotpassword
