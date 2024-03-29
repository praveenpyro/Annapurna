import React from 'react';
import './GenericModal.css';

const GenericModal = (props) => {
    const { message, buttons, imageUrl, textArea, dropdown, handler } = props;
    const handleButtonClick = (handler) => {
        handler();
    };
  return (
    <div className="modal fade-in custom-modal-generic" id="approveDialog" role="dialog">
    <div className="modal-dialog small">
      <div className="modal-content custom-modal-generic-content">
        <div className="info-img">
          <img src={imageUrl} />
        </div>
        <h2 className="center mb-20">{message}</h2>
        {textArea && 
          <div className="form-group">
            <textarea type="text" rows="3" placeholder="Add Remarks" className="form-control"></textarea>
          </div>
        }

        {dropdown && 
          <div class="form-group">
            <select name="selectName" id="selectId" class="form-control" aria-placeholder="Select" onChange={(e) => { handler && handler(e.target.value)}}>
              {
                dropdown.map((value, index) =>(
                  <option  key={index} value={value.value}>{value.label}</option>
                ))
              }
            </select>
          </div>
        }
        
        {buttons?.map((button, index) => (
            <button
              key={index}
              onClick={() => handleButtonClick(button.handler)}
              className={button.primary ? 'btn btn-primary w-100 mt-30' : 'btn w-100 mt-20'}
            >
              {button.label}
            </button>
          ))}
      </div>
    </div>
  </div>
  )
}

export default GenericModal;