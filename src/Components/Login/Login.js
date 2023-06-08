import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../reducers/user'
import 'bootstrap/dist/css/bootstrap.min.css';

import '../../html/assets/css/onbording.css'
import '../../html/assets/css/flexslider.css'
import '../../html/assets/css/global.css';
import '../../html/assets/css/buttons.css';
import './Login.css'
import slidesecond from '../../html/assets/images/slide-second.png';
import logo from '../../html/assets/images/Annapurna-logo.svg';
import eyeclose from '../../html/assets/images/eye-close.svg';
import eyeopen from '../../html/assets/images/eye-open.svg';
import erroric from '../../html/assets/images/error-ic.svg';
import $ from 'jquery';
import Modal  from '../Modal/Modal';
import Loader from '../Loader/Loader';
import { callApi } from '../../api/callApi';
const Login = () => {
    const [userName, setUserName] = useState('Admin');
    const [password, setPassword] = useState('Jayam@123');
    const [showModal, setShowModal] = useState(false);
    const [showLoader, setShowLoader] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const username_auth = 'Jayam';
    const password_auth = 'Jayam@123';
    const url = 'https://jspl.jayamsolutions.com:9097/AFPL_React/API/Login';
    const loginDetailsUrl = 'https://jspl.jayamsolutions.com:9097/AFPL_React/API/LoginDetails';
    const handleUserName = (event) => {
        setUserName(event.target.value);
    }

    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    const  fetchLoginStatus = async() => {
        const request = {
            "UserId": userName,
            "Password": password,
            "MACID": "12345",
            "Version": "1.1"
          };

          const headers=  {
            Authorization: `Basic ${btoa(`${username_auth}:${password_auth}`)}`,
            'Content-Type': 'application/json',
          }
        const response = await callApi({url, method: 'POST', headers: headers, data: request});
        console.log(response);
        return response;
    }

    const  fetchLoginDetails = async() => {
        const request = { "UserId": userName, "Password": password };
        const response = await callApi({url:loginDetailsUrl, method: 'POST', data: request});
        console.log(response);
        return response;
    }

    const handleLogin = async() => {
        if( !!userName  && !!password ) {
            
              setShowLoader(true);
              const { status, data }  = await fetchLoginStatus() ;
              const { LoginDetails } = await fetchLoginDetails();
              setShowLoader(false);
              if(status) {
                localStorage.setItem("login",true);
                localStorage.setItem("jwtToken",data.token);
                localStorage.setItem("userName", userName);
                localStorage.setItem("password", password);
                dispatch(login(LoginDetails));
                navigate('/dashboard');
                
              } else {
                setShowModal(true);
              }
           
        } else {
            setShowModal(true);
        }
       
    };

    const close = () => {
        setShowModal(false);
    }
  return (
    <>
        <div className="onboarding Login">
            <div className="container">
                <div className="left-section">
                    <div >
                    <img src={slidesecond} alt="Slide Second"/>
                    </div>
                </div>
                <div className="right-section">
                    <div className="right-inner">
                        <div className="logo">
                            <a><figure><img src={logo} alt="Annapurna Logo"/></figure></a>
                        </div>
                        <h1 className="page-name text-start">Login</h1>
                        <form>
                            <label className="form-label text-start">Username</label>
                            <div className="form-group">
                                <input type="text" placeholder="Enter Username" className="form-control" value={userName} onChange={handleUserName} />
                            </div>
                            <label className="form-label text-start">Password</label>
                            <div className="form-group">
                                <div className="pass-row">
                                    <input type="password" placeholder="Enter Password" className="form-control" value={password} onChange={handlePassword}/>
                                    <a className="suffix-icon">
                                        <img src={eyeclose} alt="Eye Close Icon" className="eye-close"/>
                                        <img src={eyeopen} alt="Eye Open Icon" className="eye-open hide"/>
                                    </a>
                                </div>
                            </div>
                            <p className="error"><img src={erroric} alt="Error Icon"/>The username or password is incorrect!</p>
                            <div className="remember-forgot-wrap">
                                <div className="remember-me">
                                    <label className="checkbox-container">Remember Password
                                        <input type="checkbox"></input>
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                                <div className="forgot-password">
                                    <a href="forgot-password.html">Forgot Password?</a>
                                </div>
                            </div>
                            <div className="btn-wrap">
                                <button type="button" className="btn-primary" onClick={() => {
                                handleLogin();
                                }}>Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
       { showModal && <Modal close={close}/> }
       {showLoader && <Loader/>}
    </>            
  )
}



export default Login