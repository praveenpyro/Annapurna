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
const Login = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleUserName = (event) => {
        setUserName(event.target.value);
    }

    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleLogin = () => {
        if(userName === 'FCO' || userName ==='BHM' ) {
            dispatch(login({ name : userName, password:password, age : 10, email : "jayam@jayam.com"}));
            localStorage.setItem("login",true);
            navigate('/dashboard');
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
                                <input type="text" placeholder="Enter Username" className="form-control" value={userName} onChange={handleUserName}/>
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
    </>            
  )
}

export default Login