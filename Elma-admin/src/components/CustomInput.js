import React from 'react'

const CustomInput = (props) => {
    const { type, label, i_id, i_class, name, value, onChange, onBlr } = props
    return (
        <div className="form-floating mt-3">
            <input
                type={type}
                className={`form-control ${i_class}`}
                id={i_id}
                placeholder={label}
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlr}
            />
            <label htmlFor={label}>{label}</label>
        </div>
    )
}

export default CustomInput
