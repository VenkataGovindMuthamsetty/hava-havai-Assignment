import React from 'react';
import './index.css';

const Modal = ({ show, handleClose, handleAddTerminal, handleInputChange, newTerminal }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <div className="modal-header">
          <h5>Add Terminal</h5>
          <button onClick={handleClose}>&times;</button>
        </div>
        <div className="modal-body">
          <form>
            <div className="form-group">
              <label htmlFor="terminalTitle">Terminal Title</label>
              <input
                type="text"
                id="terminalTitle"
                name="title"
                value={newTerminal.title}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="terminalDescription">Description</label>
              <textarea
                id="terminalDescription"
                name="description"
                value={newTerminal.description}
                onChange={handleInputChange}
                rows="3"
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="uploadImage">Upload Image</label>
              <input
                type="file"
                id="uploadImage"
                name="image"
                onChange={(e) => console.log(e.target.files[0])}
              />
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button onClick={handleClose} className="btn">Cancel</button>
          <button onClick={handleAddTerminal} className="btn">Add Terminal</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;