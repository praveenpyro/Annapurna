import React from 'react'
import '../../html/assets/css/global.css';
import '../../html/assets/css/buttons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LogoutModal.css';
const LogoutModal = (props) => {
  const { handleLogoutModal, handleLogout } = props;
  return (
    <div className="modal fade-in custom-modal-logout" id="logOutDialog" role="dialog">
        <div className="modal-dialog small">
            <div className="modal-content custom-modal-logout-content">
                <div className="info-img">
                    <img src={require('../../html/assets/images/invalid-ic.svg').default} />
                </div>
                <h2 className="center">Are you sure you want to log out?</h2>
                <a className="btn btn-primary w-100 mt-30" onClick={() => {handleLogout()}}>Yes</a>
                <button className="btn w-100 mt-20" data-dismiss="modal" onClick={() => { handleLogoutModal()}}>No</button>
            </div>
        </div>
    </div>
  )
}

export default LogoutModal