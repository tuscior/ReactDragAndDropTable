import React from "react";
import PropTypes from "prop-types";

const TextInput = ({ handleChange, title, value, fieldName }) => (
  <div>
    <label className="ui horizontal large label">{title}</label>
    <div className="ui input">
      <input
        type="text"
        value={value}
        onChange={event => handleChange(event.target.value, fieldName)}
      />
    </div>
  </div>
);

TextInput.propTypes = {
  handleChange: PropTypes.func,
  title: PropTypes.string,
  value: PropTypes.string,
  fieldName: PropTypes.string.isRequired
};

TextInput.defaultProps = {
  handleChange: event => console.info(`New value : ${event}`),
  title: null,
  value: null
};

export default TextInput;
