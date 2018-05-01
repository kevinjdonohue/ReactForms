import React, { Component } from 'react';

class Textbox extends Component {
  render() {
    const { label, id, name, maxLength, placeholder, value, onChange } = this.props;

    return (
      <label htmlFor={id}>
        {label}
        <input
          id={id}
          name={name}
          type="text"
          maxLength={maxLength}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </label>
    );
  }
}

export default Textbox;
