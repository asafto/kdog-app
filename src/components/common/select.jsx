import React from 'react';

const Select = ({ name, label, options, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select
        {...rest}
        name={name}
        id={name}
        className={'form-control'}>
        {options.map((option, index) => {
          return <option key={index}>{option}</option>;
        })}
        ;
      </select>
      {error && <span className="text-danger">{error}</span>}
    </div>
  );
};

export default Select;
