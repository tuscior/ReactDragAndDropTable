import React from "react";
import PropTypes from "prop-types";
import Modal from "./Modal";

const MessagePrompt = props => {
  return (
    <Modal onClose={props.onClose} show={props.show}>
      <div className="deleteView">
        <i className="icon exclamation triangle"></i>
        <div className="content">
          {props.message}
          <button
            className="ui inverted red button"
            onClick={() => props.confirm.call(undefined, props.args)}
          >
            {props.confirmButtonText}
          </button>
          <button
            className="ui inverted green button"
            onClick={() => props.negate.call(undefined, props.args)}
          >
            {props.negateButtonText}
          </button>
        </div>
      </div>
    </Modal>
  );
};

MessagePrompt.defaultProps = {
  message: "Are you sure you want to remove this user ?",
  confirmButtonText: "Yes",
  negateButtonText: "No"
};

MessagePrompt.propTypes = {
  confirm: PropTypes.func.isRequired,
  negate: PropTypes.func.isRequired
};

export default MessagePrompt;
