import React, {useState} from 'react'
import '../../html/assets/css/global.css';
import '../../html/assets/css/buttons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Modal.css';
const Modal = ({data, close}) => {
  return (
    <div className="modal custom-modal" id="invalidMatchDialog" role="dialog">
    <div className="modal-dialog small">
        <div className="modal-content custom-modal-content">
            <div className="info-img">
                <img src={require('../../html/assets/images/invalid-ic.svg').default} />
            </div>
            <h2 className="regular center">Invalid Credentials.</h2>
            <button className="btn full-width mt-15" data-dismiss="modal" type='button' onClick={() => { close()}}>Okay</button>
        </div>
    </div>
</div>
  )
}

export default Modal