import React from "react";

class ProfileModal extends React.Component {
  render() {
    return (
      <div
        id="user-profile-modal"
        className="modal fade"
        tabIndex={-1}
        role="dialog"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
              <h4 className="modal-title">
                User Profile Information (from Auth0 via Lambda)
              </h4>
            </div>
            <div className="modal-body">
              <b>Raw JSON from Auth0:</b>
              <pre id="user-profile-raw-json" />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
          {}
        </div>
        {}
      </div>
    );
  }
}

export default ProfileModal;
