import React from 'react';

const Textbox = (props) => {
  const { label, id, name, maxLength, placeholder, value, onChange } = props;
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

export default Textbox;
