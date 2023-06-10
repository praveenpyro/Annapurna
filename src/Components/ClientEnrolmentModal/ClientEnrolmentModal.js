import React from 'react'
import '../../html/assets/css/global.css';
import '../../html/assets/css/buttons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ClientEnrolmentModal.css';
const ClientEnrolmentModal = (props) => {
    const { handleClientEnrolmentBranch, handleClientEnrolmentField} = props;
  return (
    <div className="modal fade-in custom-modal-clientenrolment" id="clientEnrolmentDialog" role="dialog">
        <div className="modal-dialog small">
            <div className="modal-content custom-modal-clientenrolment-content">
                <div class="info-img">
                    <img  src={require('../../html/assets/images/enrollment.svg').default }/>
                </div>
                <h2 class="center">Client Enrolment</h2>
                <button class="btn btn-primary w-100 mt-30" onClick={() => handleClientEnrolmentBranch()}>Branch</button>
                <button class="btn w-100 mt-30" data-dismiss="modal" onClick={() => handleClientEnrolmentField()}>Field</button>
            </div>
        </div>
    </div>
  )
}

export default ClientEnrolmentModal