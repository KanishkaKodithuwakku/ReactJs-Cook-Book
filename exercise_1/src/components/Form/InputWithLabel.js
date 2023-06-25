import React from 'react';

const InputWidthLabel = ({ label, value, onChange, placeholder, name }) => {
    return (
        <div className="form-group">
            {label && <label>{label}</label>}
            <input
                className="form-control"
                placeholder={placeholder}
                value={value}
                name={name}
                onChange={onChange}
            />
        </div>
    )
};

export default InputWidthLabel;